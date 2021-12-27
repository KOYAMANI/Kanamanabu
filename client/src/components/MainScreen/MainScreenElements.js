
import styled from 'styled-components';

export const MainBack = styled.div`
    min-height: 93vh;
    display: flex;
    padding: 10px 0;
`
export const Divider = styled.hr`
`

export const Page = styled.div`
    width: 100%;
`

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