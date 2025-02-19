import { ComponentType } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AccountProvider } from '@gear-js/react-hooks';

import { AppProvider } from './app';
import { ApiProvider } from './api';
import { AlertProvider } from './alert';
import { BlocksProvider } from './blocks';
import { ModalProvider } from './modal';
import { EventsProvider } from './events';
import { ChainProvider } from './chain';
import { OnboardingProvider } from './onboarding';

const providers = [
  BrowserRouter,
  AppProvider,
  AlertProvider,
  ApiProvider,
  AccountProvider,
  OnboardingProvider,
  ChainProvider,
  ModalProvider,
  EventsProvider,
  BlocksProvider,
];

const withProviders = (Component: ComponentType) => () =>
  providers.reduceRight((children, Provider) => <Provider>{children}</Provider>, <Component />);

export { withProviders };
