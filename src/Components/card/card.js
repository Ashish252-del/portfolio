import React from "react";
import './card.css'
import { motion } from 'framer-motion';
const Card = ({ pic, headline, detail }) => {
     const trasition = { duretion: 1, type: 'spring' };
    return (
        <motion.div
          initial={{  left: '25%' }}
                    whileInView ={{ left: '2rem' }}
                    transition = {trasition}
            className="card">
            <img src={pic} alt="" />
            <span>{headline}</span>
            <span>{detail}</span>
        </motion.div>
    )
}
export default Card;