import { React, useState, useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid,} from "@material-ui/core";
import { Container, Card, Button } from 'react-bootstrap';
import { Link,useLocation,useNavigate } from 'react-router-dom'
import MainScreen from "../../../components/MainScreen/MainScreen";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import Loading from "../../../components/Loading/Loading";
import { fetchQuizList } from "../../../actions/quizActions";

const QuizScreen = () => {

    const location = useLocation();
    const history = useNavigate();

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
        if(nextQuestion < quizes.length){
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }   
    }

    // Redux migration from here
    const dispatch = useDispatch();

    const { category } = location.state;
    const { subcategory } = location.state;

    const quizList = useSelector(state => state.quizList);
    const { loading, quizes, error } = quizList;

    useEffect(() => {
        dispatch(fetchQuizList(category, subcategory));      
        if(!quizes) history('/quizcategory')       
    }, [dispatch, category, subcategory, history])

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
                        <h1>{quizes[currentQuestion]?.question}</h1>
                    </Card.Title>
                    <Grid container spacing={1} justifyContent="flex-center">
                    {quizes[currentQuestion]?.answers.map(answer=>(
                            <Grid item xs={6} >
                            <Button 
                                style={
                                    selected === true?
                                        answer !== quizes[currentQuestion]?.correct ?
                                        { backgroundColor: 'red'} :
                                        { backgroundColor: 'green'}
                                    : { backgroundColor: 'grey'}
                                } 
                                key={answer} 
                                onClick={ 
                                () => handleAnswerClick(
                                    answer, 
                                    quizes[currentQuestion]?.correct)}>
                                {answer}
                            </Button>  
                            </Grid>
                    ))} 
                    </Grid>
                </Card.Body> 
                ): 
                <Card>
                    <Card.Title style={{textAlign:'center'}}>
                        <h1>Something went wrong :(</h1>
                    </Card.Title>
                </Card>
            }
            {selected ? (
                <Button onClick={handleNext}>Next</Button>
            ): null}           
        </Card>
        }           
        </MainScreen>
    )
}

export default QuizScreen
