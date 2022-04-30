import {render, screen, cleanup} from '@testing-library/react';
import ReactDOM from "react-dom";
import renderer from 'react-test-renderer';
import PrimaryHeading from "./PrimaryHeading";

afterEach(cleanup);

describe('Heading', () =>{
    test('Render without crashing', ()=>{
        const div = document.createElement('div')
        ReactDOM.render(<PrimaryHeading text="heading-test"/>, div)
    });

    test('Render title', ()=>{
        render(<PrimaryHeading text="heading-test"/>)
        const element = screen.getByText('heading-test')
        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent('heading-test')
    });

    test('match snapshot',()=>{
        const tree = renderer.create(<PrimaryHeading text="heading-test"/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})