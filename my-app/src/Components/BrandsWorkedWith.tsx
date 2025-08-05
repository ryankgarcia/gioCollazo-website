import { useIntersectionVisibleStates } from '../Hooks/GradientScroll';
import './BrandsWorkedWith.css';

interface imageElement {
  id: number;
  src: string;
  alt: string;
  className: string; // this component still requires the object-fit: fill or cover in CSS
}

export function BrandsWorkedWith() {
  const { imageRefs, visibleStates } = useIntersectionVisibleStates(
    BrandsWorkedWith.length,
  );

  const workedWithBrands: imageElement[] = [
    {
      id: 1,
      src: '/Brands-Gio-has-worked-with/clubmaverick-logo.jpeg',
      alt: 'Club Maverick Logo',
      className: 'brand-image',
      // add brand-image-fit or brand-image cover to make the aspect ratio better for this and
      // all other elements on this page
    },
    {
      id: 2,
      src: '/Brands-Gio-has-worked-with/couture-logo.jpg',
      alt: 'Couture Logo',
      className: 'brand-image',
    },
    {
      id: 3,
      src: '/Brands-Gio-has-worked-with/Cyclone-Pictures-logo.png',
      alt: 'Cyclone Pictures Logo',
      className: 'brand-image',
      // brand-image-fill  add this add a class to the images that look better with either cover or fill
    },
    {
      id: 4,
      src: '/Brands-Gio-has-worked-with/cynthia-Bach-logo.png',
      alt: 'Cynthia Bach Logo',
      className: 'brand-image',
    },
    {
      id: 5,
      src: '/Brands-Gio-has-worked-with/dolls-kill-logo.png',
      alt: 'Dolls Kill Logo',
      className: 'brand-image',
    },
    {
      id: 6,
      src: '/Brands-Gio-has-worked-with/fashion-nova-logo.jpeg',
      alt: 'Fashion Nova Logo',
      className: 'brand-image',
    },
    {
      id: 7,
      src: '/Brands-Gio-has-worked-with/gq-germany-logo.jpeg',
      alt: 'GQ Germany Logo',
      className: 'brand-image',
    },
    {
      id: 8,
      src: '/Brands-Gio-has-worked-with/hm-logo.png',
      alt: 'H&M Logo',
      className: 'brand-image',
    },
    {
      id: 9,
      src: '/Brands-Gio-has-worked-with/la-llama-viajera-logo.png',
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
      src: '/Brands-Gio-has-worked-with/mother-plucker-logo.jpeg',
      alt: 'Mother Plucker Feather Company, Inc. Logo',
      className: 'brand-image',
    },
    {
      id: 12,
      src: '/Brands-Gio-has-worked-with/neiman-marcus-logo.jpeg',
      alt: 'Neiman Marcus Logo',
      className: 'brand-image',
    },
    {
      id: 13,
      src: '/Brands-Gio-has-worked-with/out-logo.png',
      alt: 'Out Logo',
      className: 'brand-image',
    },
    {
      id: 14,
      src: '/Brands-Gio-has-worked-with/pia-gladys-perey-logo.png',
      alt: 'Pia Gladys Perey Logo',
      className: 'brand-image',
    },
    {
      id: 15,
      src: '/Brands-Gio-has-worked-with/teen-vogue-logo.jpeg',
      alt: 'Teen Vogue Logo',
      className: 'brand-image',
    },
    {
      id: 16,
      src: '/Brands-Gio-has-worked-with/viv-vitals-logo.jpeg',
      alt: 'Viv Vitals Logo',
      className: 'brand-image',
    },
    {
      id: 17,
      src: '/Brands-Gio-has-worked-with/zara-logo.png',
      alt: 'Zara Logo',
      className: 'brand-image',
    },
  ];

  return (
    <>
      {workedWithBrands.length > 0 ? (
        workedWithBrands.map((image, index) => (
          <div className="brand-circle" key={image.id}>
            <img
              ref={(element) => {
                imageRefs.current[index] = element;
              }}
              src={image.src}
              alt={image.alt}
              className={`${image.className} ${visibleStates[index] ? 'brands-fade-in' : 'brands-hidden'}`}
            />
          </div>
        ))
      ) : (
        <p>No images have loaded...</p>
      )}
    </>
  );
}

export default BrandsWorkedWith;
