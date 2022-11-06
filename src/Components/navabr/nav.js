// for smooth scrolling npm i react-scroll
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import './nav.css' 
import {Link} from 'react-scroll'
import Toggle from "../toggle/toggle";
import Hamburger from "hamburger-react";
//  Hamburger is for three line for mobile
import { themeContext } from "../../Contex";
 import { useContext } from "react";

const Navbar = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  const [main, setmain] = useState(false);
    return (
      <div className="n-wrapper">
        <div className="n-left">
          <div className="n-name">Ashish</div>
          <Toggle />
        </div>
        <div className="n-right">
          <div
            className="hamburger"
            onClick={() => {
              setmain(!main);
            }}
          >
            <Hamburger />
          </div>
          <div className="n-list">
            <ul>
              <Link spy={true} to="Navbar" smooth={true}>
                <li>Home</li>
              </Link>
              <Link spy={true} to="Services" smooth={true}>
                <li>Services</li>
              </Link>
              <Link spy={true} to="Experience" smooth={true}>
                <li>Experience</li>
              </Link>
              <Link spy={true} to="Portfolio" smooth={true}>
                <li>Portfolio</li>
              </Link>
              <Link spy={true} to="Testinomial" smooth={true}>
                <li>Testinomials</li>
              </Link>
              <Link spy={true} to="Contact" smooth={true}>
                <button className="button n-button">Contact</button>
              </Link>
            </ul>
          </div>
        </div>
        <div
          className={main === true ? "m-list" : "q-list"}
          style={{
            background: darkMode ? "black" : "white",
            color: darkMode ? "white" : "black",
          }}
        >
          <ul>
            <Link spy={true} to="Navbar" smooth={true}>
              <li>Home</li>
            </Link>
            <Link spy={true} to="Services" smooth={true}>
              <li>Services</li>
            </Link>
            <Link spy={true} to="Experience" smooth={true}>
              <li>Experience</li>
            </Link>
            <Link spy={true} to="Portfolio" smooth={true}>
              <li>Portfolio</li>
            </Link>
            <Link spy={true} to="Testinomial" smooth={true}>
              <li>Testinomials</li>
            </Link>
            <Link spy={true} to="Contact" smooth={true}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    );
}
export default Navbar;