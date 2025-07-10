import './BehindTheScenes.css';

interface imageElement {
  id: number;
  src: string;
  alt: string;
  className: string; // the className must be added to specify which class the image will hold
  // for the className, look at what you have commented out on the homePage component
}

export function BehindTheScenes() {
  const behindTheScenesImage: imageElement[] = [
    {
      id: 1,
      src: '/BTS - outdoor-man-burgundy.jpg',
      alt: 'BTSImage1',
      className: 'bts-image',
    },
    {
      id: 2,
      src: '/BTS - photoshoot.jpg',
      alt: 'BTSImage2',
      className: 'bts-image',
    },
    {
      id: 3,
      src: '/BTS - quince-outside.jpg',
      alt: 'BTSImage3',
      className: 'bts-image',
    },
    {
      id: 4,
      src: '/BTS - quince.jpg',
      alt: 'BTSImage4',
      className: 'bts-image',
    },
    {
      id: 5,
      src: '/BTS-Gio-at-photoshoot.jpg',
      alt: 'BTSImage5',
      className: 'bts-image',
    },
    {
      id: 6,
      src: '/BTS-Gio-desert-outdoor.jpg',
      alt: 'BTSImage6',
      className: 'bts-image',
    },
    {
      id: 7,
      src: '/BTS-Gio-shoeReveal.jpg',
      alt: 'BTSImage7',
      className: 'bts-image',
    },
  ];

  return (
    <>
      {behindTheScenesImage.length > 0 ? (
        behindTheScenesImage.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className="bts-image"
          />
        ))
      ) : (
        <p>No images have loaded...</p>
      )}
    </>
  );
}

export default BehindTheScenes;
