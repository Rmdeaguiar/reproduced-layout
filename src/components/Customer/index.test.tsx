import { render, screen, fireEvent } from '@testing-library/react';
import Customer from '.';
import '@testing-library/jest-dom/';

describe('Customer Component', () => {
    it('should render customer correctly', () => {
        render(<Customer />);
        expect(screen.getByText("We want to get to know you 😊")).toBeInTheDocument();
        expect(screen.getByText("Hi!😉 What best explains you?")).toBeInTheDocument();
        expect(screen.getByText("Products")).toBeInTheDocument();
        expect(screen.getByText("Services")).toBeInTheDocument();
        expect(screen.getByText("SaaS")).toBeInTheDocument();
        expect(screen.getByText("Personality")).toBeInTheDocument();
        expect(screen.getByText("Other")).toBeInTheDocument();
    });

    it ('should go to the next page when clicking on the next button', ()=>{
        render(<Customer />);

        const button = screen.getByTestId("next");
        fireEvent.click(button);
        expect(screen.getByText("Nice👍 What is your monthly budget?")).toBeInTheDocument();
        expect(screen.getByText("$1-2k/mo")).toBeInTheDocument();
        expect(screen.getByText("$3k-4k/mo")).toBeInTheDocument();
        expect(screen.getByText("$5k-7k/mo")).toBeInTheDocument();
        expect(screen.getByText("$8k+/mo")).toBeInTheDocument();
        expect(screen.getByText("These are out of my budget")).toBeInTheDocument();

        const oldText = screen.queryByText("Hi!😉 What best explains you?");
        expect(oldText).not.toBeInTheDocument();

        fireEvent.click(button);
        expect(screen.getByText("Anything else you want us to know?")).toBeInTheDocument();
    });

    it ('should back to the previous page when clicking on the back button', ()=>{
        render(<Customer />);
        
        const buttonNext = screen.getByTestId("next");
        fireEvent.click(buttonNext);

        const oldText = screen.queryByText("Hi!😉 What best explains you?");
        expect(oldText).not.toBeInTheDocument();

        const buttonBack = screen.getByTestId("back");
        fireEvent.click(buttonBack);
        
        expect(screen.getByText("Hi!😉 What best explains you?")).toBeInTheDocument();
        expect(screen.getByText("Products")).toBeInTheDocument();
        expect(screen.getByText("Services")).toBeInTheDocument();
        expect(screen.getByText("SaaS")).toBeInTheDocument();
        expect(screen.getByText("Personality")).toBeInTheDocument();
        expect(screen.getByText("Other")).toBeInTheDocument();
    })
})

export { };