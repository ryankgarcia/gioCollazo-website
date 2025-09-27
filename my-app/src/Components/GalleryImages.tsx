import { useIntersectionVisibleStates } from '../Hooks/GradientScroll';
import './GalleryImages.css';
import './CommonComponentCss.css';

interface galleryImage {
  id: number;
  src: string;
  alt: string;
  className: string;
}

export function GalleryImages() {
  const images: galleryImage[] = [
    {
      id: 1,
      src: '/sophiaAlex-allBlack.jpeg',
      alt: 'galleryImage1',
      className: 'gallery-image-wrapper-1 object-fit-fill',
    },
    {
      id: 2,
      src: '/BTS-LC-Gio-GoldenRoad.jpg',
      alt: 'galleryImage1',
      className: 'gallery-image-wrapper-1 object-fit-fill',
    },
    {
      id: 3,
      src: '/Outdoor-woman-colorfulMatchingFit.jpeg',
      alt: 'galleryImage2',
      className: 'gallery-image-wrapper-2 object-fit-fill',
    },
    {
      id: 4,
      src: '/Outdoor-man-redcarpet.jpg',
      alt: 'galleryImage3',
      className: 'gallery-image-wrapper-1 object-fit-fill',
    },
    {
      id: 5,
      src: '/WeddingDressed.jpg',
      alt: 'galleryImage4',
      className: 'gallery-image-wrapper-2 object-fit-fill',
    },
    {
      id: 6,
      src: '/Outdoor-man-blackshirt-greypants.jpg',
      alt: 'galleryImage5',
      className: 'gallery-image-wrapper-1 object-fit-fill',
    },
    {
      id: 7,
      src: '/LC-allWhiteBGS-1.jpeg',
      alt: 'galleryImage6',
      className: 'gallery-image-wrapper-2 object-fit-fill',
    },
    {
      id: 8,
      src: '/Ryan-edc-outfit-1.png',
      alt: 'galleryImage7',
      className: 'gallery-image-wrapper-1 object-fit-cover',
    },
    {
      id: 9,
      src: '/DJ-styled.jpg',
      alt: 'galleryImage8',
      className: 'gallery-image-wrapper-2 object-fit-cover',
    },
    {
      id: 10,
      src: '/Matching-couple.jpg',
      alt: 'galleryImage9',
      className: 'gallery-image-wrapper-1 object-fit-cover',
    },
    {
      id: 11,
      src: '/LC-yeehaw-Cowgirl.jpeg',
      alt: 'galleryImage10',
      className: 'gallery-image-wrapper-2 object-fit-cover object-position-top',
    },
    {
      id: 12,
      src: '/LC-pinkDress-goldenRoad.jpg',
      alt: 'galleryImage11',
      className: 'gallery-image-wrapper-1 object-fit-fill',
    },
    {
      id: 13,
      src: '/LC-red-romper-clean.png',
      alt: 'galleryImage12',
      className: 'gallery-image-wrapper-2 object-fit-cover object-position-top',
    },
    {
      id: 14,
      src: '/Sophia-black-on-black.jpg',
      alt: 'galleryImage13',
      className: 'gallery-image-wrapper-1 object-fit-cover',
    },
    {
      id: 15,
      src: '/LC-greenDress.jpg',
      alt: 'galleryImage14',
      className: 'gallery-image-wrapper-2 object-fit-fill',
    },
    {
      id: 16,
      src: '/Nicole-blackTop-tanBottoms.jpeg',
      alt: 'galleryImage15',
      className: 'gallery-image-wrapper-1 object-fit-cover',
    },
    {
      id: 17,
      src: '/Sophia-jeanSkirt-pinkOutfit.jpg',
      alt: 'galleryImage16',
      className: 'gallery-image-wrapper-2 object-fit-cover',
    },
    {
      id: 18,
      src: '/Sophia-neontop-neonshoes.JPG',
      alt: 'galleryImage17',
      className: 'gallery-image-wrapper-1 object-fit-fill',
    },
    {
      id: 19,
      src: '/Sophia-colorful.jpg',
      alt: 'galleryImage18',
      className: 'gallery-image-wrapper-2 object-fit-cover',
    },
    {
      id: 20,
      src: '/Sophia-army-pants.jpg',
      alt: 'galleryImage19',
      className: 'gallery-image-wrapper-1 object-fit-cover',
    },
    {
      id: 21,
      src: '/Sophia-dressFlair.gif',
      alt: 'galleryImage20',
      className: 'gallery-image-wrapper-2 object-fit-fill',
    },
    {
      id: 22,
      src: '/Sophia-hookahLounge.jpeg',
      alt: 'galleryImage21',
      className: 'gallery-image-wrapper-1 object-fit-cover object-position-top',
    },
    {
      id: 23,
      src: '/Sophia-indoors.jpg',
      alt: 'galleryImage22',
      className: 'gallery-image-wrapper-2 object-fit-fill',
    },
    {
      id: 24,
      src: '/Ryan-edc-2.jpg',
      alt: 'galleryImage23',
      className: 'gallery-image-wrapper-1 object-fit-fill',
    },
    {
      id: 25,
      src: '/Sophia-orangeNASA.jpg',
      alt: 'galleryImage24',
      className: 'gallery-image-wrapper-2 object-fit-cover',
    },
    {
      id: 26,
      src: '/Sophia-pigtails.jpg',
      alt: 'galleryImage25',
      className: 'gallery-image-wrapper-1 object-fit-fill',
    },
    {
      id: 27,
      src: '/Mannequin-strapless.jpg',
      alt: 'galleryImage26',
      className: 'gallery-image-wrapper-2 object-fit-fill',
    },
    {
      id: 28,
      src: '/Duo-styled-couple.jpg',
      alt: 'galleryImage27',
      className: 'gallery-image-wrapper-1 object-fit-fill',
    },
    {
      id: 29,
      src: '/Indoor-pinkDress-whitebkgd.jpeg',
      alt: 'galleryImage28',
      className: 'gallery-image-wrapper-2 object-fit-cover',
    },
    {
      id: 30,
      src: '/ClubMaverick-partyFit.jpg',
      alt: 'galleryImage29',
      className: 'gallery-image-wrapper-1 object-fit-fill',
    },
    {
      id: 31,
      src: '/Sophia-outdoor2.jpg',
      alt: 'galleryImage30',
      className: 'gallery-image-wrapper-2 object-fit-fill',
    },
    {
      id: 32,
      src: '/RedDress-whiteCoatOver.jpg',
      alt: 'galleryImage31',
      className: 'gallery-image-wrapper-1 object-fit-cover',
    },
    {
      id: 33,
      src: '/Mannequin-sparklingCoat-goldDress.jpg',
      alt: 'galleryImage32',
      className: 'gallery-image-wrapper-2 object-fit-fill',
    },
    {
      id: 34,
      src: '/RedStussyShirt-longBoots.jpg',
      alt: 'galleryImage33',
      className: 'gallery-image-wrapper-1 object-fit-cover',
    },
    {
      id: 35,
      src: '/RedBlazer-woman-professional.jpg',
      alt: 'galleryImage34',
      className: 'gallery-image-wrapper-2 object-fit-cover',
    },
    {
      id: 36,
      src: '/LC-indoor-halloween.jpg',
      alt: 'galleryImage35',
      className: 'gallery-image-wrapper-1 object-fit-cover',
    },
    {
      id: 37,
      src: '/Man-black-flowerpattern.jpg',
      alt: 'galleryImage36',
      className: 'gallery-image-wrapper-2 object-fit-fill',
    },
    {
      id: 38,
      src: '/BlackTop-redNike.jpg',
      alt: 'galleryImage37',
      className: 'gallery-image-wrapper-1 object-fit-fill',
    },
    {
      id: 39,
      src: '/Gio-FlowerPedals.jpg',
      alt: 'galleryImage38',
      className: 'gallery-image-wrapper-2 object-fit-fill',
    },
    {
      id: 40,
      src: '/Gio-outdoor-photoshoot.jpg',
      alt: 'galleryImage39',
      className: 'gallery-image-wrapper-1 object-fit-cover',
    },
    {
      id: 41,
      src: '/Gio-handHoldingWoman.jpg',
      alt: 'galleryImage40',
      className: 'gallery-image-wrapper-2 object-fit-fill',
    },
    {
      id: 42,
      src: '/Sophia-bunny-costume.jpg',
      alt: 'galleryImage41',
      className: 'gallery-image-wrapper-1 object-fit-fill',
    },
    {
      id: 43,
      src: '/Sophia-captain.jpeg',
      alt: 'galleryImage42',
      className: 'gallery-image-wrapper-2 object-fit-fill',
    },
    {
      id: 44,
      src: '/Sophia-alex-purpleMatchingFit.jpeg',
      alt: 'galleryImage43',
      className: 'gallery-image-wrapper-1 object-fit-cover',
    },
    {
      id: 45,
      src: '/LongRedDress-whiteCoat.jpg',
      alt: 'galleryImage44',
      className: 'gallery-image-wrapper-2 object-fit-cover',
    },
    {
      id: 46,
      src: '/RedCarpet-turqoiseDress.jpg',
      alt: 'galleryImage45',
      className: 'gallery-image-wrapper-1 object-fit-cover',
    },
    {
      id: 47,
      src: '/StarWars-themed.jpg',
      alt: 'galleryImage46',
      className: 'gallery-image-wrapper-2 object-fit-fill',
    },
    {
      id: 48,
      src: '/Gio-holdingDress-turquoise.jpg',
      alt: 'galleryImage47',
      className: 'gallery-image-wrapper-1 object-fit-fill',
    },
    {
      id: 49,
      src: '/Sophia-Gio-redBike.jpg',
      alt: 'galleryImage48',
      className: 'gallery-image-wrapper-2 object-fit-fill',
    },
  ];

  const { imageRefs, visibleStates } = useIntersectionVisibleStates(
    images.length,
  );

  return (
    <div
      className="display-flex-wrap"
      role="region"
      aria-label="Gallery Photos"
    >
      {images.length > 0 ? (
        images.map((photo, index) => (
          <div className="gallery-image" key={photo.id}>
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
    </div>
  );
}

export default GalleryImages;
