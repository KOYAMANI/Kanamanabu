import {render, screen} from '@testing-library/react';

import SlideCover from "./SlideCover";

test('SlideCover Login', ()=>{
    render(<SlideCover visible={true}/>)
    expect(screen.getByText('Log In')).toBeInTheDocument();
})