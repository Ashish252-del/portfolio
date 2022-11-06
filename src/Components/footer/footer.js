//npm install --save @iconscout/react-unicons for beautiful icons

import React from 'react';
import { useState } from 'react';
import './footer.css'
import { MailIcon } from "react-mail-icon";
import Wave from '../../img/wave.png'
import { height } from '@mui/system';
const mailIconStyle = {
    display: 'flex',
    height: "6rem",
    
}  
 
const Footer = () => {
    const [shouldAnimate, setAnimation] = useState(false);
    return (
      <div className="footer">
        <img src={Wave} alt="" style={{ width: "100%" }} />
        <div className="f-content">
          <MailIcon
            style={mailIconStyle}
            mailBackFoldColor="#2874A6"
            mailTopFoldColor="#2E86C1"
            mailLeftFoldColor="#3498DB"
            mailRightFoldColor="#5DADE2"
            letterBackgroundColor="#FFFFFF"
            letterBorderColor="#1ABC9C"
            letterTextColor="#1ABC9C"
            shouldAnimateOpen={shouldAnimate}
            shouldAnimateDown={shouldAnimate}
            shouldAnimateOnHover
          />
          <span style={{ color: "black" }}>
            <b>ashishpatel3946@gmail.com</b>
          </span>
        </div>
      </div>
    );
}
export default Footer;