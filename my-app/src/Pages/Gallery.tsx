import { lazy, Suspense } from 'react';
import { Footer } from '../Components/Footer';
import Loading from '../Components/LoadingImage';
import './PagesCssInCommon.css';

const LazyLoadGalleryImages = lazy(() => import('../Components/GalleryImages'));

export function Gallery() {
  return (
    <div className="page-container">
      <h2 className="header-element text-center">Gallery</h2>
      <div className="flex-row">
        <div className="display-flex-wrap" data-testid="gallery-wrap">
          {
            <Suspense fallback={<Loading />}>
              <LazyLoadGalleryImages />
            </Suspense>
          }
        </div>
      </div>
      <div>
        <video
          className="video-H"
          controls
          muted
          aria-label="Red Carpet Spanish Interview"
        >
          <source
            src="/Gio-redcarpet-spanish-interview.mp4"
            type="video/mp4"
            className="bts-video"
          />
        </video>
      </div>
      <Footer />
    </div>
  );
}
