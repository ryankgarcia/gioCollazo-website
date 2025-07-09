import './ImageElement.css';

interface imageElement {
  id: number;
  src: string;
  alt: string;
  // className: string; // the className must be added to specify which class the image will hold
  // for the className, look at what you have commented out on the homePage component
}

// brands Gio has worked with

export function ImageElement() {
  const behindTheScenes: imageElement[] = [
    { id: 1, src: '/BTS - outdoor-man-burgundy.jpg', alt: 'BTSImage1' },
    { id: 2, src: '/BTS - photoshoot.jpg', alt: 'BTSImage2' },
    { id: 3, src: '/BTS - quince-outside.jpg', alt: 'BTSImage3' },
    { id: 4, src: '/BTS - quince.jpg', alt: 'BTSImage4' },
    { id: 5, src: '/BTS-Gio-at-photoshoot.jpg', alt: 'BTSImage5' },
    { id: 6, src: '/BTS-Gio-desert-outdoor.jpg', alt: 'BTSImage6' },
    { id: 7, src: '/BTS-Gio-shoeReveal.jpg', alt: 'BTSImage7' },
    { id: 8, src: '/BTS-LC-Gio.jpg', alt: 'BTSImage8' },
  ];

  const workedWithBrands: imageElement[] = [
    {
      id: 1,
      src: '/Brands-Gio-has-worked-with/clubmaverick-logo.jpeg',
      alt: 'Club Maverick Logo',
    },
    {
      id: 2,
      src: '/Brands-Gio-has-worked-with/couture-logo-cut.jpg',
      alt: 'Couture Logo',
    },
    {
      id: 3,
      src: '/Brands-Gio-has-worked-with/cynthiaBach-logo-redone.jpg',
      alt: 'Cynthia Bach Logo',
    },
    {
      id: 4,
      src: '/Brands-Gio-has-worked-with/dolls-logo.png',
      alt: 'Dolls Kill Logo',
    },
    {
      id: 5,
      src: '/Brands-Gio-has-worked-with/fashion-nova-logo.jpeg',
      alt: 'Fashion Nova Logo',
    },
    {
      id: 6,
      src: '/Brands-Gio-has-worked-with/gq-germany-logo.jpeg',
      alt: 'GQ Germany Logo',
    },
    { id: 7, src: '/Brands-Gio-has-worked-with/h-m-logo.png', alt: 'H&M Logo' },
    {
      id: 8,
      src: '/Brands-Gio-has-worked-with/la-llama-viajera-logo.png',
      alt: 'La Llama Viajera Logo',
    },
    {
      id: 9,
      src: '/Brands-Gio-has-worked-with/loveSlapRecording-logo.jpeg',
      alt: 'LoveSlap Recordings Logo',
    },
    {
      id: 10,
      src: '/Brands-Gio-has-worked-with/mother-plucker-logo.jpeg',
      alt: 'Mother Plucker Feather Company, Inc. Logo',
    },
    {
      id: 11,
      src: '/Brands-Gio-has-worked-with/neiman-marcus-logo.jpeg',
      alt: 'Neiman Marcus Logo',
    },
    {
      id: 12,
      src: '/Brands-Gio-has-worked-with/out-logo.png',
      alt: 'Out Logo',
    },
    {
      id: 13,
      src: '/Brands-Gio-has-worked-with/pia-gladys-perey-logo.png',
      alt: 'Pia Gladys Perey Logo',
    },
    {
      id: 14,
      src: '/Brands-Gio-has-worked-with/teen-vogue-logo.jpeg',
      alt: 'Teen Vogue Logo',
    },
    {
      id: 15,
      src: '/Brands-Gio-has-worked-with/viv-vitals-logo.jpeg',
      alt: 'Viv Vitals Logo',
    },
    {
      id: 16,
      src: '/Brands-Gio-has-worked-with/zara-logo-circle.jpg',
      alt: 'Zara Logo',
    },
  ];

  return (
    <>
      {behindTheScenes.length > 0 ? (
        behindTheScenes.map((image) => (
          <img key={image.id} src={image.src} alt={image.alt} />
        ))
      ) : (
        <p>No images have loaded...</p>
      )}
      {workedWithBrands.length > 0 ? (
        workedWithBrands.map((image) => (
          <img key={image.id} src={image.src} alt={image.alt} />
        ))
      ) : (
        <p>No images have loaded...</p>
      )}
    </>
  );
}

export default ImageElement;
