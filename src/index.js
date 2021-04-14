import { type, type as typeLoop } from '@camwiegert/typical';
import React, { useRef, useEffect, memo } from 'react';

import styles from './styles.css';

const TypeAnimation = ({
  sequence,
  repeat,
  className,
  wrapper = 'p',
  cursor = true
}) => {
  const typeRef = useRef(null);
  const classNames = [styles.type];

  let finalClassName;

  if (className && className.length > 0) {
    if (!cursor) {
      finalClassName = className;
    } else {
      classNames.push(className);
      finalClassName = classNames.join(' ');
    }
  } else {
    if (!cursor) {
      finalClassName = '';
    }
  }

  useEffect(() => {
    if (repeat === Infinity) {
      type(typeRef.current, ...sequence, typeLoop);
    } else if (typeof repeat === 'number') {
      type(
        typeRef.current,
        ...Array(repeat)
          .fill(sequence)
          .flat()
      );
    } else {
      type(typeRef.current, ...sequence);
    }
  });

  const Wrapper = wrapper;
  return <Wrapper className={finalClassName} ref={typeRef} />;
};

export default memo(TypeAnimation);
