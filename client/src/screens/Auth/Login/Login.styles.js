import styled from 'styled-components';

export const Heading = styled.div`
    font-size: 45px;
    /* font-family: "Ubuntu", sans-serif; */
    font-family: "Work Sans", sans-serif;
    padding: 5px 10px;
    @media (max-width: 600px) {
        font-size: 30px;
        display: flex;
        justify-content: center;
      }
`

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px; 
    align-items: center;
    background-position: center;
    background-size: cover;
    background-image: url("../../assets/background.png");
`

export const Main = styled.div`
    min-height: 93vh;
    display: flex;
    align-items: center;
    background-position: center;
    background-size: cover;
    background-image: url("../../assets/background.png");
`