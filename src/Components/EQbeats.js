import React from "react";
import './EQbeats.css' ;
import { motion } from "framer-motion";

const EQbeatsIQ = (props) => {
    const {eqHeading, eqpara1, eqpara2}= props
  return (
    <div className="eqdiv">
       <div className="eqdivContent">
       <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { x: "-30%", y: "50%", opacity: 0 },
          visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: { ease: "easeInOut", duration: 0.8 },
          },
        }}
        style={{
           // Adjust the width as needed
           // Hide overflowing text while sliding
        }}
      >
        <h2 className="eqHeading font-bold">{eqHeading}</h2>
      </motion.div>
            
            <div className="cardCon">
            <p className="eqpara">{eqpara1}</p>
            <p className="eqpara">{eqpara2}</p> 
            </div>
       </div>
      
    </div>
  );
};

export default EQbeatsIQ;