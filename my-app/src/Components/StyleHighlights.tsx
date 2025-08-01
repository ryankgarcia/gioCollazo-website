import { Link } from 'react-router-dom';
import { useIntersectionVisibleStates } from '../Hooks/GradientScroll';
import './StyleHighlights.css';

interface topLooks {
  id: number;
  src: string;
  alt: string;
  className: string;
  backsideText: string;
  linkTo: string;
  button: string;
  fitStyle: 'image-object-fill' | 'image-object-cover';
}

export function StyleHighlights() {
  const { imageRefs, visibleStates } = useIntersectionVisibleStates(
    StyleHighlights.length,
  );

  const top10Picks: topLooks[] = [
    {
      id: 1,
      src: '/blackDress-dressingRoom.jpg',
      alt: 'styleHighlights1',
      // className: 'image-wrapper-1 image-object-fill',
      className: 'styleHighlights-card',
      backsideText: 'Melrose Store Opening',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'image-object-fill',
    },
    {
      id: 2,
      src: '/elegant-redDress.jpg',
      alt: 'styleHighlights2',
      // className: 'image-wrapper-2 image-object-fill',
      className: 'styleHighlights-card',
      backsideText: 'Personal Photo Shoot',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'image-object-fill',
    },
    {
      id: 3,
      src: '/LC-black-and-yellow.jpg',
      alt: 'styleHighlights3',
      // className: 'image-wrapper-2 image-object-fill',
      className: 'styleHighlights-card',
      backsideText: 'Fitting for a rave',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'image-object-fill',
    },
    {
      id: 4,
      src: '/redCarpet-redQueen-longDress.jpg',
      alt: 'styleHighlights4',
      // className: 'image-wrapper-1 image-object-fill',
      className: 'styleHighlights-card',
      backsideText: 'Red Carpet Gala',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'image-object-fill',
    },
    {
      id: 5,
      src: '/tealDress-blondeWoman.jpeg',
      alt: 'styleHighlights5',
      // className: 'image-wrapper-1 image-object-cover',
      className: 'styleHighlights-card',
      backsideText: 'Date Night',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'image-object-fill',
    },
    {
      id: 6,
      src: '/black-redBlazer.jpg',
      alt: 'styleHighlights6',
      // className: 'image-wrapper-2 image-object-fill',
      className: 'styleHighlights-card',
      backsideText: 'Holiday Party',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'image-object-fill',
    },
    {
      id: 7,
      src: '/club-maverick-red-on-black.jpg',
      alt: 'styleHighlights7',
      // className: 'image-wrapper-2 image-object-cover',
      className: 'styleHighlights-card',
      backsideText: 'DJ Gig',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'image-object-fill',
    },
    {
      id: 8,
      src: '/LC-edc-fit.jpg',
      alt: 'styleHighlights8',
      // className: 'image-wrapper-1 image-object-fill',
      className: 'styleHighlights-card',
      backsideText: 'Rave Fitting',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'image-object-fill',
    },
    {
      id: 9,
      src: '/pinkStyled.jpg',
      alt: 'styleHighlights9',
      // className: 'image-wrapper-1 image-object-fill',
      className: 'styleHighlights-card',
      backsideText: 'Vegas Business Trip',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'image-object-fill',
    },
    {
      id: 10,
      src: '/redCarpet-tropicalDress.jpg',
      alt: 'styleHighlights10',
      // className: 'image-wrapper-2 image-object-fill',
      className: 'styleHighlights-card',
      backsideText: 'Music Video Premier',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'image-object-fill',
    },
  ];

  return (
    <>
      {top10Picks.length > 0 ? (
        top10Picks.map((image, index) => {
          const shadowClass =
            index % 2 === 0
              ? 'styleHighlights-shade-dark'
              : 'styleHighlights-shade-light';
          return (
            <div
              className={`styleHighlights-card ${image.className}`}
              key={image.id}
            >
              <div className="styleHighlights-card-inner">
                <div
                  className={`styleHighlights-card-front ${shadowClass} ${
                    visibleStates[index]
                      ? 'style-highlights-fade-in'
                      : 'style-highlights-hidden'
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
                <div className="styleHighlights-card-back">
                  <div className="styleHighlights-row">
                    <div className="styleHighlights-column-full">
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
        <p>No images found . . .</p>
      )}
    </>
  );
}

export default StyleHighlights;
