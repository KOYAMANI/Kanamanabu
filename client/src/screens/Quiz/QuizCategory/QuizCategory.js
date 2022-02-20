import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import QuizCategoryCard from "../../../components/Quiz/QuizCategory/QuizCategoryCard/QuizCategoryCard";
import QuizCategoryScreen from "../../../components/Quiz/QuizCategory/QuizCategoryScreen/QuizCategoryScreen";
import { QuizCategoryContainer, QuizCategoryWrapper } from "./QuizCategory.styles";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import Loading from "../../../components/Loading/Loading";
import { fetchCategories } from'../../../actions/quizActions';
import ChapterSelect from "../../../components/MainScreen/ChapterSelect/ChapterSelect";

const QuizCategory = () => {
    const dispatch = useDispatch();

    const categoryList = useSelector(state => state.categoryList);
    const  { loading, categories, error} = categoryList;

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch])

    // console.log(categories);

    return (
        <QuizCategoryScreen>
            {error 
            && <ErrorMessage variant='danger'>
                {error}
               </ErrorMessage>
            }
            {loading && <Loading/>}
            <ChapterSelect />
            <QuizCategoryContainer>
                {categories?.map(category=>(  
                    <QuizCategoryWrapper key={category._id}>               
                        <QuizCategoryCard category={category} /> 
                    </QuizCategoryWrapper>                
                )) } 
            </QuizCategoryContainer>
        </QuizCategoryScreen>
        
    )
}

export default QuizCategory
