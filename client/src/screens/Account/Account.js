import React, { useState, useEffect } from "react";
import MainScreen from '../../components/MainScreen/MainScreen'
import {  
    useSelector 
} from "react-redux";
import axios from "axios";
import { Badge, Container } from 'react-bootstrap';
import { AccountHeading } from './Account.styles';
import { Card, Col } from 'react-bootstrap'


const Account = () => {
    const[achievements, setAchievements] = useState([]);

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const fetchAchievements = async()=>{
        const { data } = await axios.get('/api/achievements');
        setAchievements(data)
    }

    console.log(achievements)

    useEffect(() => {
        fetchAchievements();
    }, [])


    return (
        <MainScreen title = {`Welcome back ${userInfo.name}`}>
            <Container>
                <AccountHeading>
                    Your achievements...
                </AccountHeading>

                {achievements?.map(achievement=>(                        
                    // TODO move below to the Badge Component
                    // <Badge key= {achievement._id} achievement={achievement}/>
                    <Col xs={12} md={6} lg={4} key={achievement._id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={achievement.imageUrl} />
                            <Card.Body>
                                <Card.Title>{achievement.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                )) } 

                
                 
               
            </Container>
        </MainScreen>
    )
} 

export default Account
