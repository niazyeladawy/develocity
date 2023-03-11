import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Behzinga from '../../assets/Behzinga.png'
import Bloomberg from '../../assets/Bloomberg-Logo-1.png'
import khaleej from '../../assets/logo_0000_khaleej-times.png'
import coinspeaker from '../../assets/coinspeaker-logo.png'
import YahooFinance from '../../assets/YahooFinance.png'
import './featured.css'

const Featured = () => {
    return (
        <section id='featured' className='featured'  >
            <Container>
                <Row>
                    <Col><h2>Featured in</h2></Col>
                </Row>
                <div className='featured-cont'>
                    <div className='img-wrapper'>
                        <img src={Behzinga} alt="" />
                    </div>
                    <div className='img-wrapper'>
                        <img src={Bloomberg} alt="" />
                    </div>
                    <div className='img-wrapper'>
                        <img src={khaleej} alt="" />
                    </div>
                    <div className='img-wrapper'>
                        <img src={coinspeaker} alt="" />
                    </div>
                    <div className='img-wrapper'>
                        <img src={YahooFinance} alt="" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Featured