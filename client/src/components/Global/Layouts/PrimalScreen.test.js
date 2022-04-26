import {render, screen, cleanup} from '@testing-library/react';
import ReactDOM from "react-dom";
import renderer from 'react-test-renderer'
import PrimalScreen from "./PrimalScreen";

afterEach(cleanup)

describe('ErrorMessage', () =>{
    test('Render without crashing', ()=>{
        const div = document.createElement('div')
        ReactDOM.render(<PrimalScreen title="primal-screen-test" >primal-screen-children</PrimalScreen>, div)
    });

    test('Render text', ()=>{
        render(<PrimalScreen title="primal-screen-test" >primal-screen-children</PrimalScreen>)
        const element = screen.getByText('primal-screen-test')
        const children = screen.getByText('primal-screen-children')
        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent('primal-screen-test')
        expect(children).toHaveTextContent('primal-screen-children')
    })

    test('match snapshot',()=>{
        const tree = renderer.create(<PrimalScreen title="primal-screen-test" >primal-screen-children</PrimalScreen>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})