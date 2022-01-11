import React from 'react';
import { Box } from '@material-ui/core';


const QuizSelectionCard = ({subcategory}) => {

    return (
        <Box
            key={subcategory}
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
                {subcategory}
            </h1>
        </Box>
    )
}

export default QuizSelectionCard
