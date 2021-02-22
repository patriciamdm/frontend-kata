import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import UserCard from './User-card'
import TripCard from './Trip-card'
import SwitchBtn from './Switch-btn'

const MainBlock = ({ user, trip }) => {
    
    const [showInfo, setShowInfo] = useState(true)

    const { name, email, phone, city, state, interactions, payment, img } = user

    const buttonColor = (value) => payment === value ? "btn-selected" : null

    return (
        <Container className="main-block">
            <section style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <h4 style={{margin: '0px'}}>Passenger info</h4>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p className="black-p" style={{marginRight: '30px'}}>Hide information</p>
                    <SwitchBtn showInfo={showInfo} setShowInfo={setShowInfo} />
                </div>
            </section>
            {
                showInfo === true
                &&
                <Row>
                    <Col lg={5} style={{margin: '25px 0px'}}>
                        <UserCard name={name} interactions={interactions} img={img} />
                        <h4>Email</h4>
                        <p>{email}</p>
                        <h4>Phone</h4>
                        <p>{phone}</p>
                        <h4>Location</h4>
                        <p>{city}, {state}</p>
                    </Col>
                    <Col lg={7} style={{margin: '25px 0px'}}>
                        <Row>
                            <Col xl={6}><button className={buttonColor('paypal')}>PayPal</button></Col>
                            <Col xl={6}><button className={buttonColor('visa')}>Visa</button></Col>
                            <Col xl={6}><button className={buttonColor('mastercard')}>MasterCard</button></Col>
                            <Col xl={6}><button className={buttonColor('applepay')}>ApplePay</button></Col>
                        </Row>
                    </Col>
                </Row>
            }
            
            <Row>
                <Col style={{margin: '25px 0px'}}>
                    <TripCard trip={trip}/>
                </Col>
            </Row>
        </Container>
    )
}

export default MainBlock;