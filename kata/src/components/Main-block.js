import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import UserCard from './User-card'

const MainBlock = ({user}) => {
    const { name, email, phone, city, state, interactions } = user
    
    return (
        <Container className="main-block">
            <h4 sytle>Passenger info</h4>
            <Row>
                <Col style={{margin: '30px 0px'}}>
                    <UserCard name={name} interactions={interactions} />
                    <h4>Email</h4>
                    <p>{email}</p>
                    <h4>Phone</h4>
                    <p>{phone}</p>
                    <h4>Location</h4>
                    <p>{city}, {state}</p>
                </Col>
                <Col>

                </Col>
            </Row>
            <Row>

            </Row>
        </Container>
    )
}

export default MainBlock;