import { useIntersectionVisibleStates } from '../Hooks/GradientScroll';
import './CommonComponentCss.css';
import './BrandsWorkedWith.css';

interface imageElement {
  id: number;
  src: string;
  alt: string;
  className: string;
}

export function BrandsWorkedWith() {
  const workedWithBrands: imageElement[] = [
    {
      id: 1,
      src: '/Brands-Gio-has-worked-with/Clubmaverick-logo.jpeg',
      alt: 'Club Maverick Logo',
      className: 'brand-image',
    },
    {
      id: 2,
      src: '/Brands-Gio-has-worked-with/Couture-logo.jpg',
      alt: 'Couture Logo',
      className: 'brand-image',
    },
    {
      id: 3,
      src: '/Brands-Gio-has-worked-with/Cyclone-Pictures-logo.png',
      alt: 'Cyclone Pictures Logo',
      className: 'brand-image',
    },
    {
      id: 4,
      src: '/Brands-Gio-has-worked-with/Cynthia-Bach-logo.png',
      alt: 'Cynthia Bach Logo',
      className: 'brand-image',
    },
    {
      id: 5,
      src: '/Brands-Gio-has-worked-with/Dolls-Kill-logo.png',
      alt: 'Dolls Kill Logo',
      className: 'brand-image',
    },
    {
      id: 6,
      src: '/Brands-Gio-has-worked-with/Fashion-Nova-logo.jpeg',
      alt: 'Fashion Nova Logo',
      className: 'brand-image',
    },
    {
      id: 7,
      src: '/Brands-Gio-has-worked-with/GQ-Germany-logo.jpeg',
      alt: 'GQ Germany Logo',
      className: 'brand-image',
    },
    {
      id: 8,
      src: '/Brands-Gio-has-worked-with/HM-logo.png',
      alt: 'H&M Logo',
      className: 'brand-image',
    },
    {
      id: 9,
      src: '/Brands-Gio-has-worked-with/La-Llama-Viajera-logo.png',
      alt: 'La Llama Viajera Logo',
      className: 'brand-image',
    },
    {
      id: 10,
      src: '/Brands-Gio-has-worked-with/loveSlapRecording-logo.jpeg',
      alt: 'LoveSlap Recordings Logo',
      className: 'brand-image',
    },
    {
      id: 11,
      src: '/Brands-Gio-has-worked-with/Mother-Plucker-logo.jpeg',
      alt: 'Mother Plucker Feather Company, Inc. Logo',
      className: 'brand-image',
    },
    {
      id: 12,
      src: '/Brands-Gio-has-worked-with/Neiman-Marcus-logo.jpeg',
      alt: 'Neiman Marcus Logo',
      className: 'brand-image',
    },
    {
      id: 13,
      src: '/Brands-Gio-has-worked-with/Out-logo.png',
      alt: 'Out Logo',
      className: 'brand-image',
    },
    {
      id: 14,
      src: '/Brands-Gio-has-worked-with/Pia-Gladys-Perey-logo.png',
      alt: 'Pia Gladys Perey Logo',
      className: 'brand-image',
    },
    {
      id: 15,
      src: '/Brands-Gio-has-worked-with/Teen-Vogue-logo.jpeg',
      alt: 'Teen Vogue Logo',
      className: 'brand-image',
    },
    {
      id: 16,
      src: '/Brands-Gio-has-worked-with/Viv-Vitals-logo.jpeg',
      alt: 'Viv Vitals Logo',
      className: 'brand-image',
    },
    {
      id: 17,
      src: '/Brands-Gio-has-worked-with/Zara-logo.png',
      alt: 'Zara Logo',
      className: 'brand-image',
    },
  ];

  const { imageRefs, visibleStates } = useIntersectionVisibleStates(
    workedWithBrands.length,
  );

  return (
    <div
      className="display-flex-wrap"
      role="region"
      aria-label="Brands I've Worked With Gallery"
    >
      {workedWithBrands.length > 0 ? (
        workedWithBrands.map((image, index) => (
          <div className="brand-circle" key={image.id}>
            <img
              ref={(element) => {
                imageRefs.current[index] = element;
              }}
              src={image.src}
              alt={image.alt}
              className={`${image.className} ${visibleStates[index] ? 'fade-in' : 'hidden'}`}
            />
          </div>
        ))
      ) : (
        <p>No images have loaded...</p>
      )}
    </div>
  );
}

export default BrandsWorkedWith;
