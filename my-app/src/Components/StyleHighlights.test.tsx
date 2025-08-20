import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import StyleHighlights from './StyleHighlights';

jest.mock('../Hooks/GradientScroll', () => ({
  useIntersectionVisibleStates: (length: number) => ({
    imageRefs: { current: new Array(length).fill(null) },
    visibleStates: new Array(length).fill(true),
  }),
}));

describe('<StyleHighlights />', () => {
  test('renders all images from data', () => {
    render(
      <MemoryRouter>
        <StyleHighlights />
      </MemoryRouter>,
    );

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(10);

    expect(images[0]).toHaveAttribute('alt', 'styleHighlights1');
  });

  test('all images have Book Now links', () => {
    render(
      <MemoryRouter>
        <StyleHighlights />
      </MemoryRouter>,
    );

    const links = screen.getAllByRole('link', { name: /book now/i });
    expect(links).toHaveLength(10);
    links.forEach((link) => {
      expect(link).toHaveAttribute('href', '/services');
    });
  });
});
