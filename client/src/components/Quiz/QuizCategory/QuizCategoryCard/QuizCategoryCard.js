import React from 'react'
import { Box } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'
import { 
    QuizCategoryCardTitle,
    QuizCategoryCardSubTitle, 
    QuizCategoryBox,
    QuizCategoryImage
} from './QuizCategoryCardElements';


const QuizCategoryCard = ({category}) => {
    return (
        <QuizCategoryBox background={Object.values(category.imageUrl)}>
            <Link to='/quizselection'
                    style={{ textDecoration: 'none' }}
                    state={{ title: category.title,
                        category: category.category,
                        subcategory: category.subcategory
                    }}>
                <Col>
                    <QuizCategoryCardTitle>
                        {category.category}
                    </QuizCategoryCardTitle>
                    <QuizCategoryCardSubTitle>
                        {category.title}
                    </QuizCategoryCardSubTitle>
                </Col>
            </Link>
        </QuizCategoryBox>
    )
}

export default QuizCategoryCard
