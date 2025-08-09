import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BrandsWorkedWith from './BrandsWorkedWith';
import './BrandsWorkedWith.css';

jest.mock('../Hooks/GradientScroll', () => ({
  useIntersectionVisibleStates: (length: number) => ({
    imageRefs: { current: new Array(length).fill(null) },
    visibleStates: new Array(length).fill(true),
  }),
}));

const expectedAlts = [
  'Club Maverick Logo',
  'Couture Logo',
  'Cyclone Pictures Logo',
  'Cynthia Bach Logo',
  'Dolls Kill Logo',
  'Fashion Nova Logo',
  'GQ Germany Logo',
  'H&M Logo',
  'La Llama Viajera Logo',
  'LoveSlap Recordings Logo',
  'Mother Plucker Feather Company, Inc. Logo',
  'Neiman Marcus Logo',
  'Out Logo',
  'Pia Gladys Perey Logo',
  'Teen Vogue Logo',
  'Viv Vitals Logo',
  'Zara Logo',
];

describe('<BrandsWorkedWith />', () => {
  test('renders all images from data', () => {
    render(
      <MemoryRouter>
        <BrandsWorkedWith />
      </MemoryRouter>,
    );

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(17);

    expectedAlts.forEach((alt, i) => {
      expect(images[i]).toHaveAttribute('alt', alt);
    });
  });
});
