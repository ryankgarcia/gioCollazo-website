import { render, screen } from '@testing-library/react';
import { WorkWithMe } from './WorkWithMe - Form';

describe('<WorkWithMe />', () => {
  test('renders the Google Form iframe with correct title, src, and class', () => {
    render(<WorkWithMe />);

    const iframe = screen.getByTitle(/styledbygio contact form/i);

    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveClass('form-dimensions');

    expect(iframe).toHaveAttribute(
      'src',
      expect.stringContaining('https://docs.google.com/forms/'),
    );
    expect(iframe).toHaveAttribute('src', expect.stringContaining('viewform'));

    expect(iframe).toHaveAttribute('loading', 'lazy');
    expect(iframe).toHaveAttribute(
      'referrerpolicy',
      'no-referrer-when-downgrade',
    );
    expect(iframe).toHaveAttribute(
      'sandbox',
      expect.stringContaining('allow-forms'),
    );
  });
});
