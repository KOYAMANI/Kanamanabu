import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChapterSelection from "../../components/MainScreen/ChapterSelection/ChapterSelection";
import MainScreenLayout from "../../components/MainScreen/Layout/MainScreenLayout";
import { QuizCategoryContainer, QuizCategoryWrapper } from "./MainScreen.styles";
import ErrorMessage from "../../components/Global/ErrorMessage/ErrorMessage";
import Loading from "../../components/Global/Loading/Loading";
import {fetchCategories} from '../../actions/quizActions';
import {updateChapter} from "../../actions/chapterActions";


const MainScreen = () => {
    const dispatch = useDispatch();

    const categoryList = useSelector(state => state.categoryList);
    const  { loading, categories, error} = categoryList;


    const sideMenuUpdate= (title) => {
        dispatch(updateChapter(title));
        console.log(`chapter selected ${title}`)
    }

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch])

    return (
        <MainScreenLayout>
            {error 
            && <ErrorMessage variant='danger'>
                {error}
               </ErrorMessage>
            }
            {loading && <Loading/>}
            <QuizCategoryContainer  >
                {categories?.map(category=>(
                    <QuizCategoryWrapper key={category._id} onClick={
                        () => sideMenuUpdate(category.category)}>
                        <ChapterSelection category={category}/>
                    </QuizCategoryWrapper>
                )) } 
            </QuizCategoryContainer>
        </MainScreenLayout>

    )
}

export default MainScreen
