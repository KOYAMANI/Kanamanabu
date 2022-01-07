import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Col} from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
import MainScreen from '../../../components/MainScreen/MainScreen'
import QuizSelectionCard from "../../../components/Quiz/QuizSelection/QuizSelectionCard";

const QuizSelection = () => {
    const location = useLocation();
    const { title } = location.state;
    const { category } = location.state;
    const { subcategory } = location.state;

    const[questions, setQuestions] = useState([]);

    const fetchQuestions = async()=>{
        const { data } = await axios.get(`/api/questions/${category}`);
        setQuestions(data); 
    }

    useEffect(() => {
        fetchQuestions();       
    }, []);

    return (
        <MainScreen title = {title}>
            <Container>
            <Col>
                {subcategory?.map(subcategory=>(                        
                    <QuizSelectionCard 
                        subcategory={subcategory} 
                        questions={questions}
                    />
                )) }      
            </Col>         
            </Container>
        </MainScreen>
    )
}

export default QuizSelection
