import React, { useEffect } from "react";
import PrimalScreen from '../../components/Global/Layouts/PrimalScreen'
import {
    useDispatch,
    useSelector
} from "react-redux";
import { Container } from 'react-bootstrap';
import { AccountHeading } from './Account.styles';
import { Col } from 'react-bootstrap'
import {listAchievements} from "../../actions/achievementAction";


const Account = () => {
    const dispatch = useDispatch();

    const achievementList = useSelector(state => state.achievementList);
    const { achievements } = achievementList;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    console.log(achievements)

    useEffect(() => {
        dispatch(listAchievements());
    }, [dispatch])

    return (
        <main>
        <PrimalScreen title = {`Welcome back ${userInfo.name}`}>
            <Container>
                <AccountHeading>
                    Your achievements...
                </AccountHeading>
                {achievements?.map(achievement=>(                        
                    // TODO move below to the Badge Component
                    // <Badge key= {achievement._id} achievement={achievement}/>
                    <Col xs={12} md={6} lg={4} key={achievement._id}>
                        <h1>{achievement.title}</h1>
                    </Col>
                )) } 
           </Container>
        </PrimalScreen>
        </main>
    )
} 

export default Account
