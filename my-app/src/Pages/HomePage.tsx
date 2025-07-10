import { lazy, Suspense } from 'react';
import { Footer } from '../Components/Footer';
import Loading from '../Components/LoadingImage';
import './HomePage.css';

const LazyLoadTop10Looks = lazy(() => import('../Components/Top10Looks'));

const LazyLoadBTS = lazy(() => import('../Components/BehindTheScenes'));

const LazyLoadBrands = lazy(() => import('../Components/BrandsWorkedWith'));

export function HomePage() {
  return (
    <div className="home-container">
      <div className="home-row">
        <img
          className="home-GC-mainCoverImage"
          src="/gio-purple-closeup.jpeg"
          alt="Giovanny Collazo Professional Stylist"
        />
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
        <div className="home-column-full">
          <div className="home-GC-introduction">
            <p lang="es" className="home-text">
              Hablo español y ofrezco mis servicios desde WhatsApp. Si gustas
              mas información, puedes traducir la página al español y/o mandarme
              un mensaje de WhatsApp. Al fin de la pagina encontraras el icono
              de WhatsApp para conectarnos.
            </p>
          </div>
        </div>
      </div>
      <div className="home-column-full">
        <h2 className="home-clients-styled">Behind The Scenes</h2>
        <video controls muted>
          <source
            src="styledByGio-behindTheScenes.mp4"
            type="video/mp4"
            className="bts-video"
          />
        </video>
        {
          <Suspense fallback={<Loading />}>
            <LazyLoadBTS />
          </Suspense>
        }
      </div>
      <div className="home-row">
        <div className="home-column-full">
          <h2 className="home-clients-styled">Style Highlights</h2>
        </div>
      </div>
      <div className="home-row">
        {
          <Suspense fallback={<Loading />}>
            <LazyLoadTop10Looks />
          </Suspense>
        }
      </div>
      {/* <img
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
        src="/green-sun-skirt-whiteTop.jpg"
        alt="woman-indoor-styledByGio-image5"
      />
      <img
        className="home-image-right"
        src="/LC-pink-fit.jpg"
        alt="woman-outdoor-styledByGio-image2"
      />
      <img
        className="home-image-left"
        src="/tealDress-blondeWoman.jpg"
        alt="woman-indoor-styledByGio-image7"
      />
      <img
        className="home-image-right"
        src="/matching-couple.jpg"
        alt="matchingCouple-styledByGio-image6"
      />
      <img
        className="home-image-left"
        src="/redBlazer-professional.jpg"
        alt="woman-indoor-styledByGio-image9"
      />
      <img
        className="home-image-right"
        src="/ryan-edc-2.jpg"
        alt="man-outdoor-styledByGio-image8"
      />
      <img
        className="home-image-left"
        src="/redCarpet-tropicalDress.jpg"
        alt="woman-redCarpet-styledByGio-image11"
      />
      <img
        className="home-image-right"
        src="/pinkStyled.jpg"
        alt="woman-indoor-styledByGio-image10"
      />
      <img
        className="home-image-left"
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
        className="home-image-right"
        src="/longRedDress-whiteCoat.jpg"
        alt="woman-styledByGio-image14"
      />
      <img
        className="home-image-left"
        src="/starWars-themed.jpg"
        alt="matchingCouple-styledByGio-image13"
      /> */}
      <h2 className="home-clients-styled">Brands I've Worked With</h2>
      {/* <div className="home-row"> */}
      {/* <div className="home-column-full"> */}
      <div className="home-row">
        <div className="brand-circle">
          {
            <Suspense fallback={<Loading />}>
              <LazyLoadBrands />
            </Suspense>
          }
        </div>
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
          <div className="brand-circle">
            <img
              className="brand-image"
              src="/Brands-Gio-has-worked-with/cynthiaBach-logo-redone.jpg"
              alt="CynthiaBach-brand-logo"
            />
          </div>
          <div className="brand-circle">
            <img
              className="brand-image"
              src="/Brands-Gio-has-worked-with/dolls-logo.png"
              alt="Dolls-Kill-brand-logo"
            />
          </div>
          <div className="brand-circle">
            <img
              className="brand-image"
              src="/Brands-Gio-has-worked-with/fashion-nova-logo.jpeg"
              alt="Fashion-Nova-brand-logo"
            />
          </div>
          <div className="brand-circle">
            <img
              className="brand-image"
              src="/Brands-Gio-has-worked-with/gq-germany-logo.jpeg"
              alt="GQ-Germany-brand-logo"
            />
          </div>
          <div className="brand-circle">
            <img
              className="brand-image"
              src="/Brands-Gio-has-worked-with/h-m-logo.png"
              alt="H&M-brand-logo"
            />
          </div>
          <div className="brand-circle">
            <img
              className="brand-image"
              src="/Brands-Gio-has-worked-with/la-llama-viajera-logo.png"
              alt="La-Llama-Viajera-brand-logo"
            />
          </div>
          <div className="brand-circle">
            <img
              className="brand-image"
              src="/Brands-Gio-has-worked-with/loveSlapRecording-logo.jpeg"
              alt="Love-Slap-Recordings-brand-logo"
            />
          </div>
          <div className="brand-circle">
            <img
              className="brand-image"
              src="/Brands-Gio-has-worked-with/mother-plucker-logo.jpeg"
              alt="MotherPluckerFeatherCompanyInc-brand-logo"
            />
          </div>
          <div className="brand-circle">
            <img
              className="brand-image"
              src="/Brands-Gio-has-worked-with/neiman-marcus-logo.jpeg"
              alt="NeimanMarcus-brand-logo"
            />
          </div>
          <div className="brand-circle">
            <img
              className="brand-image"
              src="/Brands-Gio-has-worked-with/out-logo.png"
              alt="Out-brand-logo"
            />
          </div>
          <div className="brand-circle">
            <img
              className="brand-image"
              src="/Brands-Gio-has-worked-with/pia-gladys-perey-logo.png"
              alt="PiaGladysPerey-brand-logo"
            />
          </div>
          <div className="brand-circle">
            <img
              className="brand-image"
              src="/Brands-Gio-has-worked-with/teen-vogue-logo.jpeg"
              alt="TeenVogue-brand-logo"
            />
          </div>
          <div className="brand-circle">
            <img
              className="brand-image"
              src="/Brands-Gio-has-worked-with/viv-vitals-logo.jpeg"
              alt="VivVitals-brand-logo"
            />
          </div>
          <div className="brand-circle">
            <img
              className="brand-image"
              src="/Brands-Gio-has-worked-with/zara-logo-circle.jpg"
              alt="Zara-brand-logo"
            /> */}
        {/* </div> */}
        {/* </div> */}
      </div>
      <Footer />
    </div>
  );
}
