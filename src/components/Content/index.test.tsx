import { render, screen } from '@testing-library/react';
import Content from '.';
import '@testing-library/jest-dom/';


describe('Content Component', () => {
    it('should render content correctly', () => {
        render(<Content />);
        expect(screen.getByText("Let's grow your")).toBeInTheDocument();
        expect(screen.getByText("social presence.")).toBeInTheDocument();
    })
})

export { };