import React from "react";
import { 
    Row,
    Col, 
} from 'react-bootstrap';
import { QuizCategoryMain } from './QuizCategoryScreenElements';
import ChapterSelection from "../../../ChapterSelection/ChapterSelection";


const QuizCategoryScreen = ({children}) => {
    return (
        <QuizCategoryMain>
            <Col>
                <h2>Choose a category and start learning !</h2>
                <Row>
                    <ChapterSelection/>
                    {children}
                </Row>
            </Col>
        </QuizCategoryMain>
    )
}

export default QuizCategoryScreen

