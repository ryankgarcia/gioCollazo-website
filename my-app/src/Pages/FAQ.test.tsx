import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { FAQ } from './FAQ';

jest.mock('../Components/Footer', () => ({
  Footer: () => <footer data-testid="footer" />,
}));

jest.mock('../Components/WorkWithMe', () => ({
  WorkWithMe: () => <div data-testid="work-with-me" />,
}));

describe('<FAQ />', () => {
  function renderFAQAt(pathname = '/FAQ') {
    return render(
      <MemoryRouter initialEntries={[pathname]}>
        <Routes>
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
      </MemoryRouter>,
    );
  }

  test('renders headings, paragraphs, and footer', () => {
    renderFAQAt();

    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(2);
    expect(
      screen.getByRole('heading', { level: 2, name: /frequently asked/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: /questions/i }),
    ).toBeInTheDocument();

    // at this point is a good time to look into how to reference a p element in testing...
    // need to write the rest of this test for the other p elements on the FAQ page.
    
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
