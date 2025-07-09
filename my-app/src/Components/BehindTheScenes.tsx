import './BehindTheScenes.css';

interface imageElement {
  id: number;
  src: string;
  alt: string;
  className: string; // the className must be added to specify which class the image will hold
  // for the className, look at what you have commented out on the homePage component
}

// brands Gio has worked with

export function BehindTheScenes() {
  const behindTheScenes: imageElement[] = [
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
    { id: 8, src: '/BTS-LC-Gio.jpg', alt: 'BTSImage8', className: 'bts-image' },
  ];

  const workedWithBrands: imageElement[] = [
    {
      id: 1,
      src: '/Brands-Gio-has-worked-with/clubmaverick-logo.jpeg',
      alt: 'Club Maverick Logo',
      className: 'brand-image',
    },
    {
      id: 2,
      src: '/Brands-Gio-has-worked-with/couture-logo-cut.jpg',
      alt: 'Couture Logo',
      className: 'brand-image',
    },
    {
      id: 3,
      src: '/Brands-Gio-has-worked-with/cynthiaBach-logo-redone.jpg',
      alt: 'Cynthia Bach Logo',
      className: 'brand-image',
    },
    {
      id: 4,
      src: '/Brands-Gio-has-worked-with/dolls-logo.png',
      alt: 'Dolls Kill Logo',
      className: 'brand-image',
    },
    {
      id: 5,
      src: '/Brands-Gio-has-worked-with/fashion-nova-logo.jpeg',
      alt: 'Fashion Nova Logo',
      className: 'brand-image',
    },
    {
      id: 6,
      src: '/Brands-Gio-has-worked-with/gq-germany-logo.jpeg',
      alt: 'GQ Germany Logo',
      className: 'brand-image',
    },
    {
      id: 7,
      src: '/Brands-Gio-has-worked-with/h-m-logo.png',
      alt: 'H&M Logo',
      className: 'brand-image',
    },
    {
      id: 8,
      src: '/Brands-Gio-has-worked-with/la-llama-viajera-logo.png',
      alt: 'La Llama Viajera Logo',
      className: 'brand-image',
    },
    {
      id: 9,
      src: '/Brands-Gio-has-worked-with/loveSlapRecording-logo.jpeg',
      alt: 'LoveSlap Recordings Logo',
      className: 'brand-image',
    },
    {
      id: 10,
      src: '/Brands-Gio-has-worked-with/mother-plucker-logo.jpeg',
      alt: 'Mother Plucker Feather Company, Inc. Logo',
      className: 'brand-image',
    },
    {
      id: 11,
      src: '/Brands-Gio-has-worked-with/neiman-marcus-logo.jpeg',
      alt: 'Neiman Marcus Logo',
      className: 'brand-image',
    },
    {
      id: 12,
      src: '/Brands-Gio-has-worked-with/out-logo.png',
      alt: 'Out Logo',
      className: 'brand-image',
    },
    {
      id: 13,
      src: '/Brands-Gio-has-worked-with/pia-gladys-perey-logo.png',
      alt: 'Pia Gladys Perey Logo',
      className: 'brand-image',
    },
    {
      id: 14,
      src: '/Brands-Gio-has-worked-with/teen-vogue-logo.jpeg',
      alt: 'Teen Vogue Logo',
      className: 'brand-image',
    },
    {
      id: 15,
      src: '/Brands-Gio-has-worked-with/viv-vitals-logo.jpeg',
      alt: 'Viv Vitals Logo',
      className: 'brand-image',
    },
    {
      id: 16,
      src: '/Brands-Gio-has-worked-with/zara-logo-circle.jpg',
      alt: 'Zara Logo',
      className: 'brand-image',
    },
  ];

  return (
    <>
      {behindTheScenes.length > 0 ? (
        behindTheScenes.map((image) => (
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
      {workedWithBrands.length > 0 ? (
        workedWithBrands.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className="brand-image"
          />
        ))
      ) : (
        <p>No images have loaded...</p>
      )}
    </>
  );
}

export default ImageElement;
