import './Top10Looks.css';

interface topLooks {
  id: number;
  src: string;
  alt: string;
}

export function Top10Looks() {
  const top10Picks: topLooks[] = [
    { id: 1, src: '/blackDress-dressingRoom.jpg', alt: 'topLooksImage1' },
    { id: 2, src: '/indoor-pinkDress-whitebkgd.jpg', alt: 'topLooksImage2' },
    { id: 3, src: '/LC-black-and-yellow.jpg', alt: 'topLooksImage3' },
    { id: 4, src: '/LC-indoor-coachella-fit3.jpg', alt: 'topLooksImage4' },
    { id: 5, src: '/tealDress-blondeWoman.jpg', alt: 'topLooksImage5' },
    { id: 6, src: '/black-redBlazer.jpg', alt: 'topLooksImage6' },
    { id: 7, src: '/club-maverick-red-on-black.jpg', alt: 'topLooksImage7' },
    { id: 8, src: '/LC-yeehaw.jpg', alt: 'topLooksImage8' },
    { id: 9, src: '/pinkStyled.jpg', alt: 'topLooksImage9' },
    { id: 10, src: '/redCarpet-tropicalDress.jpg', alt: 'topLooksImage10' },
  ];

  return (
    <div>
      {top10Picks.length > 0 ? (
        top10Picks.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className="image-wrapper"
          />
        ))
      ) : (
        <p>No images found . . .</p>
      )}
    </div>
  );
}
