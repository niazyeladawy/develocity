import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col md={8} className='offset-md-2'>
                        <h2>Copyright © Develocity  2022 | <a href="#">Contact</a> | <a href="#">Whitepaper</a></h2>
                        <p>Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up.
                            Profits may be subject to capital gains or other taxes applicable in your jurisdiction.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer