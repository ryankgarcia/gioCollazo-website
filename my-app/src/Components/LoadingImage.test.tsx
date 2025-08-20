import { render, screen } from '@testing-library/react';
import Loading from './LoadingImage';

describe('<Loading />', () => {
  test('renders loading heading', () => {
    render(<Loading />);

    const heading = screen.getByRole('heading', {
      level: 2,
      name: /loading images\.\s*\.\s*\./i,
    });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/^Loading Images\.\s*\.\s*\.$/);

    const status = screen.getByRole('status');
    expect(status).toHaveTextContent(/loading images/i);
  });
});
