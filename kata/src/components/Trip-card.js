import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const TripCard = ({ trip }) => {
    
    const { from, to, distance, time, price, energy} = trip

    return (
        <Container>
            <Row className="trip-details">
                <Col lg={6}>
                    <figure style={{backgroundColor: 'rgb(214, 224, 254)'}}></figure>
                    <p className="black-p">{from.name}</p>
                    <p className="grey-p">{from.address}</p>
                </Col>
                <Col lg={6}>
                    <figure style={{backgroundColor: 'rgb(215, 238, 215)'}}></figure>
                    <p className="black-p">{to.name}</p>
                    <p className="grey-p">{to.address}</p>
                </Col>
            </Row>
            <hr style={{margin: '30px 10px'}}/>
            <Row className="trip-details">
                <Col xl={3} lg={6} >
                    <p className="black-p">{distance} km</p>
                    <p className="grey-p">Distance</p>
                </Col>
                <Col xl={3} lg={6}>
                    <p className="black-p">{time} min</p>
                    <p className="grey-p">Time</p>
                </Col>
                <Col xl={3} lg={6}>
                    <p className="black-p">${price}</p>
                    <p className="grey-p">Price</p>
                </Col>
                <Col xl={3} lg={6}>
                    <p className="black-p">{energy} kWh</p>
                    <p className="grey-p">Energy</p>
                </Col>
            </Row>
        </Container>
    )
}

export default TripCard