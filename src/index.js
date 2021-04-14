import { type, type as typeLoop } from '@camwiegert/typical';
import React, { useRef, useEffect, memo } from 'react';

import styles from './styles.css';

const TypeAnimation = ({
  sequence,
  loop = 0,
  className,
  wrapper = 'p',
  cursor = true
}) => {
  const typeRef = useRef(null);
  const classNames = [styles.type];

  let finalClassName;

  if (className) {
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
    if (loop === Infinity) {
      type(typeRef.current, ...sequence, typeLoop);
    } else if (typeof loop === 'number') {
      type(
        typeRef.current,
        ...Array(loop)
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
