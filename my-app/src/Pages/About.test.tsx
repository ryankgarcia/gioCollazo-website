// import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { About } from './About';

jest.mock('../Components/Footer', () => ({
  Footer: () => <footer data-testid="footer" />,
}));

describe('<About />', () => {
  function renderAboutAt(pathname = '/about') {
    return render(
      <MemoryRouter initialEntries={[pathname]}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<div>Services Page</div>} />
        </Routes>
      </MemoryRouter>,
    );
  }

  test('renders headings, paragraphs, images, and footer', () => {
    renderAboutAt();

    const h2Hello = screen.getByRole('heading', { level: 2, name: /hello\./i });
    expect(h2Hello).toBeInTheDocument();

    const h2Name = screen.getByRole('heading', {
      level: 2,
      name: /i'?m\s+giovanny\s+collazo!?/i,
    });
    expect(h2Name).toBeInTheDocument();

    expect(
      screen.getByText(/Born and raised in Los Angeles/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /In 2015, Giovanny graduated from the renowned .*School of Style/i,
      ),
    ).toBeInTheDocument();

    const allImages = screen.getAllByRole('img');
    expect(allImages).toHaveLength(3);

    // this expect function will likely change if Gio wants to change the images of him across the site...
    expect(screen.getByAltText(/image 1/i)).toHaveAttribute(
      'src',
      '/Gio-purple-about-page.jpeg',
    );

    // the same goes for this function...
    expect(screen.getByAltText(/image 2/i)).toHaveAttribute(
      'src',
      '/Gio-stylist-bluebackground.jpg',
    );

    // also this one...
    expect(screen.getByAltText(/image 3/i)).toHaveAttribute(
      'src',
      '/Gio-w-shades.jpg',
    );

    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  test('services link has correct href and navigates', async () => {
    const user = userEvent.setup();
    renderAboutAt();

    const link = screen.getByRole('link', { name: /learn more/i });
    expect(link).toHaveAttribute('href', '/services');

    await user.click(link);

    expect(screen.getByText(/services page/i)).toBeInTheDocument();
  });
});
