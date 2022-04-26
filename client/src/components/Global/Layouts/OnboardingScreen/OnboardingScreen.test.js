import {render, screen, cleanup} from '@testing-library/react';
import ReactDOM from "react-dom";
import renderer from 'react-test-renderer'
import OnboardingScreen from "./OnboardingScreen";

afterEach(cleanup)

describe('ErrorMessage', () =>{
    test('Render without crashing', ()=>{
        const div = document.createElement('div')
        ReactDOM.render(<OnboardingScreen title="onboarding-test" >onboarding-child</OnboardingScreen>, div)
    });

    test('Render text', ()=>{
        render(<OnboardingScreen title="onboarding-test" >onboarding-child</OnboardingScreen>)
        const element = screen.getByText('onboarding-test')
        const child = screen.getByText('onboarding-child')
        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent('onboarding-test')
        expect(child).toHaveTextContent('onboarding-child')
    })

    test('match snapshot',()=>{
        const tree = renderer.create(<OnboardingScreen title="onboarding-test" >onboarding-child</OnboardingScreen>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})