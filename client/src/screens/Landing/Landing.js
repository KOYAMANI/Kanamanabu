import React, {useEffect } from "react"
import { 
    Container, 
    Row, 
    Button, 
} from 'react-bootstrap';
import { Link, useNavigate,} from "react-router-dom";
import { 
    Main,
    LandingTitle,
    LandingSubTitle,
    IntroText,
    ButtonContainer
 } from './Landing.styles.js'

const Landing = () => {

    const history = useNavigate();

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo')
          if (userInfo) {
           history('/contents');
          }
      }, [history]);
      
    return (
        <Main>
            <Container>
                <Row>
                    <IntroText>
                    <LandingTitle>Title</LandingTitle>
                    <LandingSubTitle>Subtitle</LandingSubTitle>
                        <ButtonContainer>
                            <Link to = '/login'>
                                <Button size='lg'>Login</Button>
                            </Link>
                            <Link to = '/register'>
                                <Button size='lg' variant='outline-primary'>
                                    Signup
                                </Button>
                            </Link>
                            
                        </ButtonContainer>
                    </IntroText>
                </Row> 
            </Container>
        </Main>
    )
}

export default Landing
