import { render, screen } from '@testing-library/react';

import { NavItem } from './NavItem';

describe('NavItem functionality', () => {
  test('Should render content correctly', () => {
    render(<NavItem name="Home" path="/" />);

    expect(screen.getByRole('link', { name: 'Home' })).toBeVisible;
  });
});