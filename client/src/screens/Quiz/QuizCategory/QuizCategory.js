import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from 'react-bootstrap'
import QuizCategoryCard from "../../../components/Quiz/QuizCategory/QuizCategoryCard/QuizCategoryCard";
import QuizCategoryScreen from "../../../components/Quiz/QuizCategory/QuizCategoryScreen/QuizCategoryScreen";
import { QuizCategoryContainer, QuizCategoryWrapper } from "./QuizCategory.styles";


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
            <QuizCategoryContainer>
                {categories?.map(category=>(  
                    <QuizCategoryWrapper>
                        <QuizCategoryCard category={category} /> 
                    </QuizCategoryWrapper>                
                )) } 
            </QuizCategoryContainer>
        </QuizCategoryScreen>
        
    )
}

export default QuizCategory
