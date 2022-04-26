import {render, screen, cleanup} from '@testing-library/react';
import ReactDOM from "react-dom";
import renderer from 'react-test-renderer';
import Footer from "./Footer";

afterEach(cleanup);

describe('Footer', () =>{

    test('Render without crashing', ()=>{
        const div = document.createElement('div')
        ReactDOM.render(<Footer/>, div)
    });

    test('Render text', ()=>{
        render(<Footer/>)
        const element = screen.getByText('Copyright © Kanamanabu')
        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent('Copyright © Kanamanabu')
    });

    test('match snapshot',()=>{
        const tree = renderer.create(<Footer/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
})