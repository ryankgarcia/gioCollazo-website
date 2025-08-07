import { lazy, Suspense } from 'react';
import { Footer } from '../Components/Footer';
import Loading from '../Components/LoadingImage';
import './Gallery.css';

const LazyLoadGalleryImages = lazy(() => import('../Components/GalleryImages'));

export function Gallery() {
  return (
    <div className="gallery-container">
      <h2 className="gallery-h2">Gallery</h2>
      <div className="gallery-row">
        <div className="gallery-column-full">
          {
            <Suspense fallback={<Loading />}>
              <LazyLoadGalleryImages />
            </Suspense>
          }
        </div>
      </div>
      <div>
        <video className="video-H" controls muted>
          <source
            src="/Gio-redcarpet-spanish.interview.mp4"
            type="video/mp4"
            className="bts-video"
          />
        </video>
      </div>
      <Footer />
    </div>
  );
}
