import { useIntersectionVisibleStates } from '../Hooks/GradientScroll';
import './GalleryImages.css';

interface galleryImage {
  id: number;
  src: string;
  alt: string;
  className: string;
}

export function GalleryImages() {
  const { imageRefs, visibleStates } = useIntersectionVisibleStates(
    GalleryImages.length,
  );

  const images: galleryImage[] = [
    {
      id: 1,
      src: '/BTS-LC-Gio-GoldenRoad.jpg',
      alt: 'galleryImage1',
      className: 'gallery-image-wrapper-1 gallery-image-object-fill',
    },
    {
      id: 2,
      src: '/Outdoor-woman-colorfulMatchingFit-crop.jpeg',
      alt: 'galleryImage2',
      className: 'gallery-image-wrapper-2 gallery-image-object-fill',
    },
    {
      id: 3,
      src: '/Outdoor-man-redcarpet.jpg',
      alt: 'galleryImage3',
      className: 'gallery-image-wrapper-1 gallery-image-object-fill',
    },
    {
      id: 4,
      src: '/WeddingDressed.jpg',
      alt: 'galleryImage4',
      className: 'gallery-image-wrapper-2 gallery-image-object-fill',
    },
    {
      id: 5,
      src: '/Outdoor-man-blackshirt-greypants.jpg',
      alt: 'galleryImage5',
      className: 'gallery-image-wrapper-1 gallery-image-object-fill',
    },
    {
      id: 6,
      src: '/LC-allWhiteBGS-1.jpeg',
      //resize image first, then crop if necessary
      alt: 'galleryImage6',
      className: 'gallery-image-wrapper-2 gallery-image-object-fill',
    },
    {
      id: 7,
      src: '/Ryan-edc-outfit-1.png',
      alt: 'galleryImage7',
      className: 'gallery-image-wrapper-1 gallery-image-object-cover',
    },
    {
      id: 8,
      src: '/DJ-styled.jpg',
      alt: 'galleryImage8',
      className: 'gallery-image-wrapper-2 gallery-image-object-cover',
    },
    {
      id: 9,
      src: '/Matching-couple.jpg',
      // src: '/gio-w-shades.jpg', // replace this image with another one that is not of Gio
      alt: 'galleryImage9',
      className: 'gallery-image-wrapper-1 gallery-image-object-cover',
    },
    {
      id: 10,
      src: '/LC-yeehaw-Cowgirl.jpeg',
      alt: 'galleryImage10',
      className: 'gallery-image-wrapper-2 gallery-image-object-fill',
    },
    {
      id: 11,
      src: '/LC-pinkDress-goldenRoad.jpg',
      alt: 'galleryImage11',
      className: 'gallery-image-wrapper-1 gallery-image-object-fill',
    },
    {
      id: 12,
      // this image can be cropped to a better ratio, then delete the unused img element
      src: '/LC-red-romper.jpg',
      alt: 'galleryImage12',
      className: 'gallery-image-wrapper-2 gallery-image-object-fill',
    },
    {
      id: 13,
      src: '/Sophia-black-on-black.jpg',
      alt: 'galleryImage13',
      className: 'gallery-image-wrapper-1 gallery-image-object-cover',
    },
    {
      id: 14,
      src: '/LC-greenDress.jpg',
      alt: 'galleryImage14',
      className: 'gallery-image-wrapper-2 gallery-image-object-fill',
    },
    {
      id: 15,
      src: '/Nicole-blackTop-tanBottoms.JPG',
      alt: 'galleryImage15',
      className: 'gallery-image-wrapper-1 gallery-image-object-cover',
    },
    {
      id: 16,
      src: '/Sophia-jeanSkirt-pinkOutfit.jpg',
      alt: 'galleryImage16',
      className: 'gallery-image-wrapper-2 gallery-image-object-cover',
    },
    {
      id: 17,
      src: '/Sophia-neontop-neonshoes.JPG',
      alt: 'galleryImage17',
      className: 'gallery-image-wrapper-1 gallery-image-object-fill',
    },
    {
      id: 18,
      src: '/Sophia-colorful.jpg',
      alt: 'galleryImage18',
      className: 'gallery-image-wrapper-2 gallery-image-object-cover',
    },
    {
      id: 19,
      src: '/Sophia-army-pants.jpg',
      alt: 'galleryImage19',
      className: 'gallery-image-wrapper-1 gallery-image-object-cover',
    },
    {
      id: 20,
      src: '/Sophia-dressFlair.gif',
      alt: 'galleryImage20',
      className: 'gallery-image-wrapper-2 gallery-image-object-fill',
    },
    {
      id: 21,
      src: '/Sophia-hookahLounge.jpg',
      alt: 'galleryImage21',
      className: 'gallery-image-wrapper-1 gallery-image-object-cover',
    },
    {
      id: 22,
      src: '/Sophia-indoors.jpg',
      alt: 'galleryImage22',
      className: 'gallery-image-wrapper-2 gallery-image-object-fill',
    },
    {
      id: 23,
      // src: '/Gio-stylist-bluebackground.jpg', // replace this image with another one that is not of Gio
      src: '/Ryan-edc-2.jpg',
      alt: 'galleryImage23',
      className: 'gallery-image-wrapper-1 gallery-image-object-fill',
    },
    {
      id: 24,
      src: '/Sophia-orangeNASA.jpg',
      alt: 'galleryImage24',
      className: 'gallery-image-wrapper-2 gallery-image-object-cover',
    },
    {
      id: 25,
      src: '/Sophia-pigtails.jpg',
      alt: 'galleryImage25',
      className: 'gallery-image-wrapper-1 gallery-image-object-fill',
    },
    {
      id: 26,
      src: '/Mannequin-strapless.jpg',
      alt: 'galleryImage26',
      className: 'gallery-image-wrapper-2 gallery-image-object-fill',
    },
    {
      id: 27,
      src: '/Duo-styled-couple.jpg',
      alt: 'galleryImage27',
      className: 'gallery-image-wrapper-1 gallery-image-object-fill',
    },
    {
      id: 28,
      // this image can be cropped down to a smaller size (try it then delete the unused img element)
      src: '/Indoor-pinkDress-whitebkgd.jpg',
      alt: 'galleryImage3',
      className: 'gallery-image-wrapper-2 gallery-image-object-fill',
    },
    {
      id: 29,
      src: '/ClubMaverick-partyFit.jpg',
      alt: 'galleryImage29',
      className: 'gallery-image-wrapper-1 gallery-image-object-fill',
    },
    {
      id: 30,
      src: '/Sophia-outdoor2.jpg',
      alt: 'galleryImage30',
      className: 'gallery-image-wrapper-2 gallery-image-object-fill',
    },
    {
      id: 31,
      src: '/RedDress-whiteCoatOver.jpg',
      alt: 'galleryImage31',
      className: 'gallery-image-wrapper-1 gallery-image-object-cover',
    },
    {
      id: 32,
      src: '/Mannequin-sparklingCoat-goldDress.jpg',
      alt: 'galleryImage32',
      className: 'gallery-image-wrapper-2 gallery-image-object-fill',
    },
    {
      id: 33,
      src: '/RedStussyShirt-longBoots.jpg',
      alt: 'galleryImage33',
      className: 'gallery-image-wrapper-1 gallery-image-object-cover',
    },
    {
      id: 34,
      src: '/RedBlazer-professional.jpg',
      alt: 'galleryImage34',
      className: 'gallery-image-wrapper-2 gallery-image-object-cover',
    },
    {
      id: 35,
      src: '/LC-indoor-halloween.jpg',
      alt: 'galleryImage35',
      className: 'gallery-image-wrapper-1 gallery-image-object-cover',
    },
    {
      id: 36,
      src: '/Man-black-flowerpattern.jpg',
      alt: 'galleryImage36',
      className: 'gallery-image-wrapper-2 gallery-image-object-fill',
    },
    {
      id: 37,
      src: '/BlackTop-redNike.jpg', // crop this image later
      alt: 'galleryImage37',
      className: 'gallery-image-wrapper-1 gallery-image-object-fill',
    },
    {
      id: 38,
      src: '/Gio-FlowerPedals.jpg', // crop this image so it fits better in frame
      alt: 'galleryImage38',
      className: 'gallery-image-wrapper-2 gallery-image-object-fill',
    },
    {
      id: 39,
      src: '/Gio-outdoor-photoshoot.jpg',
      alt: 'galleryImage39',
      className: 'gallery-image-wrapper-1 gallery-image-object-cover',
    },
    {
      id: 40,
      src: '/Gio-handHoldingWoman.jpg',
      alt: 'galleryImage40',
      className: 'gallery-image-wrapper-2 gallery-image-object-fill',
    },
    {
      id: 41,
      src: '/Sophia-bunny-costume.jpg',
      alt: 'galleryImage41',
      className: 'gallery-image-wrapper-1 gallery-image-object-fill',
    },
    {
      id: 42,
      src: '/Sophia-captain.jpeg',
      alt: 'galleryImage42',
      className: 'gallery-image-wrapper-2 gallery-image-object-fill',
    },
    {
      id: 43,
      src: '/Sophia-alex-purpleMatchingFit.jpeg',
      alt: 'galleryImage43',
      className: 'gallery-image-wrapper-1 gallery-image-object-cover',
    },
    {
      id: 44,
      src: '/LongRedDress-whiteCoat.jpg',
      alt: 'galleryImage44',
      className: 'gallery-image-wrapper-2 gallery-image-object-cover',
    },
    {
      id: 45,
      src: '/RedCarpet-turqoiseDress.jpg',
      alt: 'galleryImage45',
      className: 'gallery-image-wrapper-1 gallery-image-object-cover',
    },
    {
      id: 46,
      src: '/StarWars-themed.jpg',
      alt: 'galleryImage46',
      className: 'gallery-image-wrapper-2 gallery-image-object-fill',
    },
    {
      id: 47,
      src: '/Gio-holdingDress-turquoise.jpg',
      alt: 'galleryImage47',
      className: 'gallery-image-wrapper-1 gallery-image-object-fill',
    },
    {
      id: 48,
      src: '/Sophia-Gio-redBike.jpg',
      alt: 'galleryImage48',
      className: 'gallery-image-wrapper-2 gallery-image-object-fill',
    },
  ];

  return (
    <>
      {images.length > 0 ? (
        images.map((photo, index) => (
          <div className="gallery-image-container" key={photo.id}>
            <img
              ref={(element) => {
                imageRefs.current[index] = element;
              }}
              src={photo.src}
              alt={photo.alt}
              className={`${photo.className} ${
                visibleStates[index]
                  ? 'gallery-img-fade-in'
                  : 'gallery-img-hidden'
              }`}
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
