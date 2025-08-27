import { render, screen, within } from '@testing-library/react';
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

  test('renders headings, paragraphs, intro imgs, and footer', () => {
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

    const vid1 = screen.getByLabelText(/bts styling for video shoot/i);
    const src1 = vid1.querySelector('source')!;
    expect(src1).toHaveAttribute('src', '/BTS-stylingForVideoShoot.mp4');

    const vid2 = screen.getByLabelText(/gio spray painting/i);
    const src2 = vid2.querySelector('source')!;
    expect(src2).toHaveAttribute('src', '/BTS-gioSprayPainting.mp4');

    expect(document.querySelectorAll('video')).toHaveLength(2);

    // button as a link to render 1
    expect(
      screen.getByRole('link', { name: /learn more/i }),
    ).toBeInTheDocument();

    // headers to render 3
    expect(
      screen.getByRole('heading', { level: 2, name: /behind the scenes/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: /style highlights/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /brands i've worked with/i,
      }),
    ).toBeInTheDocument();

    const mainImg = screen.getByAltText(
      /giovanny collazo professional stylist$/i,
    );
    const firstRow = mainImg.closest('.home-row');
    expect(firstRow).not.toBeNull();
    expect(firstRow).toBeInstanceOf(HTMLElement);

    const { getAllByRole } = within(firstRow as HTMLElement);
    expect(getAllByRole('img')).toHaveLength(1);

    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  test('render lazy load behind the scenes', async () => {
    renderHomeAt();

    const wrap = screen.getByTestId('bts-wrap');

    const btsSection = await within(wrap).findByRole('region', {
      name: /behind the scenes gallery/i,
    });
    expect(btsSection).toBeInTheDocument();

    expect(within(wrap).queryByRole('status')).not.toBeInTheDocument();
  });

  test('render lazy load style highlights', async () => {
    renderHomeAt();

    const wrap = screen.getByTestId('sh-wrap');

    const shSection = await within(wrap).findByRole('region', {
      name: /stylehighlights gallery/i,
    });
    expect(shSection).toBeInTheDocument();

    expect(within(wrap).queryByRole('status')).not.toBeInTheDocument();
  });

  test('render lazy load brands worked with', async () => {
    renderHomeAt();

    const wrap = screen.getByTestId('brands-wrap');

    const brandsSection = await within(wrap).findByRole('region', {
      name: /brands i've worked with gallery/i,
    });
    expect(brandsSection).toBeInTheDocument();

    expect(within(wrap).queryByRole('status')).not.toBeInTheDocument();
  });
});
