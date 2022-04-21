import {render, screen} from '@testing-library/react';

import Footer from "./Footer";

describe('Footer', () =>{
    test('Render text', ()=>{
        render(<Footer/>)
        const element = screen.getByText('Copyright © Kanamanabu')
        expect(element).toBeInTheDocument();
    })
})