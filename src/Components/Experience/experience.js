import React from "react";
import './experience.css'
import { themeContext } from "../../Contex";
import { useContext } from "react";
const Experience = () => {
     const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    let a = "circle"
    darkMode?  a = "circle circle2" : a="circle"
    return (
        <div className="experience" id="Experience">
            <div className="achievement">
                <div
                    className={a}>1+</div>
                <span>Years</span>
                <span>Experience</span>
            </div> 
            <div className="achievement">
                <div className={a}>8+</div>
                <span>Completed</span>
                <span>Project</span>
            </div> 
            <div className="achievement">
                <div className={a}>0</div>
                <span>Companies</span>
               <span>Work</span>
            </div> 
      </div>  
    )
}
export default Experience;