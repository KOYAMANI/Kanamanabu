import styled from 'styled-components';
import background from '../../assets/sakura.png'
import { Row, } from 'react-bootstrap';

export const OnboardingMain = styled.div`
    min-height: 93vh;
    display: flex;
    align-items: center;
    background-position: center;
    background-size: cover;
    background-image: url(${background});
`

export const OnboardingIntroText = styled.div`
    width: 100%;
    text-align: center;      
`

export const OnboardingTitle = styled.h1`
    font-size: 45px;
    color: #ff7879;
    @media (max-width: 600px) {
        font-size: 25px;
        display: flex;
        justify-content: center;
      }
`

export const OnboardingRow = styled(Row)`
    background-color: #ffffff;
`

export const OnboardingSubTitle = styled.h1`
    font-size: 25px;
    padding-top: 10px;
`

export const OnboardingContainer = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-evenly;
`