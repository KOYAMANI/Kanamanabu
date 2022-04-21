import {render, screen} from '@testing-library/react';
import React from 'react'
import ChapterSelection from "./ChapterSelection";

const category =
    {
        _id: "1",
        title: 'title-test',
        category: 'subTitle-test',
        subcategory: ['aiueo', 'kakikukeko'],
        desc: 'desc',
        imageUrl: 'https://google.com'
    }

describe('ChapterSelection', ()=>{

    test('Render Title', ()=>{
        render(<ChapterSelection category={category}/>)
        const title = screen.getByText('title-test')
        expect(title).toBeInTheDocument();
    })

    test('Render SubTitle', ()=>{
        render(<ChapterSelection category={category}/>)
        const subTitle = screen.getByText('subTitle-test')
        expect(subTitle).toBeInTheDocument();
    })

})
