import {render, screen} from '@testing-library/react';

import Badge from "./Badge";

const achievement =
    {
        _id: "1",
        title: 'title',
        imageUrl: 'https://google.com'
    }
describe('Achievement badge', () =>{
    test('Render title text', ()=>{
        render(<Badge achievement={achievement}/>)
        const title = screen.getByText('title')
        expect(title).toBeInTheDocument();
    })
})