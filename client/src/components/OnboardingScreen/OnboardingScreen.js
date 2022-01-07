import React from 'react'
import { 
    Container, 
} from 'react-bootstrap';
import { 
    OnboardingMain,
    OnboardingTitle,
    OnboardingIntroText,
    OnboardingContainer,
    OnboardingRow
 } from './OnboardingScreenElements'

const OnboardingScreen = ({title, children}) => {
    return (
        <OnboardingMain>
        <Container>
            <OnboardingRow>
                <OnboardingIntroText>
                <OnboardingTitle>{title}</OnboardingTitle>
                    <OnboardingContainer>
                        {children}
                        
                    </OnboardingContainer>
                </OnboardingIntroText>
            </OnboardingRow> 
        </Container>
    </OnboardingMain>
       
    )
}

export default OnboardingScreen
