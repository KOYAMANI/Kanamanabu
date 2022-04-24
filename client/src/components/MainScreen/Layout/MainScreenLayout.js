import React from "react";
import { 
    Row,
    Col, 
} from 'react-bootstrap';
import { MainScreenDiv } from './MainScreenLayoutElements';
import ChapterSideMenu from "../ChapterSideMenu/ChapterSideMenu";


const MainScreenLayout = ({children}) => {
    return (
        <MainScreenDiv>
            <Col>
                {/*<h1>Choose a category and start learning !</h1>*/}
                <Row>
                    <ChapterSideMenu/>
                    {children}
                </Row>
            </Col>
        </MainScreenDiv>
    )
}

export default MainScreenLayout

