import React, { useEffect } from "react";
import MainScreen from '../../components/MainScreen/MainScreen'
import {
    useDispatch,
    useSelector
} from "react-redux";
import { Container } from 'react-bootstrap';
import { AccountHeading } from './Account.styles';
import { Card, Col } from 'react-bootstrap'
import {listAchievements} from "../../actions/achievementAction";


const Account = () => {
    const dispatch = useDispatch();

    const achievementList = useSelector(state => state.achievementList);
    const { loading, achievements, error} = achievementList;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    console.log(achievements)

    useEffect(() => {
        dispatch(listAchievements());
    }, [dispatch])


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
                        <h1>{achievement.title}</h1>
                        {/*<Card style={{ width: '18rem' }}>*/}
                        {/*    <Card.Img variant="top" src={achievement.imageUrl} />*/}
                        {/*    <Card.Body>*/}
                        {/*        <Card.Title>{achievement.title}</Card.Title>*/}
                        {/*    </Card.Body>*/}
                        {/*</Card>*/}
                    </Col>
                )) } 


            </Container>
        </MainScreen>
    )
} 

export default Account
