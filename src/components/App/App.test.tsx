import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
    test('renders text', () => {
        render(<App />);
        expect(screen.getByText(/react application/i)).toBeInTheDocument();
    });
});
