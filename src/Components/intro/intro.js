// npm i framer-motion for the motion


import React from "react";
import './intro.css'
import FlotingDiv from "../flotingdiv/Flotingdiv";
import Insta from '../../img/Insta.png'
import Git from '../../img/github.png'
import Linkdin from '../../img/Linkdin.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Ashish from '../../img/Ashish.jpeg'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import { themeContext } from "../../Contex";
import { useContext } from "react";
import { motion } from 'framer-motion';
const Intro = () => {
    const trasition = { duretion: 2, type: 'spring' };
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="intro" id="Navbar" >
            <div className="i-left">
                <div className="i-name">
                    <span style={darkMode ? {
                        color : 'white'
                    }: {color: ''}}
                    >Hey! I Am </span>
                    <span>Ashish Patel </span>
                    <span>
                        MERN Stack Developer ,
                        able to work on both Frontend
                        and Backend
                    </span>
                </div>
                <button className="i-button button" onClick={()=>{alert("Hey go to the contact section and contact from there");}}>Hire me</button>
                 <div className="i-icon">
               <a href="https://www.instagram.com/a_s_h_i_s_h_patel_02/?next=%2F"  target=" _blank"> <img src= {Insta} alt="" /> </a>
             <a href="https://www.linkedin.com/in/ashish-patel-3464b7203/"  target=" _blank">  <img src= {Linkdin} alt="" /> </a> 
              <a href="https://github.com/Ashish252-del"  target=" _blank">  <img src= {Git} alt="" /> </a>
            </div>
            </div>
           
            <div className="i-right">
                <img src={Ashish} />
                <motion.div
                    initial={{ top: '-4%', left: '74%' }}
                    whileInView ={{ left: '55%' }}
                    transition = {trasition}
                    style={{ top: '-4%', left: '55%' }}
                className='floting-div'>
                    <FlotingDiv img={crown } txt1='Web' txt2='Developer'/>
                </motion.div>
                <motion.div
                     initial={{ top: '18rem', left: '-50%' }}
                    whileInView ={{ left: '-20%' }}
                    transition = {trasition}
                    style={{ top: '18rem', left: '-20%' }}
                  className='floting-div below'>
                    <FlotingDiv img={thumbup } txt1='MERN' txt2='STACK'/>
                </motion.div>
                <div className="blur" style={{background:'rgb(238 210 255)'}}>
                    
            </div>
                <div className="blur" style={{
                    background: '#CIFSFF',
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                left:'-25%'}}>
                    
            </div>
      </div>
        </div>
    )
}
export default Intro;