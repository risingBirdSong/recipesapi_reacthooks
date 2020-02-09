import React from 'react';
import { render } from '@testing-library/react';
import RecipeApp from './App';

test('renders learn react link', () => {
  const { getByText } = render(<RecipeApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
