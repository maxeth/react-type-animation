import React, { useRef, useEffect, memo, HtmlHTMLAttributes } from 'react';
import { type, type as typeloop } from '../../typical';
import styles from './index.module.css';
import { useEffectOnce } from '../../hooks/useEffectOnce';

type Speed =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 40
  | 41
  | 42
  | 43
  | 44
  | 45
  | 46
  | 47
  | 48
  | 49
  | 50
  | 51
  | 52
  | 53
  | 54
  | 55
  | 56
  | 57
  | 58
  | 59
  | 60
  | 61
  | 62
  | 63
  | 64
  | 65
  | 66
  | 67
  | 68
  | 69
  | 70
  | 71
  | 72
  | 73
  | 74
  | 75
  | 76
  | 77
  | 78
  | 79
  | 80
  | 81
  | 82
  | 83
  | 84
  | 85
  | 86
  | 87
  | 88
  | 89
  | 90
  | 91
  | 92
  | 93
  | 94
  | 95
  | 96
  | 97
  | 98
  | 99;

interface TypeAnimationProps {
  sequence: Array<
    string | number | ((element: HTMLElement | null) => void | Promise<void>)
  >;
  repeat?: number;
  wrapper?:
    | 'p'
    | 'div'
    | 'span'
    | 'strong'
    | 'a'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'aside'
    | 'b';
  cursor?: boolean;
  speed?: Speed;
  deletionSpeed?: Speed;
}

const TypeAnimation: React.FC<TypeAnimationProps &
  HtmlHTMLAttributes<HTMLElement['style']>> = ({
  sequence,
  repeat,
  className,
  speed = 40,
  deletionSpeed,
  wrapper = 'div',
  cursor = true,
  style
}) => {
  speed = Math.abs(speed - 100) as Speed;
  deletionSpeed = (deletionSpeed
    ? Math.abs(deletionSpeed - 100)
    : speed) as Speed;

  const typeRef = useRef(null);

  let baseStyle = styles.type;

  let finalClassName;

  if (className && className.length > 0) {
    if (!cursor) {
      finalClassName = className;
    } else {
      finalClassName = `${baseStyle} ${className}`;
    }
  } else {
    if (!cursor) {
      finalClassName = '';
    } else {
      finalClassName = baseStyle;
    }
  }

  useEffectOnce(() => {
    if (repeat === Infinity) {
      type(typeRef.current, speed, deletionSpeed!, ...sequence, typeloop);
    } else if (typeof repeat === 'number') {
      type(
        typeRef.current,
        speed,
        deletionSpeed!,
        ...Array(1 + repeat) // Animation should be performed (1 +repeat) times
          .fill(sequence)
          .flat()
      );
    } else {
      type(typeRef.current, speed, deletionSpeed!, ...sequence);
    }
    return () => {
      typeRef.current;
    };
  });

  const Wrapper = wrapper;
  return <Wrapper style={style} className={finalClassName} ref={typeRef} />;
};

export default memo(TypeAnimation, (_, __) => {
  return true; // IMMUTABLE
});
