import { useEffect, useState, useRef } from 'react';
import { Reactable } from '@hub-fx/core';

// Currently only working properly when not in Strict Mode
export const useReactable = <T, S>(reactable: Reactable<T, S>) => {
  const { state$, actions } = useRef(reactable).current;
  const [state, setState] = useState<T>();

  useEffect(() => {
    const subscription = state$.subscribe((result) => {
      setState(result);
    });

    const unsubscribe = subscription.unsubscribe.bind(subscription) as () => void;

    return unsubscribe;
  }, [state$]);

  return { state, actions };
};
