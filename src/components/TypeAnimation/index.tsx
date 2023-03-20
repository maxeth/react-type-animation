import React, { forwardRef, HTMLAttributes, memo } from 'react';
import { useEffectOnce } from '../../hooks/useEffectOnce';
import useForwardRef from '../../hooks/useForwardRef';
import { type, type as typeloop } from '../../typical';
import styles from './index.module.css';
import { GranularSpeed, TypeAnimationProps, Wrapper } from './index.types';

const DEFAULT_SPEED = 40;
const TypeAnimation = forwardRef<
  HTMLElementTagNameMap[Wrapper],
  TypeAnimationProps & HTMLAttributes<HTMLElementTagNameMap[Wrapper]>
>(
  (
    {
      sequence,
      repeat,
      className,
      speed = DEFAULT_SPEED,
      deletionSpeed,
      omitDeletionAnimation = false,
      wrapper = 'span',
      cursor = true,
      style
    },
    ref
  ) => {
    if (!deletionSpeed) {
      deletionSpeed = speed;
    }

    const normalizedSpeeds = new Array(2).fill(DEFAULT_SPEED);

    [speed, deletionSpeed].forEach((s, i) => {
      switch (typeof s) {
        case 'number':
          normalizedSpeeds[i] = Math.abs(s - 100);
          break;
        case 'object':
          const { type, value } = s as GranularSpeed;
          if (typeof value !== 'number') {
            break;
            // throw new Error("Expected key 'value' of type number.");
          }
          switch (type) {
            case 'keyStrokeDelayInMs': {
              normalizedSpeeds[i] = value;
              break;
            }
          }
          break;
      }
    });

    const keyStrokeDelayTyping = normalizedSpeeds[0];
    const keyStrokeDelayDeleting = normalizedSpeeds[1];

    const typeRef = useForwardRef<any>(ref);

    let baseStyle = styles.type;
    let finalClassName;
    if (className) {
      finalClassName = `${cursor ? baseStyle + ' ' : ''}${className}`;
    } else {
      finalClassName = cursor ? baseStyle : '';
    }

    useEffectOnce(() => {
      let seq = sequence;
      let tl;

      if (repeat === Infinity) {
        tl = typeloop;
      } else if (typeof repeat === 'number') {
        seq = Array(1 + repeat) // Animation should be performed (1 + repeat) many times
          .fill(sequence)
          .flat();
      }

      type(
        typeRef.current,
        keyStrokeDelayTyping,
        keyStrokeDelayDeleting,
        omitDeletionAnimation,
        ...seq,
        tl
      );

      return () => {
        typeRef.current;
      };
    });

    const WrapperEl = wrapper;
    return <WrapperEl style={style} className={finalClassName} ref={typeRef} />;
  }
);

export default memo(TypeAnimation, (_, __) => {
  return true; // IMMUTABLE
});
