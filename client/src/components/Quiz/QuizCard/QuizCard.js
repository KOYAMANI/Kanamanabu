import { Grid } from '@material-ui/core'
import React, { useState } from "react";
import { Button, Card, Col } from 'react-bootstrap'

const QuizCard = ({questions,}) => {

    const[currentQuestion, setCurrentQuestion] = useState(0);
    const[showScore, setShowScore] = useState(false);
    const[score, setScore] = useState(0);
    const[selected, setSelected] = useState(false);

    const handleAnswerClick = (answer, correct) => {
        if(answer === correct){                      
            // setScore(score + 1)   
        }
        setSelected(true);
    }

    const handleNext = () => {
        setSelected(false);
        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        } else {
            // setShowScore(true);
        }   
    }

    return (
        <Col>
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
                                        answer !== questions[currentQuestion].correct ?
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
            </Card>
            {selected ? (
                    <Button onClick={handleNext}>Next</Button>
                ): null}
        </Col>
    )
}

export default QuizCard
