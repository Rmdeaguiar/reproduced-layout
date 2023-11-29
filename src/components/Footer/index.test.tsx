import { render, screen } from '@testing-library/react';
import Footer from '.';
import '@testing-library/jest-dom/';

describe('Footer Component', () => {
    it('should render footer correctly', () => {
        render(<Footer />);
        expect(screen.getByText("Subscribe to our newsletter")).toBeInTheDocument();
        expect(screen.getByText("Portfolio")).toBeInTheDocument();
        expect(screen.getByText("What we offer")).toBeInTheDocument();
        expect(screen.getByText("How it works")).toBeInTheDocument();
        expect(screen.getByText("Contact us")).toBeInTheDocument();

        expect(screen.getByText("hello@summerlymedia.com")).toBeInTheDocument();
        expect(screen.getByText("creatores@summerlymedia.com")).toBeInTheDocument();

    })
})

export { };