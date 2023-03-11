import React from 'react'
import { Col, Row } from 'react-bootstrap'
import sponsor1 from '../../assets/sponsor1.svg'
import sponsor2 from '../../assets/sponsor2.svg'
import sponsor3 from '../../assets/sponsor3.svg'
import './exchanges.css'

const Exchanges = () => {
    return (
        <section className='exchanges'>
            <div className='container'>
                <Row>
                    <Col>
                        <h2 className='head-text'>Exchanges</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <div className='exchange-item'>
                            <img src={sponsor1} alt="" />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='exchange-item'>
                            <img src={sponsor2} alt="" />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='exchange-item'>
                            <img src={sponsor3} alt="" />
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Exchanges