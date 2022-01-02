import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'
import MainScreen from '../../../components/MainScreen/MainScreen'

const QuizSelection = () => {
    const location = useLocation();
    const { title } = location.state;
    const { category } = location.state;

    const[questions, setQuestions] = useState([]);

    const fetchQuestions = async()=>{
        const { data } = await axios.get(`/api/questions/${category}`);
        setQuestions(data);
        
    }

    useEffect(() => {
        fetchQuestions();       
    }, [])


    return (
        <MainScreen title = {title}>
            <Container>                
                <Link
                    to='/quiz'
                    state={{ 
                        questions: questions,
                        length: questions.length
                    }}>
                        <Button>Start</Button>
                </Link>
            </Container>
        </MainScreen>
    )
}

export default QuizSelection
