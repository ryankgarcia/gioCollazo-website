import { Link } from 'react-router-dom';
import { useIntersectionVisibleStates } from '../Hooks/GradientScroll';
import './CommonComponentCss.css';
import './StyleHighlights.css';

interface topLooks {
  id: number;
  src: string;
  alt: string;
  className: string;
  backsideText: string;
  linkTo: string;
  button: string;
  fitStyle: 'object-fit-fill' | 'object-fit-cover';
}

export function StyleHighlights() {
  const { imageRefs, visibleStates } = useIntersectionVisibleStates(
    StyleHighlights.length,
  );

  const top10Picks: topLooks[] = [
    {
      id: 1,
      src: '/BlackDress-dressingRoom.jpg',
      alt: 'styleHighlights1',
      className: 'styleHighlights-card-margin',
      backsideText: 'Melrose Store Opening',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'object-fit-fill',
    },
    {
      id: 2,
      src: '/Elegant-redDress.jpg',
      alt: 'styleHighlights2',
      className: 'styleHighlights-card-margin',
      backsideText: 'Personal Photo Shoot',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'object-fit-fill',
    },
    {
      id: 3,
      src: '/LC-EDC-BlacknYellow-1.jpeg',
      alt: 'styleHighlights3',
      className: 'styleHighlights-card-margin object-position-top',
      backsideText: 'Rave Fitting',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'object-fit-fill',
    },
    {
      id: 4,
      src: '/RedCarpet-redQueen-longDress.jpg',
      alt: 'styleHighlights4',
      className: 'styleHighlights-card-margin',
      backsideText: 'Red Carpet Gala',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'object-fit-fill',
    },
    {
      id: 5,
      src: '/TealDress-blondeWoman.jpeg',
      alt: 'styleHighlights5',
      className: 'styleHighlights-card-margin',
      backsideText: 'Date Night',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'object-fit-fill',
    },
    {
      id: 6,
      src: '/Louie-black-redBlazer.jpg',
      alt: 'styleHighlights6',
      className: 'styleHighlights-card-margin',
      backsideText: 'Holiday Party',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'object-fit-fill',
    },
    {
      id: 7,
      src: '/ClubMaverick-red-on-black.jpg',
      alt: 'styleHighlights7',
      className: 'styleHighlights-card-margin',
      backsideText: 'DJ Gig',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'object-fit-fill',
    },
    {
      id: 8,
      src: '/LC-purple-EDC-fit.jpeg',
      alt: 'styleHighlights8',
      className: 'styleHighlights-card-margin',
      backsideText: 'Rave Fitting',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'object-fit-fill',
    },
    {
      id: 9,
      src: '/Nicole-pinkStyled.jpeg',
      alt: 'styleHighlights9',
      className: 'styleHighlights-card-margin',
      backsideText: 'Vegas Business Trip',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'object-fit-fill',
    },
    {
      id: 10,
      src: '/RedCarpet-tropicalDress.jpg',
      alt: 'styleHighlights10',
      className: 'styleHighlights-card-margin',
      backsideText: 'Music Video Premier',
      linkTo: '/services',
      button: 'backside-btn',
      fitStyle: 'object-fit-fill',
    },
  ];

  return (
    <>
      {top10Picks.length > 0 ? (
        top10Picks.map((image, index) => {
          const shadowClass =
            index % 4 === 0 || index % 4 === 3
              ? 'styleHighlights-shade-dark'
              : 'styleHighlights-shade-light';
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
        <p>No images found . . .</p>
      )}
    </>
  );
}

export default StyleHighlights;
