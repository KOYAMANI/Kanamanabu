import React from 'react';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

const QuizSelectionCard = ({questions, subcategory}) => {
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
                <Link
                    to='/quiz'
                    style={{
                        textDecoration: 'none'
                    }}
                    state={{ 
                        questions: questions.filter((question) => 
                        question.category.sub == subcategory),
                        length: questions.length
                    }}>
                       {subcategory}
                </Link>
            </h1>
        </Box>
    )
}

export default QuizSelectionCard
