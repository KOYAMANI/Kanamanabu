import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { 
    Divider,
    Heading,
    MainBack,
    Page,
 } from './MainScreenElements'

const MainScreen = ({title, children}) => {
    return (
        <MainBack>
        <Container>
          <Row>
            <Page>
              {title && (
                <>
                  <Heading>{title}</Heading>
                  <Divider />
                </>
              )}
              {children}
            </Page>
          </Row>
        </Container>
      </MainBack>
       
    )
}

export default MainScreen
