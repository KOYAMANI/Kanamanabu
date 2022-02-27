import styled from 'styled-components';
import { Container} from 'react-bootstrap'


export const QuizCategoryContainer = styled(Container)`
    
    width: 750px;
    overflow-x: scroll;
    display: inline-block;
    inline: none;
    white-space: nowrap;
    @media (max-width: 1200px) {
      width: 600px;
    }
    @media (max-width: 1000px) {
      width: 400px;
    }
  @media (max-width: 800px) {
    width: 200px;
  }
`;

export const QuizCategoryWrapper = styled.div`
    display: inline-block;
    float: none;
`;
