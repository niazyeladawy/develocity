import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './roadmap.css'
import phase2img from '../../assets/fairlunch.svg'
import phase1img from '../../assets/startup.svg'
import phase3img from '../../assets/expansio.svg'
import phase4img from '../../assets/opportunities.svg'

const RoadMap = () => {
    return (
        <section className='roadmap'>
            <Container>
                <Row>
                    <Col >
                        <h2 className='text-head'>Roadmap</h2>
                    </Col>
                </Row>
                <div className='phases'>
                    <div className='phaase2'>
                        <div className="phase-inner">
                            <span className='phase-badge'>Phase 2</span>
                            <div className='top-square'></div>
                            <div className='bottom-square'></div>
                            <div className='bottom-circle'></div>
                            <div className='half-circle'></div>
                            <h3 className='phase-title'>Fair Launch</h3>
                            <div className='content'>
                                <img src={phase2img} alt="" />
                                <ul >
                                    <li> Publishing SWAP “Beta Version”. </li>
                                    <li>Start Pre-Sale</li>
                                    <li>Teaser Marketing Campaign</li>
                                    <li>Project #2 Introduction</li>
                                    <li>Promoting & Marketing</li>
                                    <li>Join Centralized Exchanges</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='phaase1'><div className="phase-inner">
                        <span className='phase-badge'>Phase 1</span>
                        <div className='top-circle'></div>
                        <div className='bottom-square'></div>
                        <div className='half-circle'></div>
                        <div className='half-left-circle'></div>
                        <h3 className='phase-title'>Startup</h3>
                        <div className='content'>
                            <img src={phase1img} alt="" />
                            <ul >
                                <li> Website launching </li>
                                <li>Project #1 introduction</li>
                                <li> Company name registration</li>
                                <li>License & Legale opinion</li>
                            </ul>
                        </div>
                    </div></div>
                    <div className='phaase3'>
                        <div className="phase-inner">
                            <span className='phase-badge'>Phase 3</span>
                            <div className='top-square'></div>
                            <div className='bottom-square'></div>
                            <div className='half-circle'></div>
                            <div className='half-right-circle'></div>
                            <h3 className='phase-title'>Expansion</h3>
                            <div className='content'>
                                <img src={phase3img} alt="" />

                                <ul >
                                    <li> Publishing SWAP “Beta Version”. </li>
                                    <li>Teaser Marketing Campaign</li>
                                    <li> Project #3 Introduction</li>
                                    <li>Promoting & Marketing</li>
                                    <li >NFT First Edition</li>
                                    <li>Join Centralized Exchanges</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='phaase4'>
                        <div className="phase-inner">
                            <span className='phase-badge'>Phase 4</span>
                            <div className='right-square'></div>
                            <div className='top-circle'></div>
                            <div className='bottom-square'></div>
                            <div className='half-circle'></div>
                            <h3 className='phase-title'>Opportunities</h3>
                            <div className='content'>
                                <img src={phase3img} alt="" />

                                <ul >
                                <li> Publishing SWAP “Beta Version”. </li>
                                    <li>Project #4 Introduction</li>
                                    <li>Teaser Marketing Campaign</li>
                                    <li>Project #2 Introduction</li>
                                    <li>Promoting & Marketing</li>
                                    <li>Looking At The Opportunities</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default RoadMap