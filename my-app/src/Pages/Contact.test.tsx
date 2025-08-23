import { render, screen } from '@testing-library/react';
import { Contact } from './Contact';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

jest.mock('../Components/Footer', () => ({
  Footer: () => <footer data-testid="footer" />,
}));

describe('<Contact />', () => {
  function renderContactAt(pathname = '/contact') {
    return render(
      <MemoryRouter initialEntries={[pathname]}>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MemoryRouter>,
    );
  }

  test('renders headings, paragraphs, iframe form, image, and footer', () => {
    renderContactAt();

    const h2hello = screen.getByRole('heading', { level: 2, name: /hello\./i });
    expect(h2hello).toBeInTheDocument();

    const h2Welcome = screen.getByRole('heading', {
      level: 2,
      name: /welcome\./i,
    });
    expect(h2Welcome).toBeInTheDocument();

    const enterInfo = screen.getByRole('heading', {
      level: 3,
      name: /Please enter your information below .*/i,
    });
    expect(enterInfo).toBeInTheDocument();

    // left off writing the iframe portion...
  });
});
