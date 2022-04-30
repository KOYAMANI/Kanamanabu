import {render, screen, cleanup} from '@testing-library/react';
import ReactDOM from "react-dom";
import renderer from 'react-test-renderer';
import Badge from "./Badge";

afterEach(cleanup);

const achievement =
    {
        _id: "1",
        title: 'achievement-title-test',
        imageUrl: 'https://google.com'
    }

describe('Achievement badge', () =>{

    test('Render without crashing', ()=>{
        const div = document.createElement('div')
        ReactDOM.render(<Badge achievement={achievement}/>, div)
    });

    test('Render title text', ()=>{
        render(<Badge achievement={achievement}/>)
        const element = screen.getByText('achievement-title-test')
        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent('achievement-title-test')
    });

    test('match snapshot',()=>{
        const tree = renderer.create(<Badge achievement={achievement}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})