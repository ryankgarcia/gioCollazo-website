import '@testing-library/jest-dom';

import { TextEncoder, TextDecoder as NodeTextDecoder } from 'util';

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

declare global {
  // makes it easy to simulate intersections later
  var __IO_INSTANCES__: IO[] | undefined;
}

function emptyRect(): DOMRectReadOnly {
  // JSDOM may not have DOMRectReadOnly; return a plain object with the shape

  return {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    toJSON() {
      return {};
    },
  } as DOMRectReadOnly;
}

// used by the mock to emit realistic callback payloads
export function makeEntry(
  target: Element,
  isIntersecting: boolean,
): IntersectionObserverEntry {
  const rectLike = target.getBoundingClientRect?.();
  const rect: DOMRectReadOnly = rectLike
    ? ({
        x: rectLike.x,
        y: rectLike.y,
        width: rectLike.width,
        height: rectLike.height,
        top: rectLike.top,
        right: rectLike.right,
        bottom: rectLike.bottom,
        left: rectLike.left,
        toJSON() {
          return {};
        },
      } as DOMRectReadOnly)
    : emptyRect();

  const partial: Pick<
    IntersectionObserverEntry,
    | 'target'
    | 'isIntersecting'
    | 'intersectionRatio'
    | 'time'
    | 'rootBounds'
    | 'boundingClientRect'
    | 'intersectionRect'
  > = {
    target,
    isIntersecting,
    intersectionRatio: isIntersecting ? 1 : 0,
    time: Date.now(),
    rootBounds: null,
    boundingClientRect: rect,
    intersectionRect: rect,
  };
  return partial as IntersectionObserverEntry;
}

// mock IntersectionObserver class
// accepts options, tracks observed elements, stores instances, and exposes an _emit() helper so tests can drive intersections
class IO implements IntersectionObserver {
  // keep option fields for assertions/debugging
  readonly root: Element | Document | null = null;
  readonly rootMargin: string = '';
  readonly thresholds: ReadonlyArray<number> = [];

  // tracks observed targets so we can unobserve/inspect
  private _observed = new Set<Element>();
  private _callback: IntersectionObserverCallback;

  // accept options an normalize thresholds like browsers do
  constructor(
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit,
  ) {
    this._callback = callback;
    this.root = options?.root ?? null;
    this.rootMargin = options?.rootMargin ?? '';
    const t = options?.threshold ?? 0;
    this.thresholds = Array.isArray(t) ? t : [t];

    // record this instance globally so tests can access it
    globalThis.__IO_INSTANCES__ ??= [];
    globalThis.__IO_INSTANCES__.push(this);
  }

  // record which elements are being observed
  observe = jest.fn((el: Element) => {
    this._observed.add(el);
  });

  unobserve = jest.fn((el: Element) => {
    this._observed.delete(el);
  });

  disconnect = jest.fn(() => {
    this._observed.clear();
  });

  takeRecords = () => [] as IntersectionObserverEntry[];

  // helper to inspect observed elements (handy for assertions)
  _getObservedElements() {
    return Array.from(this._observed);
  }

  // helper for tests to emit fake IO events
  _emit(entries: { target: Element; isIntersecting: boolean }[]) {
    const ioEntries = entries.map((e) => makeEntry(e.target, e.isIntersecting));
    this._callback(ioEntries, this as unknown as IntersectionObserver);
  }
}

// install mock on the global object (same shape as real API, but points to our IO class)
Object.defineProperty(globalThis, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IO,
});

// Test helpers: these two functions below are functions tests can import to drive intersections or reset
// these helpers were especially used in the GradientScroll.test.tsx to test the custom hook

// function below simulates an IntersectionObserver event on the most recently created mock
// observer instance.

// - accepts one or many elements
// - builds fake IntersectionObserverEntry objects with `isIntersecting` set to true/false
// - invokes the captured callback so the hook updates its visibleStates array as if the
// browser fired a real event

// I used the 'latest' observer instance (list[list.length - 1]) so tests don't accidentally
// emit to older observers left over from previous renders

export function simulateOnLatestIO(
  targets: Element | Element[],
  isIntersecting = true,
) {
  const list = globalThis.__IO_INSTANCES__ ?? [];
  const io = list[list.length - 1];
  if (!io) {
    throw new Error('No IntersectionObserver instances captured yet.');
  }
  const els = Array.isArray(targets) ? targets : [targets];
  io._emit(els.map((el) => ({ target: el, isIntersecting })));
}

// function below clear captured IO instances between tests (if you wish)
export function resetIntersectionObservers() {
  (globalThis.__IO_INSTANCES__ ?? []).splice(0);
}

export {};
