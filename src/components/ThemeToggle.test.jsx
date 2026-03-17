import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ThemeToggle } from './ThemeToggle';
import { ThemeContext } from '../theme';

describe('ThemeToggle', () => {
  it('renders the toggle button', () => {
    const t = { accent: '#000' }; // Mock theme
    render(
      <ThemeContext.Provider value={{ t }}>
        <ThemeToggle onToggle={() => {}} />
      </ThemeContext.Provider>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
