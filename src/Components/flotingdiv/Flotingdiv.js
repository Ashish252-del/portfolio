import React from "react";
import './flotingdiv.css'
import { themeContext } from "../../Contex";
import { useContext } from "react";
const FlotingDiv = ({ img, txt1, txt2 }) => {
     const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="flotingdiv"
        >
            <img src={img} alt="" />
            <span
            style={darkMode ? {
                        color : 'black'
                    }: {color: ''}}>
                { txt1}<br/>
               {txt2}
            </span>
        </div>
    )
}
export default FlotingDiv;