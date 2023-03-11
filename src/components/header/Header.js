import React from 'react'
import { Col, Container, ProgressBar, Row } from 'react-bootstrap'
import './header.css'
import headerHero from '../../assets/coin-transparent.webp'
import coinImg from '../../assets/coin-02.png'
import telegramIcon from '../../assets/telegram-icon.svg'
import twitterIcon from '../../assets/twitter-icon.svg'
import discordIcon from '../../assets/discord-icon.svg'

const Header = () => {
    return (
        <section id='about' className='header'>
            <Container>
                <div className='socials'>
                    <ul className='list-unstyled'>
                        <li><a href="#"><img src={telegramIcon} alt="" /></a></li>
                        <li><a href="#"><img src={twitterIcon} alt="" /></a></li>
                        <li><a href="#"><img src={discordIcon} alt="" /></a></li>
                    </ul>
                </div>
                <Row>
                    <Col lg={6} >
                        <div className='header-content'>
                            <h1>Last Presale Phase!
                                10% Of Tokens Remaining!</h1>
                            <p>DeVelocity aspires to present its final project in five primary stages. Each stage is delivered separately and merged in the post-final stage to create a decentralised platform, which would be distinctively in terms of technology and development based on Web 3.0.</p>
                            <div className='earnings'>
                                <div className='progress-wrapper'>
                                    <ProgressBar now={85} />

                                </div>
                                <span>USDT Raised: $17,896,858.60 / $19,000,000.00</span>
                            </div>
                            <div className='d-flex justify-content-center'>                            <a href="" className='buy-now'>BUY NOW </a>
                            </div>
                            <h2 className='raised-amount'>USDT Raised : $18,106,250.29</h2>
                            <div className='btns'>
                                <a href="" className='btn btn-bordered'>how to buy</a>
                                <a href="" className='btn btn-bordered'>new yo crypto?</a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} >
                        <div className='img-cont'>
                            <img src={headerHero} alt="" />
                        </div>
                    </Col>
                </Row>
                <div className='header-sponsors'>
                    <Row>
                        <Col md={4}>
                            <div className='single-sponsor'>
                                <img src={coinImg} alt="" />
                                <h3>CEX Listings confirmed
                                    after presale</h3>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='single-sponsor'>
                                <img src={coinImg} alt="" />
                                <h3>DEFI & Metaverse partnerships
                                    to be announced</h3>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='single-sponsor'>
                                <img src={coinImg} alt="" />
                                <h3>Featured in the largest
                                    global publications</h3>
                            </div>
                        </Col>
                    </Row>
                </div>

            </Container>
        </section>
    )
}

export default Header