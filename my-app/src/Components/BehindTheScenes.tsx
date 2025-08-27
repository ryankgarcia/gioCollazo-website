import { Link } from 'react-router-dom';
import { useIntersectionVisibleStates } from '../Hooks/GradientScroll';
import './CommonComponentCss.css';
import './BehindTheScenes.css';

interface imageElement {
  id: number;
  src: string;
  alt: string;
  className: string;
  backsideText: string;
  linkTo: string;
  button: string;
  fitStyle: 'object-fit-fill' | 'object-fit-cover';
}

export function BehindTheScenes() {
  const behindTheScenesImage: imageElement[] = [
    {
      id: 1,
      src: '/BTS-outdoor-man-burgundy.jpg',
      alt: 'BTSImage1',
      className: 'bts-card-margin',
      backsideText: 'Red Carpet Independent Viewing',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'object-fit-fill',
    },
    {
      id: 2,
      src: '/BTS-teenVogue-photoshoot.jpg',
      alt: 'BTSImage2',
      className: 'bts-card-margin',
      backsideText: 'Teen Vogue Photo Shoot',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'object-fit-cover',
    },
    {
      id: 3,
      src: '/BTS-quince-outside.jpg',
      alt: 'BTSImage3',
      className: 'bts-card-margin',
      backsideText: 'Quinceñera Photo Shoot',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'object-fit-fill',
    },
    {
      id: 4,
      src: '/BTS-quince.jpg',
      alt: 'BTSImage4',
      className: 'bts-card-margin',
      backsideText: 'Quinceñera Photo Shoot',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'object-fit-fill',
    },
    {
      id: 5,
      src: '/BTS-Gio-at-photoshoot.jpg',
      alt: 'BTSImage5',
      className: 'bts-card-margin',
      backsideText: 'Featured Home Magazine',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'object-fit-fill',
    },
    {
      id: 6,
      src: '/BTS-Gio-desert-outdoor.jpg',
      alt: 'BTSImage6',
      className: 'bts-card-margin',
      backsideText: 'On a movie set',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'object-fit-cover',
    },
    {
      id: 7,
      src: '/BTS-Gio-shoeReveal.jpg',
      alt: 'BTSImage7',
      className: 'bts-card-margin',
      backsideText: 'Wedding Fitting',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'object-fit-fill',
    },
    {
      id: 8,
      src: '/BTS-LC-Gio-BlackDress.JPEG',
      alt: 'BTSImage8',
      className: 'bts-card-margin',
      backsideText: 'Rave Outfit Fitting',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'object-fit-fill',
    },
    {
      id: 9,
      src: '/BTS-shoppingExp.JPG',
      alt: 'BTSImage9',
      className: 'bts-card-margin',
      backsideText: 'Personal Shopping Experience',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'object-fit-fill',
    },
  ];

  const { imageRefs, visibleStates } = useIntersectionVisibleStates(
    behindTheScenesImage.length,
  );

  return (
    <section role="region" aria-label="Behind The Scenes Gallery">
      {behindTheScenesImage.length > 0 ? (
        behindTheScenesImage.map((image, index) => {
          const shadowClass =
            index % 2 === 0
              ? 'bts-shadow-light-purple'
              : 'bts-shadow-dark-purple';
          return (
            <div className={`card ${image.className}`} key={image.id}>
              <div className="card-inner">
                <div
                  className={`card-front ${shadowClass} ${
                    visibleStates[index] ? 'fade-in' : 'hidden'
                  }`}
                >
                  <img
                    ref={(element) => {
                      imageRefs.current[index] = element;
                    }}
                    src={image.src}
                    alt={image.alt}
                    className={`${image.fitStyle}`}
                  />
                </div>
                <div className="card-back">
                  <div className="display-flex-column">
                    <div className="text-padding">
                      <p>{image.backsideText}</p>
                    </div>
                    <Link to={image.linkTo} className={image.button}>
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>No images have loaded...</p>
      )}
    </section>
  );
}

export default BehindTheScenes;
