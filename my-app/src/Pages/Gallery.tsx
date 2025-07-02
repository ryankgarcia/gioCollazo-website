import { Footer } from '../Components/Footer';
import './Gallery.css';

export function Gallery() {
  return (
    <>
      <h2 className="gallery-h2">Gallery</h2>
      <div className="gallery-row">
        <div className="gallery-column-full">
          <img
            src="/LC-bratGirlSummer.jpg"
            alt="gallery-image"
            className="gallery-image-R"
          />
          <img
            src="/DJ-styled.jpg"
            alt="gallery-image"
            className="gallery-image-L"
          />
          <img
            src="/ryan-edc-outfit-1.png"
            alt="gallery-image"
            className="gallery-image-R"
          />
          {/* <div className="purple-bkgd-R"> */}
          <img
            src="/weddingDressed.jpg"
            alt="gallery-image"
            className="gallery-image-L"
          />
          {/* </div> */}
          <img
            src="/gio-w-shades.jpg"
            alt="gallery-image"
            className="gallery-image-R"
          />
          <img
            src="/outdoor-man-blackshirt-greypants.jpg"
            alt="gallery-image"
            className="gallery-image-L"
          />
          <img
            src="/LC-red-romper.jpg"
            alt="gallery-image"
            className="gallery-image-R"
          />
          <div className="gallery-row">
            <div className="purple-bkgd-R">
              <img
                src="/indoor-pinkDress-whitebkgd.jpg"
                alt="gallery-image"
                className="gallery-image-L"
              />
            </div>
          </div>
          <img
            src="/outdoor-woman-colorfulMatchingFit.jpg"
            alt="gallery-image"
            className="gallery-image-R"
          />
          <div className="purple-bkgd-L">
            <img
              src="/LC-pinkDress-goldenRoad.jpg"
              alt="gallery-image"
              className="gallery-image-L"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
