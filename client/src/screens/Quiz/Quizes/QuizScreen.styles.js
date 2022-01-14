import styled from 'styled-components';

import { Container, Card, Button } from 'react-bootstrap';
import background from "../../../assets/fuji_bw.png";


export const ScoreSection = styled.div`
  align-items: center;
  justify-content: center;
`
export const QuizScreenMain = styled.div`
    min-height: 93vh;
    display: flex;
    align-items: center;
    background-position: center;
    background-size: cover;
    background-image: url(${background});
    justify-content: center;
`
export const QuizCard = styled(Card)`
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 250px;
    background-color: transparent;
`

export const QuizCardTitle = styled(Card.Title)`
    text-align: center;
`

export const AnswerButton = styled.button`
    border: none;
    ${props => props.isSelected === false && `
    background-color: transparent;
  `}
`

export const Selected = styled.div`
    background-color: rgb(7, 207, 0);
    color: white;
    box-shadow: 0 0 1px black;
`

export const Wrong= styled.div`
    background-color: rgb(233, 0, 0);
    color: white;
    box-shadow: 0 0 1px black;
`;

