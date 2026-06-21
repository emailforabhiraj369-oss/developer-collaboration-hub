import { render } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('renders the entire app workspace container without crashing', () => {
  const { container } = render(<App />);
  
  // Confirms that the DOM tree built some core HTML nodes safely
  expect(container).toBeDefined();
  expect(container.firstChild).not.toBeNull();
});