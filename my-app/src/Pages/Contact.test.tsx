import { render, screen } from '@testing-library/react';
import { Contact } from './Contact';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

jest.mock('../Components/Footer', () => ({
  Footer: () => <footer data-testid="footer" />,
}));

jest.mock('../Components/WorkWithMe', () => ({
  WorkWithMe: () => <div data-testid="work-with-me" />,
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

  test('renders headings, the form area, image, and footer', () => {
    renderContactAt();

    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(2);
    expect(
      screen.getByRole('heading', { level: 2, name: /hello\./i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: /welcome\./i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        level: 3,
        name: /please enter your information below so we can discuss how i can help\./i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByTestId('work-with-me')).toBeInTheDocument();

    expect(
      screen.getByRole('img', {
        name: /giovanny collazo - professional wardrobe stylist/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
