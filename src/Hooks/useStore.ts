import { useEffect, useState, useRef } from 'react';
import { StoreConfig, Hub } from '@hub-fx/core';

export const useStore = <T>(hub: Hub, storeConfig: StoreConfig<T>) => {
  const currentObs$ = useRef(hub.store(storeConfig)).current;
  const { reducer, initialState } = storeConfig;
  const [state, setState] = useState<T>(initialState !== undefined ? initialState : reducer());

  useEffect(() => {
    const subscription = currentObs$.subscribe((result) => {
      setState(result);
    });

    const unsubscribe = subscription.unsubscribe.bind(subscription) as () => void;

    return unsubscribe;
  }, []);

  return state;
};
