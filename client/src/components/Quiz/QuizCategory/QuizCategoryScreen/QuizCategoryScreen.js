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
            <Container>
                <Row>
                    <Col>
                    {/* TODO Introduction section here */}
                    {/* <Container style={{display:'flex', backgroundColor:'red'}}>
                    </Container> */}
                    </Col>
                    <Col>{children} </Col>             
                </Row>
            </Container>
        </QuizCategoryMain>
    )
}

export default QuizCategoryScreen

