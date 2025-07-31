import { Link } from 'react-router-dom';
import { useIntersectionVisibleStates } from '../Hooks/GradientScroll';
import './BehindTheScenes.css';

interface imageElement {
  id: number;
  src: string;
  alt: string;
  className: 'bts-card-1' | 'bts-card-2';
  backsideText: string;
  linkTo: string;
  button: string;
  fitStyle: 'bts-object-fill' | 'bts-object-cover';
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
      className: 'bts-card-1',
      backsideText: 'Red carpet independent viewing',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'bts-object-fill',
    },
    {
      id: 2,
      src: '/BTS - photoshoot.jpg',
      alt: 'BTSImage2',
      className: 'bts-card-2',
      // className: 'bts-wrapper-2 bts-object-cover', // the commented out className's are the original before the flip effect
      backsideText: 'Teen vogue photo shoot',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'bts-object-cover',
    },
    {
      id: 3,
      src: '/BTS - quince-outside.jpg',
      alt: 'BTSImage3',
      className: 'bts-card-1',
      // className: 'bts-wrapper-1 bts-object-fill',
      backsideText: 'Quinceñera photo shoot',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'bts-object-fill',
    },
    {
      id: 4,
      src: '/BTS - quince.jpg',
      alt: 'BTSImage4',
      className: 'bts-card-2',
      // className: 'bts-wrapper-2 bts-object-fill',
      backsideText: 'Quinceñera photo shoot',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'bts-object-fill',
    },
    {
      id: 5,
      src: '/BTS-Gio-at-photoshoot.jpg',
      alt: 'BTSImage5',
      className: 'bts-card-1',
      // className: 'bts-wrapper-1 bts-object-fill',
      backsideText: 'Featured Home Magazine',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'bts-object-fill',
    },
    {
      id: 6,
      src: '/BTS-Gio-desert-outdoor.jpg',
      alt: 'BTSImage6',
      className: 'bts-card-2',
      // className: 'bts-wrapper-2 bts-object-cover',
      backsideText: 'On a movie set',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'bts-object-cover',
    },
    {
      id: 7,
      src: '/BTS-Gio-shoeReveal.jpg',
      alt: 'BTSImage7',
      className: 'bts-card-1',
      // className: 'bts-wrapper-1 bts-object-fill',
      backsideText: 'Preparing for a wedding',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'bts-object-fill',
    },
    {
      id: 8,
      src: '/bts-LC-Gio-BlackDress.JPEG',
      alt: 'BTSImage8',
      className: 'bts-card-2',
      // className: 'bts-wrapper-2 bts-object-fill',
      backsideText: 'Rave outfit fitting',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'bts-object-fill',
    },
    {
      id: 9,
      src: '/bts-shoppingExp.JPG',
      alt: 'BTSImage9',
      className: 'bts-card-1',
      // className: 'bts-wrapper-1 bts-object-fill',
      backsideText: 'Personal Shopping Experience',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'bts-object-fill',
    },
  ];

  return (
    <>
      {behindTheScenesImage.length > 0 ? (
        behindTheScenesImage.map((image, index) => (
          <div className={`bts-card ${image.className}`} key={image.id}>
            <div className="bts-card-inner">
              <div
                className={`bts-card-front ${
                  visibleStates[index] ? 'bts-fade-in' : 'bts-hidden'
                }`}
              >
                <img
                  ref={(element) => {
                    imageRefs.current[index] = element;
                  }}
                  src={image.src}
                  alt={image.alt}
                  className={` bts-image ${image.fitStyle}`}
                />
              </div>
              <div className="bts-card-back">
                <div className="bts-row">
                  <div className="bts-column-full">
                    <p>{image.backsideText}</p>
                  </div>
                  <Link to={image.linkTo} className={image.button}>
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No images have loaded...</p>
      )}
    </>
  );
}

export default BehindTheScenes;
