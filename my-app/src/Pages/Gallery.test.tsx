import { render, screen, within } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Gallery } from './Gallery';

jest.mock('../Components/Footer', () => ({
  Footer: () => <footer data-testid="footer" />,
}));

describe('<Gallery />', () => {
  function renderGalleryAt(pathname = '/gallery') {
    return render(
      <MemoryRouter initialEntries={[pathname]}>
        <Routes>
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </MemoryRouter>,
    );
  }

  test('renders heading, video, and footer', () => {
    renderGalleryAt();

    // heading
    const heading = screen.getByRole('heading', { level: 2, name: /gallery/i });
    expect(heading).toBeInTheDocument();

    // video
    const video = screen.getByLabelText(/red carpet spanish interview/i);
    const src = video.querySelector('source')!;
    expect(src).toHaveAttribute('src', '/Gio-redcarpet-spanish.interview.mp4');
    expect(document.querySelectorAll('video')).toHaveLength(1);

    // footer
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  test('render lazy load gallery', async () => {
    renderGalleryAt();

    const wrap = screen.getByTestId('gallery-wrap');

    const gallerySection = await within(wrap).findByRole('region', {
      name: /gallery photos/i,
    });
    expect(gallerySection).toBeInTheDocument();

    expect(within(wrap).queryByRole('status')).not.toBeInTheDocument();
  });
});
