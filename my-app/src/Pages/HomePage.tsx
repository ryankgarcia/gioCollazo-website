// import { Footer } from '../Components/Footer';
import { Footer } from '../Components/Footer';
import './HomePageLayout.css';

export function HomePage() {
  return (
    <div className="home-container">
      <div className="home-row">
        <img
          className="home-GC-mainCoverImage"
          src="/gio-purple-closeup.jpeg"
          alt="Giovanny Collazo Professional Stylist"
        />
        {/* <img
          className="home-GC-mainCoverImage"
          src="/gio-purple.JPG"
          alt="Giovanny Collazo Professional Stylist"
        /> */}
      </div>
      <div className="home-row">
        <div className="home-column-full">
          <div className="home-GC-introduction">
            <p className="home-text">Giovanny Collazo</p>
          </div>
        </div>
      </div>
      <div className="home-row">
        <div className="home-column-full">
          <div className="home-GC-introduction">
            <p className="home-text">Personal Stylist</p>
          </div>
        </div>
      </div>
      <div className="home-row">
        <div className="home-column-full">
          <div className="home-GC-introduction">
            <p className="home-text">Styling men & women since 2015</p>
          </div>
        </div>
      </div>
      <div className="home-row">
        <div className="home-column-full">
          <div className="home-GC-introduction">
            <p className="home-text">
              Bringing the best out of YOU. Focusing on what is comfortable,
              fashionable, and makes you feel amazing in the clothes you're in.
            </p>
          </div>
        </div>
      </div>
      <div className="home-row">
        <div className="home-column-third">
          <h2 className="home-clients-styled">Client's I've Styled</h2>
        </div>
      </div>
      <div className="home-row"></div>
      <img
        className="home-image-left"
        src="/elegant-redDress.jpg"
        alt="woman-outdoor-styledByGio-image3"
      />
      <img
        className="home-image-right"
        src="/black-redBlazer.jpg"
        alt="man-outdoor-styledByGio-image4"
      />
      <img
        className="home-image-right"
        src="/LC-pink-fit.jpg"
        alt="woman-outdoor-styledByGio-image2"
      />
      <img
        className="home-image-left"
        src="/green-sun-skirt-whiteTop.jpg"
        alt="woman-indoor-styledByGio-image5"
      />
      <img
        className="home-image-right"
        src="/matching-couple.jpg"
        alt="matchingCouple-styledByGio-image6"
      />
      <img
        className="home-image-left"
        src="/tealDress-blondeWoman.jpg"
        alt="woman-indoor-styledByGio-image7"
      />
      <img
        className="home-image-right"
        src="/ryan-edc-2.jpg"
        alt="man-outdoor-styledByGio-image8"
      />
      <img
        className="home-image-left"
        src="/redBlazer-professional.jpg"
        alt="woman-indoor-styledByGio-image9"
      />
      <img
        className="home-image-right"
        src="/pinkStyled.jpg"
        alt="woman-indoor-styledByGio-image10"
      />
      <img
        className="home-image-right"
        src="/redCarpet-turqoiseDress.jpg"
        alt="woman-redCarpet-styledByGio-image10"
      />
      <img
        className="home-image-right"
        src="/blackDress-dressingRoom.jpg"
        alt="woman-indoor-styledByGio-image10"
      />
      <img
        className="home-image-left"
        src="/redCarpet-tropicalDress.jpg"
        alt="woman-redCarpet-styledByGio-image11"
      />
      <img
        className="home-image-left"
        src="/daytrip-outdoor.jpg"
        alt="woman-outdoor-styledByGio-image1"
      />
      <img
        className="home-image-right"
        src="/whiteDress-tiara.jpg"
        alt="woman-redCarpet-styledByGio-image12"
      />
      <img
        className="home-image-left"
        src="/redStussyShirt-longBoots.jpg"
        alt="woman-outdoor-styledByGio-image13"
      />
      <img
        className="home-image-left"
        src="/starWars-themed.jpg"
        alt="matchingCouple-styledByGio-image13"
      />
      <img
        className="home-image-right"
        src="/longRedDress-whiteCoat.jpg"
        alt="woman-styledByGio-image14"
      />
      <div className="home-column-third">
        <h2 className="home-clients-styled">Brands I've Worked With</h2>
      </div>
      <div className="home-column-third">
        <h2 className="home-clients-styled">Behind The Scenes</h2>
      </div>
      <Footer />
    </div>
  );
}
