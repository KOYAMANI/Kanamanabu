import {render, screen, cleanup} from '@testing-library/react';
import ReactDOM from "react-dom";
import renderer from 'react-test-renderer';
import Button from "./Button";

afterEach(cleanup);

describe('Button', () =>{
    test('Render without crashing', ()=>{
        const div = document.createElement('div')
        ReactDOM.render(<Button text="button-test" type="submit"/>, div)
    });

    test('Render text', ()=>{
        render(<Button text="button-test" type="submit"/>)
        const element = screen.getByText('button-test')
        expect(element).toBeInTheDocument();
    });

    test('match snapshot',()=>{
        const tree = renderer.create(<Button text="button-test" type="submit"/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})