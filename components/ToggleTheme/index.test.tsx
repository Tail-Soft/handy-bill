import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ToggleTheme } from '.';
import { useThemeContext } from '../../hooks/useTheme';

jest.mock('../../hooks/useTheme');

const mockUseTheme = useThemeContext as jest.Mock;

describe('ToggleTheme functionality', () => {
  test('Should render content correctly when theme is in light mode', async () => {
    mockUseTheme.mockImplementation(() => ({ theme: 'light' }));
    render(<ToggleTheme />);

    expect(screen.getByTestId('sunIcon')).toBeVisible();
    userEvent.hover(screen.getByTestId('sunIcon'));
    await waitFor(() => expect(screen.getByRole('tooltip')).toBeVisible());
  });

  test('Should render content correctly when theme is in dark mode', async () => {
    mockUseTheme.mockImplementation(() => ({ theme: 'dark' }));
    render(<ToggleTheme />);

    expect(screen.getByTestId('moonIcon')).toBeVisible();
    userEvent.hover(screen.getByTestId('moonIcon'));
    await waitFor(() => expect(screen.getByRole('tooltip')).toBeVisible());
  });

  test('Should call mock function when user clicks on the icon', async () => {
    const mockSetTheme = jest.fn();
    mockUseTheme.mockImplementation(() => ({
      theme: 'light',
      setTheme: mockSetTheme,
    }));
    render(<ToggleTheme />);

    await userEvent.click(screen.getByTestId('sunIcon'));

    expect(mockSetTheme).toBeCalledTimes(1);
  });
});
