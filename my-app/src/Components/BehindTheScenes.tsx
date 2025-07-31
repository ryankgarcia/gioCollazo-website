import { Link } from 'react-router-dom';
import { useIntersectionVisibleStates } from '../Hooks/GradientScroll';
import './BehindTheScenes.css';

interface imageElement {
  id: number;
  src: string;
  alt: string;
  className: string;
  backsideText: string;
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
      className: 'bts-card',
      backsideText: 'Red carpet independent viewing',
    },
    {
      id: 2,
      src: '/BTS - photoshoot.jpg',
      alt: 'BTSImage2',
      className: 'bts-wrapper-2 bts-object-cover',
      // backsideText: 'Teen vogue photo shoot',
    },
    {
      id: 3,
      src: '/BTS - quince-outside.jpg',
      alt: 'BTSImage3',
      className: 'bts-wrapper-1 bts-object-fill',
      // backsideText: 'Quinceñera photo shoot',
    },
    {
      id: 4,
      src: '/BTS - quince.jpg',
      alt: 'BTSImage4',
      className: 'bts-wrapper-2 bts-object-fill',
      // backsideText: 'Quinceñera photo shoot',
    },
    {
      id: 5,
      src: '/BTS-Gio-at-photoshoot.jpg',
      alt: 'BTSImage5',
      className: 'bts-wrapper-1 bts-object-fill',
      // backsideText: 'Featured Home Magazine',
    },
    {
      id: 6,
      src: '/BTS-Gio-desert-outdoor.jpg',
      alt: 'BTSImage6',
      className: 'bts-wrapper-2 bts-object-cover',
      // backsideText: 'On a movie set',
    },
    {
      id: 7,
      src: '/BTS-Gio-shoeReveal.jpg',
      alt: 'BTSImage7',
      className: 'bts-wrapper-1 bts-object-fill',
      // backsideText: 'Preparing for a wedding',
    },
    {
      id: 8,
      src: '/bts-LC-Gio-BlackDress.JPEG',
      alt: 'BTSImage8',
      className: 'bts-wrapper-2 bts-object-fill',
      // backsideText: 'Rave outfit fitting',
    },
    {
      id: 9,
      src: '/bts-shoppingExp.JPG',
      alt: 'BTSImage9',
      className: 'bts-wrapper-1 bts-object-fill',
      // backsideText: 'Personal Shopping Experience',
    },
  ];

  return (
    <>
      {behindTheScenesImage.length > 0 ? (
        behindTheScenesImage.map((image, index) => (
          // <div className="bts-container" key={image.id}>
          <div className={`bts-card ${image.className}`} key={image.id}>
            <div className="bts-card-inner">
              <div className="bts-card-front">
                <img
                  ref={(element) => {
                    imageRefs.current[index] = element;
                  }}
                  src={image.src}
                  alt={image.alt}
                  className={` bts-image ${
                    visibleStates[index] ? 'bts-fade-in' : 'bts-hidden'
                  }`}
                />
              </div>
              <div className="bts-card-back">
                <p>{image.backsideText}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No images have loaded...</p>
      )}
      {/* <div className="bts-card">
        <div className="bts-card-inner">
          <div className="bts-card-front">
            <img
              src="/BTS - outdoor-man-burgundy.jpg"
              alt="Test"
              className="bts-image"
            />
          </div>
          <div className="bts-card-back">
            <p>Red carpet independent viewing</p>
            <Link to="/services">Book Me</Link>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default BehindTheScenes;
