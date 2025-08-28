import { render } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ScrollToTop from './LinkTopOfPage';

beforeAll(() => {
  Object.defineProperty(window, 'scrollTo', {
    value: jest.fn(),
    writable: true,
  });
});

beforeEach(() => {
  (window.scrollTo as jest.Mock).mockClear();
});

function NavTo({ to }: { to: string }) {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  }, [to, navigate]);
  return null;
}

describe('<ScrollToTop />', () => {
  test('calls window.scrollTo on initial mount', () => {
    render(
      <MemoryRouter initialEntries={['/start']}>
        <ScrollToTop />
      </MemoryRouter>,
    );

    expect(window.scrollTo).toHaveBeenCalled();
    expect(window.scrollTo).toHaveBeenLastCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });

  test('calls window.scrollTo again when a pathname changes', () => {
    const { rerender } = render(
      <MemoryRouter initialEntries={['/a']}>
        <ScrollToTop />
      </MemoryRouter>,
    );

    (window.scrollTo as jest.Mock).mockClear();

    rerender(
      <MemoryRouter initialEntries={['/a']}>
        <ScrollToTop />
        <NavTo to="/b" />
      </MemoryRouter>,
    );

    expect(window.scrollTo).toHaveBeenCalledTimes(1);
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });

  test('does not call again when only search/hash changes (same pathname)', () => {
    const { rerender } = render(
      <MemoryRouter initialEntries={['/same']}>
        <ScrollToTop />
      </MemoryRouter>,
    );

    (window.scrollTo as jest.Mock).mockClear();

    rerender(
      <MemoryRouter initialEntries={['/same?x=1']}>
        <ScrollToTop />
      </MemoryRouter>,
    );
    expect(window.scrollTo).not.toHaveBeenCalled();

    rerender(
      <MemoryRouter initialEntries={['/same#section']}>
        <ScrollToTop />
      </MemoryRouter>,
    );
    expect(window.scrollTo).not.toHaveBeenCalled();
  });
});
