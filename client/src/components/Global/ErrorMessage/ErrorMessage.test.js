import {render, screen} from '@testing-library/react';

import ErrorMessage from "./ErrorMessage";

describe('ErrorMessage', () =>{
    test('Render text', ()=>{
        render(<ErrorMessage variant="info">error-test</ErrorMessage>)
        const element = screen.getByText('error-test')
        expect(element).toBeInTheDocument();
    })
})