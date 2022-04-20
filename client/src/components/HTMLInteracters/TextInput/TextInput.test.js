import {render, screen} from '@testing-library/react';

import TextInput from "./TextInput";

test('TextInput', ()=>{
    render(<TextInput placeholder="placeholder" type="type" value='value'/>)
    expect(screen.getByText('placeholder')).toBeInTheDocument();

})