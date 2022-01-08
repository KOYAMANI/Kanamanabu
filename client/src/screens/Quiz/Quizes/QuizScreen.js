
import { Grid,} from "@material-ui/core";
import React, { useState } from "react";
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
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
        // TODO move below to the QuizCard component 
        <Card style={{alignItems: 'center', justifyContent:'center', width:'300px'}}>
            <Card.Body >
                <Card.Title style={{textAlign:'center'}}>
                    <h1>{questions[currentQuestion]?.question}</h1>
                </Card.Title>
                <Grid container spacing={1} justifyContent="flex-center">
                {questions[currentQuestion]?.answers.map(answer=>(
                        <Grid item xs={6} >
                        <Button 
                            style={
                                selected === true?
                                    answer !== questions[currentQuestion]?.correct ?
                                    { backgroundColor: 'red'} :
                                    { backgroundColor: 'green'}
                                : { backgroundColor: 'grey'}
                            } 
                            key={answer} 
                            onClick={ 
                            () => handleAnswerClick(
                                answer, 
                                questions[currentQuestion]?.correct)}>
                            {answer}
                        </Button>  
                        </Grid>
                ))} 
                </Grid>
            </Card.Body>
            {selected ? (
                <Button onClick={handleNext}>Next</Button>
            ): null}
            
        </Card>
        }   
        </MainScreen>
    )
}

export default QuizScreen
