import { render, screen } from '@testing-library/react';
import Header from '.';
import '@testing-library/jest-dom/';

describe('Header Component', () => {
    it('should render header correctly', () => {
        render(<Header />);
        expect(screen.getByText("What we offer")).toBeInTheDocument();
        expect(screen.getByText("How it works")).toBeInTheDocument();
        expect(screen.getByText("Portfolio")).toBeInTheDocument();
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    })
})

export { };