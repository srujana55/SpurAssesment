import React from "react";
import { motion } from "framer-motion";
import './MeetAhead.css'

const MeetAheadApp = () => {
  return (
    <div className="px-20 outer relative mt-7 mb-32">
      <div
        style={{ height: "450px" }}
        className="bg-bgPeach overflow-hidden relative flex wrapper rounded-lg"
      >
        <div className=" basis-1/2 px-7">
          <div className="flex flex-col mt-20 gap-3">
            <div>
              <p className="text-md text-left">Built out of frustration</p>
            </div>
            <div>
              <p className="text-5xl font-bold customHead">Meet the ahead app</p>
            </div>
          </div>
        </div>
        <div className="basis-1/2 flex items-center">
          <div className="flex flex-col gap-12 w-4/5 pl-5 mt-20 sideCardDiv items-center">
            <div>
              <p className="text-lg colo">
                A personalized pocket coach that provide
                bitesized,science-driven tools to boost emotional intelligence.
              </p>
            </div>
            <div>
              <p  className="text-lg colo">
                Think of it as a pocket cheerleader towards a better, more
                fulfilling.
              </p>
            </div>
          </div>
        </div>

        {/* circle div  */}
        <motion.div
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
          variants={{
            hidden: { opacity: 1, x: 0, y: 20 },
            visible: {
                x: [0, -550],
                y: [55, -18], 
              },
          }}
          animate={{
            x: [0, -550], 
            y: [55, -18], 
          }}
          transition={{
            type: "tween", 
            duration: 1.2, 
            ease: "easeInOut",
            delay:0.3
          }}
          className="bg-darkPeach h-60 w-60 absolute rounded-full"
          style={{ bottom: "-16px", right: "650px" }}
        ></motion.div>

        {/* leaves division */}
        <motion.div
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
          variants={{
            visible: {
              x: [0, 10],
              y: [55, -75],
              rotate: 25,
            },
            hidden: { y: 55 },
          }}
          animate={{
            x: [0, 10],
            y: [55, -5],
            rotate: 25,
          }}
          transition={{
            type: "tween",
            duration: 1.2,
            ease: "easeInOut",
            delay:0.6
          }}
          className="h-28 w-24 absolute"
          style={{ right: "60%", top: "20%", transform: "translate(50%,50%)" }}
        >
          <img className="smallImgs" height={100} width={100} src="/leaf.png" alt="leafImg" />
        </motion.div>

        {/*GHost Div  */}
        <div
          style={{ top: "62%", left: "15%", transform: "translate(-50%,-50%)" }}
          className="absolute  flex justify-center items-center rounded-full bg-white changeColor h-44 w-44 border-8 border-borderGrey"
        >
          <motion.div
            transition={{ duration: "1.5" }}
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { rotate: [0, 25, -15, 0] },
              hidden: { opacity: 0, scale: 0.5, rotate: 0 },
            }}
            className="h-20 w-16 inline-block"
          >
            <img height={100} width={100} src="/newGhost.png" className="h-full w-full smallImgs" alt="Ghostuuu" />
          </motion.div>
          {/*Badge*/}
          <motion.div
            whileInView="visible"
            viewport={{ once: true }}
            initial="hidden"
            variants={{
              visible: { opacity: 1, scale: 1, y: 0, zIndex: -10 },
              hidden: { y: 60, opacity: 0, scale: 0.5 },
            }}
            transition={{
              type: "spring",
              duration: "1.5",
              ease: "easeInOut",
              delay: "0.5",
            }}
            className="absolute h-11 w-11"
            style={{ top: "-22px" }}
          >
            <img className="smallImgs" height={100} width={100} src="/badge.png" alt="badgeImg" />
          </motion.div>
        </div>
      </div>
      {/* flower div */}
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={{
              visible: { opacity: 1,rotate:360 },
              hidden: {  opacity: 1 },
        }}
  
        transition={{
          loop: Infinity, 
          ease: "linear",
          duration: 2, 
        }}
        style={{ right: "280px", top: "-20px" }}
        className="h-11 w-11 absolute "
      >
        <img className="smallImgs" height={100} width={100}src="/flower.png" alt="flowerImg" />
      </motion.div>
    </div>
  );
};

export default MeetAheadApp;