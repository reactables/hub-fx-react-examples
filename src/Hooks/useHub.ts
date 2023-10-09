import { useRef } from 'react';
import { HubFactory, HubConfig, Hub } from '@hub-fx/core';

export const useHub = (hub?: Hub, config?: HubConfig) => {
  return useRef(hub || HubFactory(config)).current;
};
