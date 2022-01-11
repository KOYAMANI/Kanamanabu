
import { React, useState, useEffect  } from "react";
import { Container, Col} from 'react-bootstrap';
import { useLocation, Link, useNavigate } from 'react-router-dom'
import MainScreen from '../../../components/MainScreen/MainScreen'
import QuizSelectionCard from "../../../components/Quiz/QuizSelection/QuizSelectionCard";

const QuizSelection = () => {
    const location = useLocation();
    const history = useNavigate();
    const { title } = location.state;
    const { category } = location.state;
    const { subcategory } = location.state;

    useEffect(() => {
        if( title === null || category === null || subcategory === null) 
            history('/quizcategory')       
    }, [title, category, subcategory, history])

    return (
        <MainScreen title = {title}>
            <Container>
            <Col>
                {subcategory?.map(subcategory=>(  
                    <Link
                    key={subcategory}
                    to='/quiz'
                    style={{
                        textDecoration: 'none'
                    }}
                    state={{ 
                        category: category,
                        subcategory: subcategory
                    }}>
                        <QuizSelectionCard
                            key={subcategory}
                            subcategory={subcategory} 
                        />
                    </Link>  
                )) }      
            </Col>         
            </Container>
        </MainScreen>
    )
}

export default QuizSelection
