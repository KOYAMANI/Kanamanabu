
import styled from 'styled-components';
import { Box } from '@material-ui/core';

export const ChapterSelectionBox = styled(Box)`
    margin-right: 10px;
    width: 256px;
    height: 450px;
    background-color: #696969;
    display: flex;
    align-items: flex-end;
    background-image: url(${props => props.background}) ;
    background-size: cover;
    &:hover {
        border :4px solid #fff;
        background-color: #808080;
      }
    @media (max-width: 1200px) {
    width: 170px;  
    height: 350px;
    }
`

export const ChapterSelectionTitle = styled.p`
    color: #ffffff;
    font-size: 24px;
    font-weight: bold;
  @media (max-width: 800px) {
    font-size: 20px;
  }
`

export const ChapterSelectionSubTitle = styled.p`
    color: #ffffff;
    font-size: 18px;
  @media (max-width: 800px) {
    font-size: 14px;
  }
`