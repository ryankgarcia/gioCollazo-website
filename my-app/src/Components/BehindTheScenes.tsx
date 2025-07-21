import { useIntersectionVisibleStates } from '../Hooks/GradientScroll';
import './BehindTheScenes.css';

interface imageElement {
  id: number;
  src: string;
  alt: string;
  className: string;
}

export function BehindTheScenes() {
  const { imageRefs, visibleStates } = useIntersectionVisibleStates(
    BehindTheScenes.length,
  );

  const behindTheScenesImage: imageElement[] = [
    {
      id: 1,
      src: '/BTS - outdoor-man-burgundy.jpg',
      alt: 'BTSImage1',
      className: 'bts-wrapper-1 bts-object-cover',
    },
    {
      id: 2,
      src: '/BTS - photoshoot.jpg',
      alt: 'BTSImage2',
      className: 'bts-wrapper-2 bts-object-cover',
    },
    {
      id: 3,
      src: '/BTS - quince-outside.jpg',
      alt: 'BTSImage3',
      className: 'bts-wrapper-1 bts-object-fill',
    },
    {
      id: 4,
      src: '/BTS - quince.jpg',
      alt: 'BTSImage4',
      className: 'bts-wrapper-2 bts-object-fill',
    },
    {
      id: 5,
      src: '/BTS-Gio-at-photoshoot.jpg',
      alt: 'BTSImage5',
      className: 'bts-wrapper-1 bts-object-fill',
    },
    {
      id: 6,
      src: '/BTS-Gio-desert-outdoor.jpg',
      alt: 'BTSImage6',
      className: 'bts-wrapper-2 bts-object-cover',
    },
    {
      id: 7,
      src: '/BTS-Gio-shoeReveal.jpg',
      alt: 'BTSImage7',
      className: 'bts-wrapper-1 bts-object-fill',
    },
    {
      id: 8,
      src: '/bts-LC-Gio-BlackDress.JPEG',
      alt: 'BTSImage8',
      className: 'bts-wrapper-2 bts-object-fill',
    },
    {
      id: 9,
      src: '/bts-shoppingExp.JPG',
      alt: 'BTSImage9',
      className: 'bts-wrapper-1 bts-object-fill',
    },
  ];

  return (
    <>
      {behindTheScenesImage.length > 0 ? (
        behindTheScenesImage.map((image, index) => (
          <div className="bts-container" key={image.id}>
            <img
              ref={(element) => {
                imageRefs.current[index] = element;
              }}
              src={image.src}
              alt={image.alt}
              className={`${image.className} ${
                visibleStates[index] ? 'bts-fade-in' : 'bts-hidden'
              }`}
            />
          </div>
        ))
      ) : (
        <p>No images have loaded...</p>
      )}
    </>
  );
}

export default BehindTheScenes;
