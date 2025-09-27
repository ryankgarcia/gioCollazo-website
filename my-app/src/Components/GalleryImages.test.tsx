import { render, screen } from '@testing-library/react';
import GalleryImages from './GalleryImages';

jest.mock('../Hooks/GradientScroll', () => ({
  useIntersectionVisibleStates: (length: number) => ({
    imageRefs: { current: new Array(length).fill(null) },
    visibleStates: Array.from({ length }, (_, i) => i % 2 === 0),
  }),
}));

describe('<GalleryImages />', () => {
  test('renders all 49 images with proper alt text and visibility classes', () => {
    render(<GalleryImages />);

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(49);

    expect(images[0]).toHaveAttribute('alt', 'galleryImage1');

    for (const image of images) {
      const alt = image.getAttribute('alt');
      expect(alt).toBeTruthy();
      expect(alt!.trim()).not.toHaveLength(0);
    }

    images.forEach((image, i) => {
      if (i % 2 === 0) {
        expect(image.className).toMatch(/gallery-img-fade-in/);
        expect(image.className).not.toMatch(/gallery-img-hidden/);
      } else {
        expect(image.className).toMatch(/gallery-img-hidden/);
        expect(image.className).not.toMatch(/gallery-img-fade-in/);
      }
    });

    const cards = document.querySelectorAll('.gallery-image');
    expect(cards).toHaveLength(49);
  });
});
