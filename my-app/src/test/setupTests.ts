import '@testing-library/jest-dom';

import { TextEncoder, TextDecoder as NodeTextDecoder } from 'util';

declare global {
  interface GlobalThis {
    TextEncoder: typeof import('util').TextEncoder;
    TextDecoder: typeof import('util').TextDecoder;
    IntersectionObserver: {
      new (
        callback: IntersectionObserverCallback,
        options?: IntersectionObserverInit,
      ): IntersectionObserver;
      prototype: IntersectionObserver;
    };
  }
}

Object.defineProperty(globalThis, 'TextEncoder', {
  value: TextEncoder,
  writable: true,
  configurable: true,
});

Object.defineProperty(globalThis, 'TextDecoder', {
  value: NodeTextDecoder,
  writable: true,
  configurable: true,
});

class IO implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin: string = '';
  readonly thresholds: ReadonlyArray<number> = [];

  callback: IntersectionObserverCallback;

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
  }

  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
  takeRecords = () => [];
}

Object.defineProperty(globalThis, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IO,
});

export {};
