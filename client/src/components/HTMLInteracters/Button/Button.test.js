import {render, screen} from '@testing-library/react';

import Button from "./Button";

test('Button', ()=>{
    render(<Button text="button-test" type="submit"/>)
    expect(screen.getByText('button-test')).toBeInTheDocument();
})