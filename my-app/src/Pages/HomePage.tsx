import './HomePageLayout.css';

export function HomePage() {
  return (
    <div className="home-container">
      <div className="home-row">
        <img
          className="home-GC-mainCoverImage"
          src="/gio-purple.JPG"
          alt="Giovanny Collazo Professional Stylist"
        />
      </div>
      <div className="home-row">
        <div className="home-column-full">
          <div className="home-GC-introduction">
            <p>Giovanny Collazo</p>
            <p>Personal Stylist</p>
            <p>Styling men & women since 2015</p>
            <p>
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
      <div className="home-row">
        <img
          className="home-image-right"
          src="/LC-pink-fit.jpg"
          alt="woman-outdoor-styledByGio-image2"
        />
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
          className="home-image-left"
          src="/daytrip-outdoor.jpg"
          alt="woman-outdoor-styledByGio-image1"
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
          src="/redCarpet-turqoiseDress.jpg"
          alt="woman-redCarpet-styledByGio-image10"
        />
      </div>
      <div className="home-column-third">
        <h2 className="home-clients-styled">Brands I've Worked With</h2>
      </div>
    </div>
  );
}
