import React from 'react';
import { 
    Row,
    Container,
    Col, 
} from 'react-bootstrap';
import { QuizCategoryMain } from './QuizCategoryScreenElements';

const QuizCategoryScreen = ({children}) => {
    return (
        <QuizCategoryMain>
            <Col>
                <h2>Choose a category and start learning !</h2>
                <Container>
                    <Row>
                        <Col>
                            {/* TODO Introduction section here */}
                        </Col>
                        <Col>{children} </Col>
                    </Row>
                </Container>
            </Col>
        </QuizCategoryMain>
    )
}

export default QuizCategoryScreen

