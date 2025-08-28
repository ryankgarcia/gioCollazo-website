import { render, screen, cleanup } from '@testing-library/react';
import { act } from 'react';
import { useIntersectionVisibleStates } from './GradientScroll';
import {
  simulateOnLatestIO,
  resetIntersectionObservers,
} from '../test/setupTests';

afterEach(() => {
  cleanup();
  resetIntersectionObservers();
});

function Harness({ length }: { length: number }) {
  const { imageRefs, visibleStates } = useIntersectionVisibleStates(length);
  return (
    <div>
      {Array.from({ length }).map((_, i) => (
        <img
          key={i}
          data-testid={`img-${i}`}
          ref={(el) => {
            imageRefs.current[i] = el;
          }}
          alt=""
        />
      ))}
      {visibleStates.map((v, i) => (
        <span data-testid={`vis-${i}`} key={i}>
          {String(v)}
        </span>
      ))}
    </div>
  );
}

test('observes each img and flips only the intersecting index', () => {
  render(<Harness length={3} />);

  const img0 = screen.getByTestId('img-0');
  const img1 = screen.getByTestId('img-1');
  const img2 = screen.getByTestId('img-2');

  const list = globalThis.__IO_INSTANCES__ ?? [];
  const io = list[list.length - 1];
  if (!io) throw new Error('No IntersectionObserver instance captured');

  const observed = (io.observe as jest.Mock).mock.calls.map(([el]) => el);
  expect(observed).toEqual([img0, img1, img2]);

  // initial flags are false
  expect(screen.getByTestId('vis-0')).toHaveTextContent('false');
  expect(screen.getByTestId('vis-1')).toHaveTextContent('false');
  expect(screen.getByTestId('vis-2')).toHaveTextContent('false');

  // drive an intersection for img1 only
  act(() => {
    simulateOnLatestIO(img1, true);
  });

  // only index 1 should flip
  expect(screen.getByTestId('vis-0')).toHaveTextContent('false');
  expect(screen.getByTestId('vis-1')).toHaveTextContent('true');
  expect(screen.getByTestId('vis-2')).toHaveTextContent('false');

  act(() => {
    simulateOnLatestIO(img1, true);
  });
  expect(screen.getByTestId('vis-1')).toHaveTextContent('true');

  act(() => {
    simulateOnLatestIO(img2, false);
  });
  expect(screen.getByTestId('vis-2')).toHaveTextContent('false');
});

test('ignores unknown targets and disconnects on unmount', () => {
  const { unmount } = render(<Harness length={1} />);
  const fake = document.createElement('div');

  act(() => {
    simulateOnLatestIO(fake, true);
  });
  expect(screen.getByTestId('vis-0')).toHaveTextContent('false');

  unmount();
});
