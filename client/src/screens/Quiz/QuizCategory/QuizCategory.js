import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MainScreen from '../../../components/MainScreen/MainScreen'
import { Box } from '@material-ui/core'
import QuizCategoryCard from "../../../components/Quiz/QuizCategory/QuizCategoryCard/QuizCategoryCard";
import QuizCategoryScreen from "../../../components/Quiz/QuizCategory/QuizCategoryScreen/QuizCategoryScreen";


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
        <QuizCategoryScreen>
            <Row>
                {categories?.map(category=>(      
                    <QuizCategoryCard category={category} />                  
                )) } 
            </Row>
        </QuizCategoryScreen>
        
    )
}

export default QuizCategory
