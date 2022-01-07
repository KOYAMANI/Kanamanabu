
import styled from 'styled-components';
import { Box } from '@material-ui/core';

export const QuizCategoryBox = styled(Box)`
    margin-right: 20px;
    width: 256px;
    height: 502px;
    background-color: #696969;
    display: flex;
    align-items: flex-end;
    background-image: url(${props => props.background});
    &:hover {
        background-color: #808080;
        opacity: [0.9, 0.8, 0.7];
      }
`

export const QuizCategoryCardTitle = styled.p`
    color: #ffffff;
    font-size: 24px;
    font-weight: bold;
`

export const QuizCategoryCardSubTitle = styled.p`
    color: #ffffff;
    font-size: 18px;
`