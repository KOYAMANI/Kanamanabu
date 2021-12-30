import React from 'react'
import { useLocation } from 'react-router-dom'
import MainScreen from '../../../components/MainScreen/MainScreen'

const QuizSelection = () => {
    const location = useLocation();
    const { title } = location.state;
    return (
        <MainScreen title = {title}>
        </MainScreen>
    )
}

export default QuizSelection
