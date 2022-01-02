import React from 'react'
import { 
    Container, 
} from 'react-bootstrap';
import { 
    Main,
    OnboardingTitle,
    IntroText,
    OnboardingContainer,
    OnboardingRow
 } from './OnboardingScreenElements'

const OnboardingScreen = ({title, children}) => {
    return (
        <Main>
        <Container>
            <OnboardingRow>
                <IntroText>
                <OnboardingTitle>{title}</OnboardingTitle>
                    <OnboardingContainer>
                        {children}
                        
                    </OnboardingContainer>
                </IntroText>
            </OnboardingRow> 
        </Container>
    </Main>
       
    )
}

export default OnboardingScreen
