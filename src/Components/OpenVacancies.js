import React from 'react'
import './OpenVacancies.css'
import Footer from './Footer'
import { motion } from "framer-motion";

const OpenVacancies = () => {
  return (
    <div className="jobVDiv">
      <div className="vacancyCon">
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
            transition: { ease: "easeInOut", duration: 1.5 },
          },
        }}
        style={{
          width: "100%", // Adjust the width as needed
          overflow: "hidden", // Hide overflowing text while sliding
        }}
      >
        <h1 className="jobsHeading text-5xl font-bold">Open Vacancies</h1>
      </motion.div>
        <br/>
        <div className='jobrolesCon'>
            <div className='jobCard'>
                <h3 className='font-bold jobrole'>Senior Full-Stack</h3>
                <ul>
                    <li>
                        Full-time position
                    </li>
                    <li>
                        Berlin or Remote
                    </li>
                    <li>
                        65-85k, 0.5-1.50% equally share options
                    </li>
                </ul>
            </div>
            <div  className='jobCard'>
                <h3 className='font-bold jobrole' >Senior Designer</h3>
                <ul>
                    <li>
                        Full-time position
                    </li>
                    <li>
                        Berlin or Remote
                    </li>
                    <li>
                        45-85k, 0.5-1.50% equally share options
                    </li>
                </ul>
            </div>
            <div  className='jobCard'>
                <h3 className='font-bold jobrole'>Superstar Intern</h3>
                <ul>
                    <li>
                        Full-time position
                    </li>
                    <li>
                        Berlin or Remote
                    </li>
                    <li>
                        30-75k, 1.5-1.50% equally share options
                    </li>
                </ul>
            </div>
        </div>
      </div>
        <br/>
      <hr className="hrRule"/>
      <div className='footerSec'>
        <Footer/>
      </div>
    </div>
  )
}

export default OpenVacancies
