import styled from 'styled-components';

export const Main = styled.div`
    min-height: 93vh;
    display: flex;
    align-items: center;
    background-position: center;
    background-size: cover;
`

export const IntroText = styled.div`
    width: 100%;
    text-align: center;      
`

export const LandingTitle = styled.h1`
    font-size: 95px;
    @media (max-width: 600px) {
        font-size: 70px;
        display: flex;
        justify-content: center;
      }
`

export const LandingSubTitle = styled.h1`
    font-size: 25px;
    padding-top: 10px;
`

export const ButtonContainer = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-evenly;
`