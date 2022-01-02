
import React, { useState } from "react";
import { Container, Card, Button } from 'react-bootstrap';
import { Link,useLocation } from 'react-router-dom'
import MainScreen from "../../../components/MainScreen/MainScreen";


const QuizScreen = () => {
    const location = useLocation();

    const { questions } = location.state;
    const { length } = location.state;

    const[currentQuestion, setCurrentQuestion] = useState(0);
    const[showScore, setShowScore] = useState(false);
    const[score, setScore] = useState(0);
    const[selected, setSelected] = useState(false);

    const handleAnswerClick = (answer, correct) => {
        if(answer === correct){                      
            setScore(score + 1)   
        }
        setSelected(true);
    }

    const handleNext = () => {
        setSelected(false);
        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }   
    }


    return (
        <MainScreen title={`Question ${currentQuestion + 1} / ${length}`}>
        {showScore ? (
            <Container>
                <p> You scored {score} out of {questions.length}</p>
                <Link to="/quizcategory">Done</Link>
            </Container>           
        ) :
            <Container>          
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>
                        {questions[currentQuestion]?.question}
                    </Card.Title>
                    {questions[currentQuestion]?.answers.map(answer=>(
                        <Button 
                            style={
                                selected === true?
                                    answer !== questions[currentQuestion]?.correct ?
                                    {backgroundColor: 'red'} :
                                    {backgroundColor: 'green'}
                                : {backgroundColor: 'grey'}
                            } 
                            onClick={ 
                            () => handleAnswerClick(
                                answer, 
                                questions[currentQuestion]?.correct)}>
                            {answer}
                        </Button>
                    ))}       
                </Card.Body>
                {selected ? (
                    <Button onClick={handleNext}>Next</Button>
                ): null}
                
            </Card>
            </Container>
        }   
        </MainScreen>
    )
}

export default QuizScreen
