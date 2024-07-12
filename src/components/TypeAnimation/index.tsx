import React, { forwardRef, HTMLAttributes, memo } from 'react';
import { useEffectOnce } from '../../hooks/useEffectOnce';
import useForwardRef from '../../hooks/useForwardRef';
import { type, type as typeloop } from '../../typical';
import styles from './index.module.css';
import { TypeAnimationProps, Wrapper } from './index.types';

const DEFAULT_SPEED = 40;
const TypeAnimation = forwardRef<
  HTMLElementTagNameMap[Wrapper],
  TypeAnimationProps
>(
  (
    {
      sequence,
      repeat,
      className,
      speed = DEFAULT_SPEED,
      deletionSpeed,
      omitDeletionAnimation = false,
      preRenderFirstString = false,
      wrapper = 'span',
      splitter = (text: string): ReadonlyArray<string> => [...text],
      cursor = true,
      style,
      ...rest
    },
    ref: React.ForwardedRef<HTMLElementTagNameMap[Wrapper]>
  ) => {
    const { 'aria-label': ariaLabel, 'aria-hidden': ariaHidden, role } = rest;

    if (!deletionSpeed) {
      deletionSpeed = speed;
    }

    const normalizedSpeeds = new Array(2).fill(DEFAULT_SPEED);

    [speed, deletionSpeed].forEach((s, i) => {
      switch (typeof s) {
        case 'number':
          normalizedSpeeds[i] = Math.abs(s - 100);
          break;
        case 'object': {
          const { type: speedType, value } = s;

          if (typeof value !== 'number') {
            break;
            // throw new Error("Expected key 'value' of type number.");
          }
          switch (speedType) {
            case 'keyStrokeDelayInMs': {
              normalizedSpeeds[i] = value;
              break;
            }
          }
          break;
        }
      }
    });

    const keyStrokeDelayTyping = normalizedSpeeds[0];
    const keyStrokeDelayDeleting = normalizedSpeeds[1];

    const typeRef = useForwardRef<HTMLElementTagNameMap[Wrapper]>(ref);

    const baseStyle = styles.type;
    let finalClassName;
    if (className) {
      finalClassName = `${cursor ? baseStyle + ' ' : ''}${className}`;
    } else {
      finalClassName = cursor ? baseStyle : '';
    }

    useEffectOnce(() => {
      let seq = sequence;
      let tl: typeof typeloop | undefined;

      if (repeat === Infinity) {
        tl = typeloop;
      } else if (typeof repeat === 'number') {
        seq = Array(1 + repeat) // Animation should be performed (1 + repeat) many times
          .fill(sequence)
          .flat();
      }

      const restArgs = tl ? [...seq, tl] : [...seq];

      type(
        typeRef.current,
        splitter,
        keyStrokeDelayTyping,
        keyStrokeDelayDeleting,
        omitDeletionAnimation,
        ...restArgs
      );
    });

    const WrapperEl = wrapper;

    const preRenderedChildren = preRenderFirstString
      ? ((sequence.find(el => typeof el === 'string') || '') as string)
      : null;

    return (
      <WrapperEl
        aria-hidden={ariaHidden}
        aria-label={ariaLabel}
        role={role}
        style={style}
        className={finalClassName}
        children={
          ariaLabel ? (
            <span
              aria-hidden="true"
              ref={typeRef}
              children={preRenderedChildren}
            />
          ) : (
            preRenderedChildren
          )
        }
        // @ts-ignore
        ref={ariaLabel ? undefined : typeRef}
      />
    );
  }
);

export default memo(TypeAnimation, (_, __) => {
  return true; // IMMUTABLE
});
