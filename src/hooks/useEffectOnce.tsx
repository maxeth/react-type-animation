import { useEffect, useRef, useState } from 'react';

export const useEffectOnce = (effect: () => void | (() => void)) => {
  const effectFn = useRef<() => void | (() => void)>(effect);
  const destroyFn = useRef<void | (() => void)>();
  const effectCalled = useRef(false);
  const rendered = useRef(false);
  const [, setVal] = useState<number>(0);

  if (effectCalled.current) {
    rendered.current = true;
  }

  useEffect(() => {
    if (!effectCalled.current) {
      destroyFn.current = effectFn.current();
      effectCalled.current = true;
    }

    setVal(val => val + 1);

    return () => {
      if (!rendered.current) {
        return;
      }

      if (destroyFn.current) {
        destroyFn.current();
      }
    };
  }, []);
};
