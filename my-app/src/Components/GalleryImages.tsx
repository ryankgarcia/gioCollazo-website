import './GalleryImages.css';

interface galleryImage {
  id: number;
  src: string;
  alt: string;
  className: string;
}

export function GalleryImages() {
  // this is where the array of images will be stored for the gallery

  const images: galleryImage[] = [
    {
      id: 1,
      src: '/BTS-LC-Gio-GoldenRoad.jpg',
      alt: 'galleryImage1',
      className: 'gallery-image',
    },
    {
      id: 2,
      src: '/outdoor-woman-colorfulMatchingFit.jpg',
      alt: 'galleryImage2',
      className: 'gallery-image',
    },
    {
      id: 3,
      src: '/indoor-pinkDress-whitebkgd.jpg',
      alt: 'galleryImage3',
      className: 'gallery-image',
    },
    {
      id: 4,
      src: '/outdoor-man-blackshirt-greypants.jpg',
      alt: 'galleryImage4',
      className: 'gallery-image',
    },
    {
      id: 5,
      src: '/weddingDressed.jpg',
      alt: 'galleryImage5',
      className: 'gallery-image',
    },
    {
      id: 6,
      src: '/LC-bratGirlSummer.jpg',
      alt: 'galleryImage6',
      className: 'gallery-image',
    },
    {
      id: 7,
      src: '/DJ-styled.jpg',
      alt: 'galleryImage7',
      className: 'gallery-image',
    },
    {
      id: 8,
      src: '/gio-w-shades.jpg',
      alt: 'galleryImage8',
      className: 'gallery-image',
    },
    {
      id: 9,
      src: '/ryan-edc-outfit-1.png',
      alt: 'galleryImage9',
      className: 'gallery-image',
    },
    {
      id: 10,
      src: '/LC-yeehaw.jpeg',
      alt: 'galleryImage10',
      className: 'gallery-image',
    },
    {
      id: 11,
      src: '/LC-pinkDress-goldenRoad.jpg',
      alt: 'galleryImage11',
      className: 'gallery-image',
    },
    {
      id: 12,
      src: '/LC-red-romper.jpg',
      alt: 'galleryImage12',
      className: 'gallery-image',
    },
  ];

  // any new images will be added to this array of objects above here

  // in the return statement find out how to make the photo's have alternating classnames
  return (
    <>
      {images.length > 0 ? (
        images.map((photo) => (
          <div className="purple-bkgd-1">
            {/* this div element is what the comment above is referring to */}
            <img
              key={photo.id}
              src={photo.src}
              alt={photo.alt}
              className={photo.className}
            />
          </div>
        ))
      ) : (
        <p>No images have been loaded.</p>
      )}
    </>
  );
}

export default GalleryImages;
