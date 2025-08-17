import './PagesCssInCommon.css';
import './About.css';
import { Link } from 'react-router-dom';
import { Footer } from '../Components/Footer';

export function AboutMe() {
  return (
    <div className="page-container">
      <h2 className="header-element text-center">Hello.</h2>
      <h2 className="imGio-header text-center"> I'm Giovanny Collazo!</h2>
      <p className="p-text">
        Born and raised in Los Angeles, Giovanny Collazo is a proud Latino
        personal stylist whose passion for fashion was ignited in the early
        2000s, inspired by iconic trendsetters like Nicole Richie, Paris Hilton,
        Mary-Kate Olsen, and Lindsay Lohan. Their fearless approach to style
        sparked Giovanny’s love for glam, beauty, and transformation. Immersed
        in LA’s vibrant nightlife and rave scene during the late 2000s, his
        bold, neon-infused aesthetic began to take shape—mixing streetwear with
        high-fashion edge and futuristic flair.
      </p>
      <p className="p-text">
        In 2015, Giovanny graduated from the renowned “School of Style,” where
        he gained the foundation to launch a successful career in fashion. After
        interning with several top stylists, he carved his own path as a
        personal stylist, working everywhere from in-home closets to
        high-profile red carpets. Whether dressing clients for everyday
        confidence or spotlight moments, Giovanny’s mission is always the same:
        to help people look, and <em>feel</em>, like the best version of
        themselves.
      </p>
      <div className="about-row">
        <div className="aboutMe-imageWrapper">
          <img
            className="aboutMe-image about-object-top"
            src="/Gio-purple-about-page.jpeg"
            alt="Professional Stylist - Giovanny Collazo - StyledByGio - image 1"
          />
        </div>
        <div className="aboutMe-imageWrapper">
          <img
            className="aboutMe-image about-object-fill"
            src="/Gio-stylist-bluebackground.jpg"
            alt="Professional Stylist - Giovanny Collazo - StyledByGio - image 2"
          />
        </div>
        <div className="aboutMe-imageWrapper">
          <img
            className="aboutMe-image about-object-top"
            src="/Gio-w-shades.jpg"
            alt="Professional Stylist - Giovanny Collazo - StyledByGio - image 3"
          />
        </div>
      </div>
      <div className="about-row">
        <div className="about-column-full">
          <div className="button-center">
            <Link
              className="button about-button-margin text-center"
              to="/services"
            >
              Learn More. . .
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
