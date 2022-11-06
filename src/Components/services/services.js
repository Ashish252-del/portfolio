import React from "react";
import './services.css'
import resume from './resume.pdf'
import Card from "../card/card";
import rec from "../../img/rec.png"
import mongo from "../../img/Mongo.jpg"
import expr from "../../img/express.png"
import nod from "../../img/node.png"
import { themeContext } from "../../Contex";
import { useContext } from "react";
const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="services" id="Services">
            {/* left side */}
            <div className="awesome">
                <span  style={darkMode ? {
                        color : 'white'
                    }: {color: ''}}
                >My Awesome</span>
                <span>Services</span>
                <span>
                    I can make full responsive website.
                     <br/>
                    I have knowledge about boostrap and various libraries of java-script
                </span>
                <a href={resume} download>
                     <button className="button s-button">Download CV</button>
                    </a>
               
                <div className="blur s-blur" style={{background:"#ABF1FF94"}}></div>
            </div>
            {/* right side */}
            <div className="cards">
                {/* first card */}
                <div style={{ left:'14rem'}}>
                    <Card
                        pic={mongo}
                        headline={"Detabase"}
                   detail={"Mongodb-alas, Mondodb-Compass"} />
                </div>
                {/* second card */}
                 <div style={{ left:'-2rem', top:'9rem'}}>
                    <Card
                        pic={expr}
                        headline={"Backend"}
                   detail={"Express js , Api-reques , Server"} />
                </div>
                {/* third card */}
                <div style={{ left:'15rem', top:'19rem'}}>
                    <Card
                        pic={rec}
                        headline={"Frontend"}
                   detail={"React-js, Boostrap, Html, Css"} />
                </div>
                {/* fourth card */}
                <div style={{ left:'31rem', top:'9rem'}}>
                    <Card
                        pic={nod}
                        headline={"Backend"}
                   detail={"Node js,Server,Node-package-manager"} />
                </div>
            <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
            </div>
        </div>
    )
}
export default Services;