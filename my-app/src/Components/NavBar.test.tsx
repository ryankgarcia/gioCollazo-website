import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { NavBar } from './NavBar';
import userEvent from '@testing-library/user-event';

describe('<NavBar />', () => {
  test('renders all links to website pages', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(5);

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /testimonials/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  });

  test('links point to expected href routes', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute(
      'href',
      expect.stringContaining('/'),
    );
    expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute(
      'href',
      expect.stringContaining('/about'),
    );
    expect(screen.getByRole('link', { name: /services/i })).toHaveAttribute(
      'href',
      expect.stringContaining('/services'),
    );
    expect(screen.getByRole('link', { name: /testimonials/i })).toHaveAttribute(
      'href',
      expect.stringContaining('/testimonials'),
    );
    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute(
      'href',
      expect.stringContaining('/contact'),
    );
  });

  test('hamburger toggles the menu open/closed class', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );

    const linksContainer = document.getElementById('all-links')!;

    expect(linksContainer.className).not.toMatch(/\bopen\b/);

    const toggle = screen.getByRole('button', { name: /toggle navigation/i });
    await user.click(toggle);
    expect(linksContainer.className).toMatch(/\bopen\b/);

    await user.click(toggle);
    expect(linksContainer.className).not.toMatch(/\bopen\b/);
  });

  test('marks active route with aria-current when on that page', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <NavBar />
      </MemoryRouter>,
    );

    const about = screen.getByRole('link', { name: /about/i, current: 'page' });
    expect(about).toHaveAttribute('aria-current', 'page');
  });
});
