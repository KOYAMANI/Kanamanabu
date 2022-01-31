import { React, useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid,} from "@material-ui/core";
import { Container, Card, Button } from 'react-bootstrap';
import { Link,useLocation, useNavigate } from 'react-router-dom'
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import Loading from "../../../components/Loading/Loading";
import { fetchQuizList, quizIndexIncrement } from "../../../actions/quizActions";
import { updateScore } from "../../../actions/scoreActions";
import {QuizScreenMain, QuizCard, QuizCardTitle, ScoreSection, AnswerButton} from "./QuizScreen.styles";

const QuizScreen = () => {

    const location = useLocation();
    const history = useNavigate();

    const dispatch = useDispatch();

    const { category } = location.state;
    const { subcategory } = location.state;

    const quizList = useSelector(state => state.quizList);
    const { loading, quizzes, error } = quizList;

    const isShowScore = useSelector(state => state.isShowScore);
    const { showScore } = isShowScore;

    const currentScore = useSelector(state => state.currentScore);
    const { score } = currentScore;

    const isAnswerSelected = useSelector(state => state.isAnswerSelected);
    const { answerSelected } = isAnswerSelected;

    const currentQuiz = useSelector(state => state.currentQuiz);
    const { currentQuizIndex } = currentQuiz;

    useEffect(() => {
        dispatch(fetchQuizList(category, subcategory));
        if(!quizzes) history('/quizcategory')
    }, [dispatch, category, subcategory, history])

    const handleAnswerClick = (score, answer, correct) => {
        dispatch(updateScore(score, answer, correct))
    }

    const handleNext = () => {
        dispatch(quizIndexIncrement(currentQuizIndex,quizzes.length))
    }

    console.log(answerSelected)

    return (
        <QuizScreenMain>
            {error
                && <ErrorMessage variant='danger'>
                    {error}
                </ErrorMessage>
            }
            {loading && <Loading/>}

            {showScore ? (
                    <ScoreSection>
                        <p> You scored {score} out of {quizzes.length}</p>
                        <Link to="/quizcategory">Done</Link>
                    </ScoreSection>
                ) :
                // TODO move below to the QuizCard component
                <QuizCard>
                    {quizzes? (
                            <Card.Body>
                                <QuizCardTitle>
                                    {quizzes[currentQuizIndex]?.question}
                                </QuizCardTitle>
                                <Grid container spacing={3} justifyContent="center">
                                    {quizzes[currentQuizIndex]?.answers.map(answer=>(
                                        <Grid item xs={6} md={6} sm={6} justifyContent={"center"}>

                                            <AnswerButton
                                                correct
                                                style={
                                                    answerSelected === true?
                                                        answer !== quizzes[currentQuizIndex]?.correct ?
                                                            { backgroundColor: 'red'} :
                                                            { backgroundColor: 'green'}
                                                        : { backgroundColor: 'black'}
                                                }
                                                disabled = {answerSelected}
                                                key={answer}
                                                onClick={
                                                    () => handleAnswerClick(
                                                        score,
                                                        answer,
                                                        quizzes[currentQuizIndex]?.correct)}>
                                                {answer}
                                            </AnswerButton>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Card.Body>
                        ):
                        <ErrorMessage variant='danger'>
                            something went wrong :(
                        </ErrorMessage>
                    }
                    {answerSelected ? (
                        <button style={{borderRadius: "4px", border:"none", backgroundColor:"#555555", color:"#ffffff",fontSize:"23px"}}
                                onClick={handleNext}>Continue</button>
                    ): null}
                </QuizCard>

            }
        </QuizScreenMain>
    )
}

export default QuizScreen
