import { useRef } from 'react';
import { HubFactory, HubConfig, Hub } from '@hub-fx/core';

export const useHub = (hub: Hub, config?: HubConfig) => {
  // Creates a new hub if one is not provided.
  return useRef(hub || HubFactory(config)).current;
};
