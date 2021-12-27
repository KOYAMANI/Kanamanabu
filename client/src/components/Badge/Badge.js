import React from 'react';
import { Card, Col } from 'react-bootstrap'



const Badge = ({achievement}) => (


  <Col xs={12} md={6} lg={4} key={achievement._id}>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={achievement.imageUrl} />
        <Card.Body>
            <Card.Title>{achievement.title}</Card.Title>
        </Card.Body>
    </Card>
  </Col>
)

export default Badge;