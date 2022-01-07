import React from 'react';
import { 
    Container, 
} from 'react-bootstrap';
import { QuizCategoryMain } from './QuizCategoryScreenElements';

const QuizCategoryScreen = ({children}) => {
    return (
        <QuizCategoryMain>
            <Container>
                <div style={{}}>
                {children}
                </div>
               
            </Container>
        </QuizCategoryMain>
    )
}

export default QuizCategoryScreen

