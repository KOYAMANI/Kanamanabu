import { React, useEffect  } from "react";
import { 
    Row,
    Container,
    Col, 
} from 'react-bootstrap';
import { QuizCategoryMain } from './QuizCategoryScreenElements';
import SideMenu from "../../../SideMenu/SideMenu";
import { useDispatch, useSelector } from "react-redux";


const QuizCategoryScreen = ({children}) => {



    return (
        <QuizCategoryMain>
            <Col>
                <h2>Choose a category and start learning !</h2>
                <Row>
                    <SideMenu/>
                    {children}
                </Row>
            </Col>
        </QuizCategoryMain>
    )
}

export default QuizCategoryScreen

