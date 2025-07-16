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
      className: 'gallery-image-wrapper-1',
    },
    {
      id: 2,
      src: '/outdoor-woman-colorfulMatchingFit.jpg',
      alt: 'galleryImage2',
      className: 'gallery-image-wrapper-2',
    },
    {
      id: 3,
      src: '/indoor-pinkDress-whitebkgd.jpg',
      alt: 'galleryImage3',
      className: 'gallery-image-wrapper-1',
    },
    {
      id: 4,
      src: '/outdoor-man-blackshirt-greypants.jpg',
      alt: 'galleryImage4',
      className: 'gallery-image-wrapper-2',
    },
    {
      id: 5,
      src: '/weddingDressed.jpg',
      alt: 'galleryImage5',
      className: 'gallery-image-wrapper-1',
    },
    {
      id: 6,
      src: '/LC-bratGirlSummer.jpg',
      alt: 'galleryImage6',
      className: 'gallery-image-wrapper-2',
    },
    {
      id: 7,
      src: '/DJ-styled.jpg',
      alt: 'galleryImage7',
      className: 'gallery-image-wrapper-1',
    },
    {
      id: 8,
      src: '/gio-w-shades.jpg',
      alt: 'galleryImage8',
      className: 'gallery-image-wrapper-2',
    },
    {
      id: 9,
      src: '/ryan-edc-outfit-1.png',
      alt: 'galleryImage9',
      className: 'gallery-image-wrapper-1',
    },
    {
      id: 10,
      src: '/LC-yeehaw.jpeg',
      alt: 'galleryImage10',
      className: 'gallery-image-wrapper-2',
    },
    {
      id: 11,
      src: '/LC-pinkDress-goldenRoad.jpg',
      alt: 'galleryImage11',
      className: 'gallery-image-wrapper-1',
    },
    {
      id: 12,
      src: '/LC-red-romper.jpg',
      alt: 'galleryImage12',
      className: 'gallery-image-wrapper-2',
    },
    {
      id: 13,
      src: '/July 8 Images/black-on-black.jpg',
      alt: 'galleryImage13',
      className: 'gallery-image-wrapper-1',
    },
    {
      id: 14,
      src: '/July 8 Images/LC - green dress.jpg',
      alt: 'galleryImage14',
      className: 'gallery-image-wrapper-2',
    },
    {
      id: 15,
      src: '/July 8 Images/nicole-blackTop-tanBottoms.JPG',
      alt: 'galleryImage15',
      className: 'gallery-image-wrapper-1',
    },
    {
      id: 16,
      src: '/July 8 Images/sophia-jeanSkirt-pinkOutfit.jpg',
      alt: 'galleryImage16',
      className: 'gallery-image-wrapper-2',
    },
    {
      id: 17,
      src: '/July 8 Images/sophia-neontop-neonshoes.JPG',
      alt: 'galleryImage17',
      className: 'gallery-image-wrapper-1',
    },
    {
      id: 18,
      src: '/July 8 Images/sophia-colorful.jpg',
      alt: 'galleryImage18',
      className: 'gallery-image-wrapper-2',
    },
    {
      id: 19,
      src: '/July 8 Images/sophia-army-pants.jpg',
      alt: 'galleryImage19',
      className: 'gallery-image-wrapper-1',
    },
    {
      id: 20,
      src: '/July 8 Images/soph-dressFlair.gif',
      alt: 'galleryImage20',
      className: 'gallery-image-wrapper-2',
    },
    {
      id: 21,
      src: '/July 8 Images/sophia-hookahLounge.jpg',
      alt: 'galleryImage21',
      className: 'gallery-image-wrapper-1',
    },
    {
      id: 22,
      src: '/July 8 Images/sophia-indoors.jpg',
      alt: 'galleryImage22',
      className: 'gallery-image-wrapper-2',
    },
    {
      id: 23,
      src: '/Gio-stylist-bluebackground.jpg',
      alt: 'galleryImage23',
      className: 'gallery-image-wrapper-1',
    },
    {
      id: 24,
      src: '/July 8 Images/sophia-orangeNASA.jpg',
      alt: 'galleryImage24',
      className: 'gallery-image-wrapper-2',
    },
    {
      id: 25,
      src: '/July 8 Images/sophia-pigtails.jpg',
      alt: 'galleryImage25',
      className: 'gallery-image-wrapper-1',
    },
    {
      id: 26,
      src: '/maniquin-strapless.jpg',
      alt: 'galleryImage26',
      className: 'gallery-image-wrapper-2',
    },
    {
      id: 27,
      src: '/duo-styled-couple.jpg',
      alt: 'galleryImage27',
      className: 'gallery-image-wrapper-1',
    },
    {
      id: 28,
      src: '/outdoor-man-redcarpet.jpg',
      alt: 'galleryImage28',
      className: 'gallery-image-wrapper-2',
    },
    {
      id: 29,
      src: '/clubMaverick-partyFit.jpg',
      alt: 'galleryImage29',
      className: 'gallery-image-wrapper-1',
    },
    {
      id: 30,
      src: '/July 8 Images/sophia-outdoor2.jpg',
      alt: 'galleryImage30',
      className: 'gallery-image-wrapper-2',
    },
  ];

  // any new images will be added to this array of objects above here

  // in the return statement find out how to make the photo's have alternating classnames
  return (
    <>
      {images.length > 0 ? (
        images.map((photo) => (
          <div className="gallery-image-container" key={photo.id}>
            {/* this div element is what the comment above is referring to */}
            <img src={photo.src} alt={photo.alt} className={photo.className} />
          </div>
        ))
      ) : (
        <p>No images have been loaded.</p>
      )}
    </>
  );
}

export default GalleryImages;
