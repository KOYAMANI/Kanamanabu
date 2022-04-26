import {cleanup, render, screen} from '@testing-library/react';
import TextInput from "./TextInput";
import userEvent from "@testing-library/user-event";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

afterEach(cleanup);

describe('TextInput form', () =>{
    test('Render without crashing', ()=>{
        const div = document.createElement('div')
        ReactDOM.render(<TextInput placeholder="email" type="email"/>, div)
    });

    test('render email input', ()=>{
        render(<TextInput placeholder="email" type="email"/>)
        const input = screen.getByPlaceholderText('email')
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("type", "email");
    })

    test('pass email value to the field', ()=>{
        render(<TextInput placeholder="email" type="email"/>)
        const input = screen.getByPlaceholderText('email')
        userEvent.type(input, 'test@mail.com')

        expect(input).toHaveValue("test@mail.com");
    })

    test('render password input', ()=>{
        render(<TextInput placeholder="password" type="password"/>)
        const input = screen.getByPlaceholderText('password')
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("type", "password");
    })

    test('pass password value to the field', ()=>{
        render(<TextInput placeholder="password" type="password"/>)
        const input = screen.getByPlaceholderText('password')
        userEvent.type(input, 'abc12345')

        expect(input).toHaveValue("abc12345");
    });

    test('match snapshot',()=>{
        const tree = renderer.create(<TextInput placeholder="password" type="password"/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})