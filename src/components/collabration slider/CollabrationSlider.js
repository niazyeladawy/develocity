import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Col, Container, Row } from 'react-bootstrap';
import { Navigation, Pagination } from "swiper";
import './collabrationslider.css'
import 'swiper/css/pagination';
import arrowright from '../../assets/arrow-right.svg'

const CollabrationSlider = () => {
    return (
        <div className='collabration-slider'>
            <Container>
                <Row>
                    <Col>
                        <h2>in collaboration with</h2>
                    </Col>
                </Row>


                <div className='swiper-container'>
                    <div className="swiper-button image-swiper-button-next">
                        <img src={arrowright} alt="" />
                    </div>
                    <div className="swiper-button image-swiper-button-prev">
                    <img src={arrowright} alt="" />
                    </div>
                    <Swiper
                        navigation={{
                            nextEl: ".image-swiper-button-next",
                            prevEl: ".image-swiper-button-prev",
                            disabledClass: "swiper-button-disabled"
                        }}
                        loop={true}
                        spaceBetween={50}
                        slidesPerView={3}
                        modules={[Navigation, Pagination]}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2, // or 3
                            },
                            992: {
                                slidesPerView: 3,
                            }
                        }}
                        pagination={{ clickable: true }}


                        className="mySwiper"
                    >
                        <SwiperSlide><div className='slide-inner'><div className='slide-img'></div></div> <h3>Collaboration Title 01</h3></SwiperSlide>
                        <SwiperSlide><div className='slide-inner'><div className='slide-img'></div></div> <h3>Collaboration Title 02</h3></SwiperSlide>
                        <SwiperSlide><div className='slide-inner'><div className='slide-img'></div></div> <h3>Collaboration Title 03</h3></SwiperSlide>
                        <SwiperSlide><div className='slide-inner'><div className='slide-img'></div></div> <h3>Collaboration Title 04</h3></SwiperSlide>
                        <SwiperSlide><div className='slide-inner'><div className='slide-img'></div></div> <h3>Collaboration Title 05</h3></SwiperSlide>
                        <SwiperSlide><div className='slide-inner'><div className='slide-img'></div></div> <h3>Collaboration Title 06</h3></SwiperSlide>
                    </Swiper>
                </div>


            </Container>
        </div>
    )
}

export default CollabrationSlider