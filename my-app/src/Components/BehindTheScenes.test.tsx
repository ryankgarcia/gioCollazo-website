import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BehindTheScenes from './BehindTheScenes';

jest.mock('../Hooks/GradientScroll', () => ({
  useIntersectionVisibleStates: (length: number) => ({
    imageRefs: { current: new Array(length).fill(null) },
    visibleStates: new Array(length).fill(true),
  }),
}));

describe('<BehindTheScenes />', () => {
  test('renders all images from data', () => {
    render(
      <MemoryRouter>
        <BehindTheScenes />
      </MemoryRouter>,
    );

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(9);

    expect(images[0]).toHaveAttribute('alt', 'BTSImage1');
  });

  test('all images have Book Now links', () => {
    render(
      <MemoryRouter>
        <BehindTheScenes />
      </MemoryRouter>,
    );

    const links = screen.getAllByRole('link', { name: /book now/i });
    expect(links).toHaveLength(9);
    links.forEach((link) => {
      expect(link).toHaveAttribute('href', '/services');
    });
  });
});
