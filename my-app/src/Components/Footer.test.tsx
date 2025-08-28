import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Footer } from './Footer';

describe('<Footer />', () => {
  test('renders Quick Links to Contact, Gallery, and FAQ', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    const contact = screen.getByRole('link', { name: /contact/i });
    const gallery = screen.getByRole('link', { name: /gallery/i });
    const faq = screen.getByRole('link', { name: /FAQ/i });

    expect(contact).toHaveAttribute('href', '/contact');
    expect(gallery).toHaveAttribute('href', '/gallery');
    expect(faq).toHaveAttribute('href', '/FAQ');
  });

  function assertIsHTMLElement(el: Element | null): asserts el is HTMLElement {
    if (!(el instanceof HTMLElement)) {
      throw new Error('Expected an HTMLElement');
    }
  }

  test('renders three Stay Connected links with correct destinations', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    const stayConnectedHeading = screen.getByRole('heading', {
      name: /stay connected/i,
    });

    const container =
      stayConnectedHeading.closest('.link-column-full') ??
      stayConnectedHeading.parentElement;
    assertIsHTMLElement(container);

    const { getByRole } = within(container);

    const instagram = getByRole('link', { name: /instagram/i });
    const whatsapp = getByRole('link', { name: /whatsapp/i });
    const email = getByRole('link', { name: /email/i });

    expect(instagram).toHaveAttribute(
      'href',
      expect.stringContaining('instagram.com/styledbygio'),
    );
    expect(whatsapp).toHaveAttribute(
      'href',
      expect.stringContaining('https://wa.me/'),
    );
    expect(email).toHaveAttribute('href', 'mailto:styledbygio4@gmail.com');

    expect(instagram).toHaveAttribute('target', '_blank');
    expect(instagram).toHaveAttribute(
      'rel',
      expect.stringContaining('noopener'),
    );

    expect(whatsapp).toHaveAttribute('target', '_blank');
    expect(whatsapp).toHaveAttribute(
      'rel',
      expect.stringContaining('noopener'),
    );

    expect(email).toHaveAttribute('target', '_blank');
    expect(email).toHaveAttribute('rel', expect.stringContaining('noopener'));
  });

  test('shows the copyright message', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    expect(screen.getByTestId('copyright')).toHaveTextContent(
      /©\s*2025.*Giovanny\s+Collazo.*Ryan\s+Garcia/i,
    );
  });
});
