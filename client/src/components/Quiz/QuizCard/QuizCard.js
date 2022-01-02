import React from 'react'
import { Button, Card } from 'react-bootstrap'

const QuizCard = ({question}) => {
    return (
        <Card style={{ width: '18rem' }} key={question._id}>
        <Card.Body>
            <Card.Title>{question.question}</Card.Title>       
            {question.answers?.map(answer=>(
                <Button>{answer}</Button>
            ))}       
        </Card.Body>
        </Card>
    )
}

export default QuizCard
