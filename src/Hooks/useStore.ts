import { useEffect, useState, useRef } from 'react';
import { StoreConfig, Hub } from '@hub-fx/core';

export const useStore = <T>(hub: Hub, storeConfig: StoreConfig<T>) => {
  // Create reference for store observable
  const currentObs$ = useRef(hub.store(storeConfig)).current;

  const { reducer, initialState } = storeConfig;

  // Set initial React State
  const [state, setState] = useState<T>(initialState !== undefined ? initialState : reducer());

  useEffect(() => {
    // Subscribe to store observable to bind React state to store changes
    const subscription = currentObs$.subscribe((result) => {
      setState(result);
    });

    // Unsubscribe from store when component unmounts
    const unsubscribe = subscription.unsubscribe.bind(subscription) as () => void;

    return unsubscribe;
  }, [currentObs$]);

  return state;
};
