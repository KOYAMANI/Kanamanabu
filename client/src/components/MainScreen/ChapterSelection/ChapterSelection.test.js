import {render, screen, cleanup} from '@testing-library/react';
import ReactDOM from "react-dom";
import renderer from 'react-test-renderer'
import ChapterSelection from "./ChapterSelection";

afterEach(cleanup)

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
    test('Render without crashing', ()=>{
        const div = document.createElement('div')
        ReactDOM.render(<ChapterSelection category={category}/>, div)
    });

    test('Render Title', ()=>{
        render(<ChapterSelection category={category}/>)
        const title = screen.getByText('title-test')
        expect(title).toBeInTheDocument();
    })

    test('Render SubTitle', ()=>{
        render(<ChapterSelection category={category}/>)
        const subTitle = screen.getByText('subTitle-test')
        expect(subTitle).toBeInTheDocument();
    });

    test('match snapshot',()=>{
        const tree = renderer.create(<ChapterSelection category={category}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })

})
