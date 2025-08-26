import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home';

jest.mock('../Components/Footer', () => ({
  Footer: () => <footer data-testid="footer" />,
}));

describe('<Home />', () => {
  function renderHomeAt(pathname = '/') {
    return render(
      <MemoryRouter initialEntries={[pathname]}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MemoryRouter>,
    );
  }

  test('renders headings, paragraphs, components, and footer', () => {
    renderHomeAt();

    // image 1 & 2 to render
    const homeImg1 = screen.getByAltText(
      /giovanny collazo professional stylist$/i,
    );
    expect(homeImg1).toBeInTheDocument();
    expect(homeImg1).toHaveAttribute('src', '/Gio-white-squaredImage.jpeg');

    const homeImg2 = screen.getByAltText(/professional stylist image 2/i);
    expect(homeImg2).toBeInTheDocument();
    expect(homeImg2).toHaveAttribute('src', '/Gio-pink-suit.jpeg');

    expect(screen.getAllByRole('img')).toHaveLength(2);

    // intro paragraphs 5
    expect(screen.getByText(/giovanny collazo/i)).toBeInTheDocument();
    expect(screen.getByText(/personal stylist/i)).toBeInTheDocument();
    expect(
      screen.getByText(/styling men & women since 2015/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/bringing the best out of/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /focusing on what is comfortable, fashionable, and makes you feel amazing in the clothes you're in\./i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /hablo español y ofrezco mis servicios desde whatsApp\. si gustas mas información, puedes traducir la página al español y\/o mandarme un mensaje de whatsApp\. al fin de la pagina encontraras el icono de whatsApp para conectarnos\./i,
      ),
    ).toBeInTheDocument();

    // video to render 2 videos

    const vid1 = screen.getByLabelText(/bTS styling for video shoot/i);
    const src1 = vid1.querySelector('source')!;
    expect(src1).toHaveAttribute('src', '/BTS-stylingForVideoShoot.mp4');

    const vid2 = screen.getByLabelText(/gio spray painting/i);
    const src2 = vid2.querySelector('source')!;
    expect(src2).toHaveAttribute('src', '/BTS-gioSprayPainting.mp4');

    expect(document.querySelectorAll('video')).toHaveLength(2);

    // button to render 1
    expect(
      screen.getByRole('link', { name: /learn more/i }),
    ).toBeInTheDocument();

    // headers to render 3
    expect(
      screen.getByRole('heading', { level: 2, name: /Behind The Scenes/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: /Style Highlights/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /Brands I've Worked With/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(3);

    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  test('render lazy load behind the scenes', async () => {
    renderHomeAt();

    const fallback = screen.getByRole('status');
    expect(fallback).toBeInTheDocument();

    const btsSection = await screen.findByRole('region', {
      name: /behind the scenes gallery/i,
    });
    expect(btsSection).toBeInTheDocument();

    expect(screen.getByRole('status')).not.toBeInTheDocument();
  });

  test('render lazy load style highlights', async () => {
    renderHomeAt();

    const fallback = screen.getByRole('status');
    expect(fallback).toBeInTheDocument();

    const shSection = await screen.findByRole('region', {
      name: /stylehighlights gallery/i,
    });
    expect(shSection).toBeInTheDocument();

    expect(screen.getByRole('status')).not.toBeInTheDocument();
  });

  test('render lazy load brands worked with', async () => {
    renderHomeAt();

    const fallback = screen.getByRole('status');
    expect(fallback).toBeInTheDocument();

    const brandsSection = await screen.findByRole('region', {
      name: /brands i've worked with gallery/i,
    });
    expect(brandsSection).toBeInTheDocument();

    expect(screen.getByRole('status')).not.toBeInTheDocument();
  });
});
