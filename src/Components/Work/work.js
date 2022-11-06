import React from "react";
import './work.css'
 import gfg from '../../img/gfg.png'
 import leetcode from '../../img/leetcode.png'
 import hackerrank from '../../img/hackerrank.jpg'
 import codechef from '../../img/codechef.jpg'
import codeforces from '../../img/codeforces.png'
 import { themeContext } from "../../Contex";
import { useContext } from "react";
import { motion } from 'framer-motion';
const Work = () => {

     const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="work">
            {/* Left side */}
          <div className="awesome">
                <span
                style={darkMode ? {
                        color : 'white'
                    }: {color: ''}}>Platform Where</span>
                <span>I Code</span>
                <span>
                    Heyy I know Java Programming Language
                    and Deta Structure and Algorithms
                     <br/>
                    I have 690+ points on GFG and I have Solved 100+
                    Problems on Leetcode <br />
                    I am 5 Star on Hackerrank and 1480 rating on Codechef
                </span>
               
               
                <div className="blur s-blur" style={{background:"#ABF1FF94"}}></div>
            </div>  
            <div className="w-right">
                <motion.div className="w-mainCircle"
                 initial={{ rotate: 45,  left: '18rem' }}
                    whileInView={{ rotate: 0 }}
                    // it will rotate when it comes to view of 50px
          viewport={{ margin: "-50px" }}
          transition={{ duration: 3.5, type: "spring" }}>
                 <a href="https://codeforces.com/profile/Ashish252" target=" _blank">   <div className="w-secCircle">
                        <img src={ codeforces} alt ="" />
                    </div> </a>
                    <a href="https://www.codechef.com/users/ashish_138"  target=" _blank"><div className="w-secCircle">
                        <img src={ codechef} alt ="" />
                    </div> </a>
                   <a href="https://leetcode.com/Ashish_252/"  target=" _blank"> <div className="w-secCircle">
                        <img src={ leetcode} alt ="" />
                    </div> </a>
                  <a href="https://www.hackerrank.com/ashishpatel3946"  target=" _blank">  <div className="w-secCircle">
                        <img src={ hackerrank} alt ="" />
                    </div> </a>
                    <a href="https://auth.geeksforgeeks.org/user/ashishpatel3946"  target=" _blank">  <div className="w-secCircle">
                      <img src={ gfg} alt ="" /> 
                    </div> </a>
                </motion.div> 
                {/* backround circle */}
                <div className="w-backCircle blueCircle">
                    
                </div>
                <div className="w-backCircle yrllowCircle">
                    
                </div>
        </div>
     </div>   
    )
}
export default Work;