import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import QuizCategoryCard from "../../../components/Quiz/QuizCategory/QuizCategoryCard/QuizCategoryCard";
import QuizCategoryScreen from "../../../components/Quiz/QuizCategory/QuizCategoryScreen/QuizCategoryScreen";
import { QuizCategoryContainer, QuizCategoryWrapper } from "./QuizCategory.styles";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import Loading from "../../../components/Loading/Loading";
import {fetchCategories} from '../../../actions/quizActions';
import {updateSideMenu} from "../../../actions/sideMenuActions";


const QuizCategory = () => {
    const dispatch = useDispatch();

    const categoryList = useSelector(state => state.categoryList);
    const  { loading, categories, error} = categoryList;


    const handleMouseEnter= (selection) => {
        dispatch(updateSideMenu(selection));
    }

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch])

    return (
        <QuizCategoryScreen>
            {error 
            && <ErrorMessage variant='danger'>
                {error}
               </ErrorMessage>
            }
            {loading && <Loading/>}
            <QuizCategoryContainer  >
                {categories?.map(category=>(  
                    <QuizCategoryWrapper key={category._id} onMouseOver={handleMouseEnter(category.category)}>
                        <QuizCategoryCard category={category} /> 
                    </QuizCategoryWrapper>                
                )) } 
            </QuizCategoryContainer>
        </QuizCategoryScreen>
        
    )
}

export default QuizCategory
