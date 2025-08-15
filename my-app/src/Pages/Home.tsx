import { lazy, Suspense } from 'react';
import { Footer } from '../Components/Footer';
import Loading from '../Components/LoadingImage';
import { Link } from 'react-router-dom';
import './PagesCssInCommon.css';
import './Home.css';

const LazyLoadStyleHighlights = lazy(
  () => import('../Components/StyleHighlights'),
);

const LazyLoadBTS = lazy(() => import('../Components/BehindTheScenes'));

const LazyLoadBrands = lazy(() => import('../Components/BrandsWorkedWith'));

export function HomePage() {
  return (
    <div className="page-container">
      <div className="home-row">
        <img
          // delete this relative path image when finalizing project if its
          // ends up not being in the final version /public/gio-purple-closeup.jpeg
          src="/Gio-white-squaredImage.jpeg"
          alt="Giovanny Collazo Professional Stylist"
          className="home-GC-mainCoverImage"
        />
        <div className="home-intro-row">
          {/* <div className="column-full"> */}
          <p className="gio-intro-name text-center">Giovanny Collazo</p>
          <p className="gio-intro-title text-center">Personal Stylist</p>
          <p className="gio-intro-est-2015 text-center">Styling men & women since 2015</p>
        </div>
        {/* </div> */}
      </div>
      <p className="p-text">
        Bringing the best out of <em>YOU</em>. Focusing on what is comfortable,
        fashionable, and makes you feel amazing in the clothes you're in.
      </p>
      <p lang="es" className="p-text">
        Hablo español y ofrezco mis servicios desde WhatsApp. Si gustas mas
        información, puedes traducir la página al español y/o mandarme un
        mensaje de WhatsApp. Al fin de la pagina encontraras el icono de
        WhatsApp para conectarnos.
      </p>
      <div className="image-center">
        <img
          src="/Gio-pink-suit.jpeg"
          alt="Giovanny Collazo Professional Stylist Image 2"
          className="home-GC-coverImage2"
        />
      </div>
      <h2 className="home-bts-header">Behind The Scenes</h2>
      <div className="home-row">
        {/* <div className="column-full"> */}
        <div className="video-container-H">
          <video className="video-H" controls muted>
            <source src="/BTS-stylingForVideoShoot.mp4" type="video/mp4" />
          </video>
          {/* </div> */}
        </div>
      </div>
      <div className="home-row">
        <div className="column-full">
          <div className="video-container-V video-center">
            {/* adjust the vertical video to fit inside the container on mobile & desktop */}
            <video className="video-V" controls muted>
              <source src="/BTS-gioSprayPainting.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="home-row">
        <div className="display-flex-wrap">
          {
            <Suspense fallback={<Loading />}>
              <LazyLoadBTS />
            </Suspense>
          }
        </div>
      </div>
      <div className="home-row">
        <div className="column-full">
          <div className="button-center home-button-margin">
            <Link to="/about" className="learn-more text-center">
              Learn more...
            </Link>
          </div>
        </div>
      </div>
      <h2 className="home-style-highlights">Style Highlights</h2>
      <div className="home-row">
        <div className="display-flex-wrap">
          {
            <Suspense fallback={<Loading />}>
              <LazyLoadStyleHighlights />
            </Suspense>
          }
        </div>
      </div>
      <h2 className="home-brandsWorkedW">Brands I've Worked With</h2>
      <div className="home-row">
        <div className="display-flex-wrap">
          {
            <Suspense fallback={<Loading />}>
              <LazyLoadBrands />
            </Suspense>
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}
