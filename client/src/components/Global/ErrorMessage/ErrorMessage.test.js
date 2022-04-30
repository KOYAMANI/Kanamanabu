import {render, screen, cleanup} from '@testing-library/react';
import ReactDOM from "react-dom";
import renderer from 'react-test-renderer'
import ErrorMessage from "./ErrorMessage";

afterEach(cleanup)

describe('ErrorMessage', () =>{
    test('Render without crashing', ()=>{
        const div = document.createElement('div')
        ReactDOM.render(<ErrorMessage>test</ErrorMessage>, div)
    });

    test('Render text', ()=>{
        render(<ErrorMessage variant="info">error-message-test</ErrorMessage>)
        const element = screen.getByText('error-message-test')
        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent('error-message-test')
    })

    test('match snapshot',()=>{
        const tree = renderer.create(<ErrorMessage>test</ErrorMessage>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})