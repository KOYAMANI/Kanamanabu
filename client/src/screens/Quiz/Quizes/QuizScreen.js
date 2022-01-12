import { React, useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid,} from "@material-ui/core";
import { Container, Card, Button } from 'react-bootstrap';
import { Link,useLocation,useNavigate } from 'react-router-dom'
import MainScreen from "../../../components/MainScreen/MainScreen";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import Loading from "../../../components/Loading/Loading";
import { fetchQuizList, quizIndexIncrement } from "../../../actions/quizActions";
import { updateScore } from "../../../actions/scoreActions";

const QuizScreen = () => {

    const location = useLocation();
    const history = useNavigate();

    // Redux migration from here
    const dispatch = useDispatch();

    const { category } = location.state;
    const { subcategory } = location.state;

    const quizList = useSelector(state => state.quizList);
    const { loading, quizes, error } = quizList;

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
        if(!quizes) history('/quizcategory')       
    }, [dispatch, category, subcategory, history])

    const handleAnswerClick = (score, answer, correct) => {
        dispatch(updateScore(score, answer, correct))
    }

    const handleNext = () => {
        dispatch(quizIndexIncrement(currentQuizIndex,quizes.length))
    }

    console.log(answerSelected)

    return (
        <MainScreen title={'Quiz screen'}>
        {error 
            && <ErrorMessage variant='danger'>
                {error}
               </ErrorMessage>
            }
        {loading && <Loading/>}
         
        {showScore ? (
            <Container>
                <p> You scored {score} out of {quizes.length}</p>
                <Link to="/quizcategory">Done</Link>
            </Container>           
        ) : 
        // TODO move below to the QuizCard component 
        // <h1>{`Question ${currentQuestion + 1} / ${quizes.length}`}</h1>
                     
        <Card style={{alignItems: 'center', justifyContent:'center', width:'300px'}}>
            {quizes? (
                <Card.Body >
                    <Card.Title style={{textAlign:'center'}}>
                        <h1>{quizes[currentQuizIndex]?.question}</h1>
                    </Card.Title>
                    <Grid container spacing={1} justifyContent="flex-center">
                    {quizes[currentQuizIndex]?.answers.map(answer=>(
                            <Grid item xs={6} >
                            <Button 
                                style={
                                    answerSelected === true?
                                        answer !== quizes[currentQuizIndex]?.correct ?
                                        { backgroundColor: 'red'} :
                                        { backgroundColor: 'green'}
                                    : { backgroundColor: 'grey' }
                                } 
                                disabled = {answerSelected}
                                key={answer} 
                                onClick={ 
                                () => handleAnswerClick(
                                    score,
                                    answer, 
                                    
                                    quizes[currentQuizIndex]?.correct)}>
                                {answer}
                            </Button>  
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
                <Button onClick={handleNext}>Next</Button>
            ): null}           
        </Card>
        }           
        </MainScreen>
    )
}

export default QuizScreen


// const handleNext = () => {
//     setSelected(false);
//     const nextQuestion = currentQuestion + 1;
//     if(nextQuestion < quizes.length){
//         setCurrentQuestion(nextQuestion);
//     } else {
//         setShowScore(true);
//     }
// }

// const handleAnswerClick = (score, answer, correct) => {
//     if(answer === correct){                      
//         setScore(score + 1) 
//     }
//     setSelected(true);
// }

// const[currentQuestion, setCurrentQuestion] = useState(0);
// const[showScore, setShowScore] = useState(false);
// const[score, setScore] = useState(0);
// const[selected, setSelected] = useState(false);