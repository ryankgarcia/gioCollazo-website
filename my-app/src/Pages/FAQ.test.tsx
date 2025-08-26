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

    expect(
      screen.getByText(/what is a wardrobe stylist\?/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/a style expert is a wardrobe professional/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/what is your styling process\?/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/i begin with a brief style questionnaire/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/what is included in your services\?/i),
    ).toBeInTheDocument();

    expect(screen.getByText(/i offer a range of/i)).toBeInTheDocument();
    const link = screen.getByRole('link', { name: /services/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/services');
    expect(
      screen.getByText(/and packages tailored to fit your individual needs\./i),
    ).toBeInTheDocument();

    expect(screen.getByText(/do you offer aftercare\?/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /absolutely\. throughout our time working together, I’ll guide you in understanding your body and how to dress with confidence\. My goal is to empower you with lasting knowledge so that you feel proud of your style, with or without my help\./i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/do you offer services to men\?/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/yes, i offer services to men\. everyone is welcome\./i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/do you offer virtual styling\?/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /yes, i offer virtual styling sessions through video chat or any camera-enabled device/i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /how much does it cost\? what is the budget i should expect for new clothes\?/i,
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /my services are designed to give you the polished, professional results/i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /you’ll always receive lasting quality and exceptional value\./i,
      ),
    ).toBeInTheDocument();

    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
