import { lazy, Suspense } from 'react';
import { Footer } from '../Components/Footer';
import Loading from '../Components/LoadingImage';
import { Link } from 'react-router-dom';
import './HomePage.css';

const LazyLoadTop10Looks = lazy(() => import('../Components/Top10Looks'));

const LazyLoadBTS = lazy(() => import('../Components/BehindTheScenes'));

const LazyLoadBrands = lazy(() => import('../Components/BrandsWorkedWith'));

export function HomePage() {
  return (
    <div className="home-container">
      <div className="home-row">
        <img
          src="/gio-purple-closeup.jpeg"
          alt="Giovanny Collazo Professional Stylist"
          className="home-GC-mainCoverImage"
        />
        <div className="home-intro-row">
          <div className="home-column-full">
            <p className="gio-intro-text">Giovanny Collazo</p>
            <p className="gio-intro-text">Personal Stylist</p>
            <p className="gio-intro-text">Styling men & women since 2015</p>
          </div>
        </div>
      </div>
      <p className="home-text">
        Bringing the best out of YOU. Focusing on what is comfortable,
        fashionable, and makes you feel amazing in the clothes you're in.
      </p>
      <p lang="es" className="home-text">
        Hablo español y ofrezco mis servicios desde WhatsApp. Si gustas mas
        información, puedes traducir la página al español y/o mandarme un
        mensaje de WhatsApp. Al fin de la pagina encontraras el icono de
        WhatsApp para conectarnos.
      </p>
      <h2 className="home-bts-header">Behind The Scenes</h2>
      <div className="home-row">
        <div className="home-column-full">
          <video className="video-H" controls muted>
            <source
              src="styledByGio-behindTheScenes.mp4"
              type="video/mp4"
              className="bts-video-horizontal"
            />
          </video>
        </div>
      </div>
      <div className="home-row">
        <div className="home-column-full">
          <div className="video-container">
            <video className="video-V" controls muted>
              <source src="/bts-gioSprayPainting.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="home-row">
        <div className="home-column-full">
          <div className="bts-photos-padding">
            {
              <Suspense fallback={<Loading />}>
                <LazyLoadBTS />
              </Suspense>
            }
          </div>
        </div>
      </div>
      <div className="home-row">
        <div className="home-column-full">
          <div className="home-center-button">
            <Link to="/about" className="learn-more">
              Learn more...
            </Link>
          </div>
        </div>
      </div>
      <h2 className="home-style-highlights">Style Highlights</h2>
      {
        <Suspense fallback={<Loading />}>
          <LazyLoadTop10Looks />
        </Suspense>
      }
      <h2 className="home-brandsWorkedW">Brands I've Worked With</h2>
      {
        <Suspense fallback={<Loading />}>
          <LazyLoadBrands />
        </Suspense>
      }
      {/* <img
              className="brand-image"
              src="/Brands-Gio-has-worked-with/clubmaverick-logo.jpeg"
              alt="ClubMaverick-brand-logo"
            />
          </div>
          <div className="brand-circle">
            <img
              className="brand-image"
              src="/Brands-Gio-has-worked-with/couture-logo-cut.jpg"
              alt="Couture-brand-logo"
            />
          </div>
           */}

      <Footer />
    </div>
  );
}
