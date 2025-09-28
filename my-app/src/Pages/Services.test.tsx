import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Services } from './Services';

jest.mock('../Components/Footer', () => ({
  Footer: () => <footer data-testid="footer" />,
}));

describe('<Services />', () => {
  function renderServicesAt(pathname = '/services') {
    return render(
      <MemoryRouter initialEntries={[pathname]}>
        <Routes>
          <Route path="/services" element={<Services />} />
        </Routes>
      </MemoryRouter>,
    );
  }

  test('renders images, headings, paragraphs, links, and footer', () => {
    renderServicesAt();

    // likely going to add images. if they are added, test for them here...
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);

    // this expect function will likely change if Gio wants to change the images of him across the site...
    expect(screen.getByAltText(/gio garment rack image/i)).toHaveAttribute(
      'src',
      '/Gio-Garment-Rack-allPink.jpeg',
    );

    // the same goes for this function...
    expect(screen.getByAltText(/gio styling a mannequin/i)).toHaveAttribute(
      'src',
      '/Gio-Mannequin-styling-services.jpeg',
    );

    // 6 headings elements (level => h3)
    const h3Elements = screen.getAllByRole('heading', { level: 3 });
    expect(h3Elements).toHaveLength(6);

    expect(
      screen.getByRole('heading', { level: 3, name: /my mission/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: /a la carte/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: /closet clean-outs/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: /shopping with gio/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: /trips\s*&\s*events/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: /extended services/i }),
    ).toBeInTheDocument();

    // paragraph element tests
    expect(
      screen.getByText(/your style is a reflection of who you are/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /i offer a seamless experience designed around your unique needs/i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /in-person or virtually, i ensure that every detail is thoughtfully curated so you step out/i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /let[’']s detox your wardrobe and make space for who you are now/i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /no judgment\. just clarity, style, and a fresh perspective\./i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/your budget\. your vibe\. your glow-up\./i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/we[’']ll shop smarter, not harder/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/getting ready to travel somewhere new\?/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/in addition to my styling expertise/i),
    ).toBeInTheDocument();

    // button as a link to render 4
    const links = screen.getAllByRole('link', { name: /book your session/i });
    expect(links).toHaveLength(4);
    links.forEach((a) => {
      expect(a).toHaveAttribute('href', '/contact');
    });

    // testing footer
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
