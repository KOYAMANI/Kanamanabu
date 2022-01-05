import React from 'react'
import { Box } from '@material-ui/core'
import { Link } from 'react-router-dom'


const QuizCategoryCard = ({category}) => {
    return (
        <Box
            sx={{
                marginBottom: '15px',
                width:500,
                height: 50,
                bgcolor: '#e5e4e2',
                '&:hover': {
                    backgroundColor: '#c0c0c0',
                    opacity: [0.9, 0.8, 0.7],
                },
            }}
            >
            <h1 style={{ textAlign: 'center', }}>
                <Link to='/quizselection'
                style={{
                    textDecoration: 'none'
                }}
                state={{ 
                    title: category.title,
                    category: category.category,
                    subcategory: category.subcategory
                }}>
                    {category.desc}
                </Link>
            </h1>
        </Box>
    )
}

export default QuizCategoryCard
