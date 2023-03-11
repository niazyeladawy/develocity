import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ecoImg from '../../assets/eco-system.svg'
import './ecosystem.css'
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';

const EcoSystem = () => {
    return (
        <section id="ecosystem" className='ecosystem'>
            <Container>
                <Row>
                    <Col>
                        <h2 className='text-head'> Eco-system</h2>
                    </Col>
                </Row>
                <Row className='align-items-center'>
                    <Col md={5}>
                        <div className='text-cont'>
                            <h3>Trust, Security & Credibility</h3>
                            <p>Develocity strives to create a safe and trustworthy crypto environment where investors and developers can interact securely, considering the transparent credibility and technical measures and standards. Develocity’s goal is to become a thought leadership organisation, enhancing the community’s awareness and knowledge of the cryptocurrency market by building a virtual academy.  </p>
                            <div className='d-flex justify-content-center'>
                                <a href="#">download whitepaper <HiOutlineArrowNarrowDown /></a>
                            </div>
                        </div>
                    </Col>
                    <Col md={7}>
                        <div className='img-cont'>
                            <img src={ecoImg} alt="eco system" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default EcoSystem