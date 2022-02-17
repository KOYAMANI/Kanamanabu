import { React, useEffect  } from "react";
import { 
    Row,
    Container,
    Col, 
} from 'react-bootstrap';
import { QuizCategoryMain } from './QuizCategoryScreenElements';
import SideMenu from "../../../SideMenu/SideMenu";
import EmptyMenu from "../../../EmptyMenu/EmptyMenu";
import { useDispatch, useSelector } from "react-redux";


const QuizCategoryScreen = ({children}) => {

    const isShowSideMenu = useSelector(state => state.isShowSideMenu);
    const { showSideMenu } = isShowSideMenu;


    return (
        <QuizCategoryMain>
            <Col>
                <h2>Choose a category and start learning !</h2>
                <Row>
                    {showSideMenu?
                        <SideMenu/>
                        :<EmptyMenu/>
                    }

                    {children}
                </Row>
            </Col>
        </QuizCategoryMain>
    )
}

export default QuizCategoryScreen

