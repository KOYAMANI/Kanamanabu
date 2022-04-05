
import { React, useEffect  } from "react";
import { Container, Col} from 'react-bootstrap';
import { useLocation, Link, useNavigate } from 'react-router-dom'
import PrimalScreen from '../../../components/Global/Layouts/PrimalScreen'
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

    console.log(subcategory)

    return (
        <PrimalScreen title = {title}>
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
        </PrimalScreen>
    )
}

export default QuizSelection
