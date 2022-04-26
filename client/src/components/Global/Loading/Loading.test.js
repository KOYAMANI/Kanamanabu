import {cleanup} from '@testing-library/react';
import ReactDOM from "react-dom";
import renderer from 'react-test-renderer';
import Loading from "./Loading";

afterEach(cleanup);

describe('Achievement badge', () =>{

    test('Render without crashing', ()=>{
        const div = document.createElement('div')
        ReactDOM.render(<Loading/>, div)
    });

    test('match snapshot',()=>{
        const tree = renderer.create(<Loading/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})