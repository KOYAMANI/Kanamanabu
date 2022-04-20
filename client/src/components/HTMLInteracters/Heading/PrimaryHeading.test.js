import {render, screen} from '@testing-library/react';

import PrimaryHeading from "./PrimaryHeading";

test('Heading', ()=>{
    render(<PrimaryHeading text="heading-test"/>)
    expect(screen.getByText('heading-test')).toBeInTheDocument();
})