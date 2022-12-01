// note: - for the swiper effect we have use 
// swiper library
// npm i swiper
import React from "react";
import './portfolio.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import Sidebar from "../../img/sidebar.png"
import Ecommerce from "../../img/ecommerce.png"
import HOC from "../../img/hoc.png"
import MusicApp from "../../img/musicapp.png"
import 'swiper/css'
const Portfolio = () => {
    return (
        <div className="portfolio" id="Portfolio">
            {/* headline */}
            <span>Recent Project</span>
            <span>Portfolio</span>
        
            {/* slider */}
            <Swiper
                // to give space between slide in px
                spaceBetween={30}
                // hot many slider will view at a time
                slidesPerView={3}
                // slider effect on grabbing
                grabCursor={true}
            className='portfolio-slider'>
                <SwiperSlide>
                    <img src={Sidebar } alt =""/> 
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce } alt =""/> 
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HOC } alt =""/> 
                </SwiperSlide>
                <SwiperSlide>
                    <img src={MusicApp } alt =""/> 
                </SwiperSlide>
            </Swiper>
   </div>
    )
}
export default Portfolio;