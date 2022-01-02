import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'
import MainScreen from '../../../components/MainScreen/MainScreen'

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
            {subcategory?.map(i=>(                        
                <Link
                    to='/quiz'
                    state={{ 
                        questions: questions.filter((question) => 
                        question.category.sub == i),
                        length: questions.length
                    }}>
                        <Button>{i}</Button>
                </Link>
            )) }               
            </Container>
        </MainScreen>
    )
}

export default QuizSelection
