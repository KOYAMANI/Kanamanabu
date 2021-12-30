import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MainScreen from '../../../components/MainScreen/MainScreen'

const QuizCategory = () => {
    const[categories, setCategories] = useState([]);

    const fetchCategories = async()=>{
        const { data } = await axios.get('/api/categories');
        setCategories(data)
    }

    useEffect(() => {
        fetchCategories();
    }, [])


    return (
        <MainScreen title = "Quiz Category">
            <Container>
                {categories?.map(category=>(                        
                        <Col>
                        <Link
                            to='/quizselection'
                            state={{ title: category.title }}>
                            {category.desc}
                        </Link>
                    </Col>
                )) } 
            </Container>
        </MainScreen>
        
    )
}

export default QuizCategory
