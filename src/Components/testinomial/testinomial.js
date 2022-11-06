import React from "react";
import './testinomial.css'
import { Swiper, SwiperSlide } from "swiper/react";
import java from "../../img/java.png"
import c from "../../img/c.png"
import webd from "../../img/webd.jpg"
import graphic from "../../img/graphic.jpg"
import { Pagination } from "swiper"
import 'swiper/css/pagination'
import 'swiper/css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const Testinomial = () => {
    const cert = [
        {
            img: java,
            details:
                "I have got the certificate of Participation in java-programming language",
            link: "https://drive.google.com/file/d/1ZPdablzdODFZrMgUe5SKuTVQnHk5mwRt/view?usp=drivesdk"
        },
        // {
        //     img: c,
        //     details:
        //         "I have got the certificate of Participation in java-programming language",
        //     link: "kk"
        // },
        {
            img: webd,
            details:
                "I have got the certificate of Participation in webdevelopement",
            link: "https://drive.google.com/file/d/1eFqPsd8gFR8GFtJBifc3eF457df64c8K/view?usp=drivesdk"
        },
        {
            img: graphic,
            details:
                "I have got the letter of completion of graphic designing Intern",
            link: "https://drive.google.com/file/d/1cMK9eDjomwK0vyYGxgKNO1gn8xPY4XDM/view?usp=drivesdk"
        }
    ]
    return (
       
        <div className="t-wrapper" id="Testinomial">
            
            <div className="t-heading">
                <span>Certificates</span>
                <span> that I have Acheaved</span>
                <div className="blur t-blurl" style={{
                    background: "var(--purple)"
                }}></div>
                <div className="blur t-blur2" style={{
                    background: "skyblue"
                }}></div>

            </div>
            {/* slider */}
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}>
                {
                    cert.map((certificate, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="testinomial">
                                    <img src={certificate.img} alt="" />
                                    <span>{certificate.details}</span>
                                  <a href={certificate.link} target = " _blank" style={{textDecoration:'none'}}>  <Button >Click</Button></a>
                                </div>
                                   
                                    
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
        </div>
       
    );
};
export default Testinomial;