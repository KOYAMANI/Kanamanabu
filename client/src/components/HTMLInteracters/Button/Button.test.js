import {render, screen} from '@testing-library/react';

import Button from "./Button";

describe('Button', () =>{
    test('Render text', ()=>{
        render(<Button text="button-test" type="submit"/>)
        const element = screen.getByText('button-test')
        expect(element).toBeInTheDocument();
    })
})