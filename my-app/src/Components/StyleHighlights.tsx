import './StyleHighlights.css';

interface topLooks {
  id: number;
  src: string;
  alt: string;
  className: string; // add the proper className attribute to each of these based on what was current
}

export function StyleHighlights() {
  const top10Picks: topLooks[] = [
    {
      id: 1,
      src: '/blackDress-dressingRoom.jpg',
      alt: 'styleHighlights1',
      className: 'image-wrapper-1',
    },
    {
      id: 2,
      src: '/elegant-redDress.jpg',
      alt: 'styleHighlights2',
      className: 'image-wrapper-2',
    },
    {
      id: 3,
      src: '/LC-black-and-yellow.jpg',
      alt: 'styleHighlights3',
      className: 'image-wrapper-2',
    },
    {
      id: 4,
      src: '/redCarpet-redQueen-longDress.jpg',
      alt: 'styleHighlights4',
      className: 'image-wrapper-1',
    },
    {
      id: 5,
      src: '/tealDress-blondeWoman.jpeg',
      alt: 'styleHighlights5',
      className: 'image-wrapper-1',
    },
    {
      id: 6,
      src: '/black-redBlazer.jpg',
      alt: 'styleHighlights6',
      className: 'image-wrapper-2',
    },
    {
      id: 7,
      src: '/club-maverick-red-on-black.jpg',
      alt: 'styleHighlights7',
      className: 'image-wrapper-2',
    },
    {
      id: 8,
      src: '/LC-edc-fit.jpg',
      alt: 'styleHighlights8',
      className: 'image-wrapper-1',
    },
    {
      id: 9,
      src: '/pinkStyled.jpg',
      alt: 'styleHighlights9',
      className: 'image-wrapper-1',
    },
    {
      id: 10,
      src: '/redCarpet-tropicalDress.jpg',
      alt: 'styleHighlights10',
      className: 'image-wrapper-2',
    },
  ];

  return (
    <>
      {top10Picks.length > 0 ? (
        top10Picks.map((image) => (
          <div className="image-container" key={image.id}>
            <img src={image.src} alt={image.alt} className={image.className} />
          </div>
        ))
      ) : (
        <p>No images found . . .</p>
      )}
    </>
  );
}

export default StyleHighlights;
