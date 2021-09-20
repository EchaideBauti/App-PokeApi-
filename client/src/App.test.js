import { render, screen } from '@testing-library/react';
import Footer from './component/Footer/Footer';


test('renders Footer text', () => {
    render(<Footer />);
    expect(screen.getAllByText('©Bautista Echaide')).toHaveLength(1)
  })
