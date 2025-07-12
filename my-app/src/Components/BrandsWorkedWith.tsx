import './BrandsWorkedWith.css';

interface imageElement {
  id: number;
  src: string;
  alt: string;
  className: string; // the className must be added to specify which class the image will hold
  // for the className, look at what you have commented out on the homePage component
}

// brands Gio has worked with

export function BrandsWorkedWith() {
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
    <div>
      {workedWithBrands.length > 0 ? (
        workedWithBrands.map((image) => (
          <div className="brand-circle">
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className="brand-image"
            />
          </div>
        ))
      ) : (
        <p>No images have loaded...</p>
      )}
    </div>
  );
}

export default BrandsWorkedWith;
