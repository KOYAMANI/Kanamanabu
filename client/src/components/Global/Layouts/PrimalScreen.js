import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { 
    Divider,
    Heading,
    PrimalBackground,
    Page,
 } from './PrimalScreenElements'

const PrimalScreen = ({title, children}) => {
    return (
        <PrimalBackground>
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
      </PrimalBackground>
       
    )
}

export default PrimalScreen
