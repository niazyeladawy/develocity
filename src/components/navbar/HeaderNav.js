import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/deve logo.svg'
import './headerNav.css'
import { Link as ScrollLink } from 'react-scroll'
import LanguageDropdown from '../language dropdown/LanguageDropdown'


const Headernav = () => {

    const [scrolled, setscrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.pageYOffset;
            if (currentPosition > 0) {
                setscrolled(true);
            } else {
                setscrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <Navbar className={scrolled ? 'scrolled shadow-sm' : ""} expand="lg" fixed='top'>
            <Container>
                <div className='nav-wrapper'>
                    <div className='d-flex justify-content-between'>
                        <Link to='/' className='logo hidden-md' ><img src={logo} /></Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </div>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/' className='logo hidden-xs'><img src={logo} /></Link>
                            <ScrollLink to="about" spy={true} smooth={true} duration={500} >About</ScrollLink>
                            <ScrollLink to="ecosystem" spy={true} offset={-100} smooth={true} duration={500} >Eco-System</ScrollLink>
                            <ScrollLink to="roadmap" spy={true} smooth={true} offset={50} duration={500} >Roadmap</ScrollLink>
                            <ScrollLink to="whitepaper" spy={true} smooth={true} offset={50} duration={500} >Whitepaper</ScrollLink>
                            <ScrollLink to="how-o" spy={true} smooth={true} offset={50} duration={500} >How To</ScrollLink>

                        </Nav>
                        <div className='nav-left'>
                            <a href="#" className='buy-btn'>Buy Deve <i className="fa-solid fa-arrow-right-long ms-2"></i></a>
                            <a href="#" className='claim-btn'>Claim</a>
                            <LanguageDropdown />
                        </div>

                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>


    )
}

export default Headernav