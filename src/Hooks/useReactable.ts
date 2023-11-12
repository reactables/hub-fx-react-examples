import { useEffect, useState } from 'react';
import { Reactable } from '@hub-fx/core';

export const useReactable = <T, S>(reactable: Reactable<T, S>) => {
  // TODO: should use useRef here but bug with React Strict Mode
  // See: https://github.com/facebook/react/issues/26315

  const [{ state$, actions }] = useState(reactable);

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
