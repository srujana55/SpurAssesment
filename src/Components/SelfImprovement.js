import React from "react";

import { motion } from "framer-motion";

import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import './SelfImprove.css'

const DataArray=[
{head:"It's not easy as 1-2-3", para:"The journey may be long but our sessions are quick. We getto the point and tell you what you want to know (and nothing  else).",index:0},
{head:"Old habits are hard to break." ,para:"And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use.",index:1},
{head:"You and your motivation don't have a long-term relationship.", para:"Luckily, we can proactively prepare you for the marathon, not just the race.Effective memorable exercises will help you stick to your goals.",index:2},
{head:"Books just don't offer practical solutions.",para:"Remember when you learned to ride a bike just by reading? Yeah, we don't either. We help you take concrete small steps towards your goals. Learning just a bit, then immediately springing into action.",index:3},
{head:"Inspiration is great, but then what.", para:"Remember when you learned to ride a bike just by reading? Yeah, we don't either. We help you take concrete small steps towards your goals. Learning just a bit, then immediately springing into action.",index:4},
{head:"Old habits are hard to break." ,para:"And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use.",index:5},
{head:"You and your motivation don't have a long-term relationship.", para:"Luckily, we can proactively prepare you for the marathon, not just the race.Effective memorable exercises will help you stick to your goals.",index:6},
{head:"Old habits are hard to break." ,para:"And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use.",index:7},
{head:"You and your motivation don't have a long-term relationship.", para:"Luckily, we can proactively prepare you for the marathon, not just the race.Effective memorable exercises will help you stick to your goals.",index:8},


]

const customAnimation = keyframes`
  from {
    opacity: 0.1;
    // transform: translate3d(-200px, -100px, 0);
    transform: translate2d( -50px, 0);
    transparent:0;
  }

  to {
    opacity: 1;
    transform: translate2d( 0, 0);
  }
`;
const SelfImprovement = () => {

  
  return (
    <section className="px-20 mt-10 mb-20 customTop ">
      <div className="flex flex-row justify-between items-center">
        <motion.div
          className="inline-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.9, type: "spring", bounce: "0.1" }}
          variants={{
            visible: { opacity: 1, scale: 1, y: 0, x: 0 },
            hidden: { opacity: 0, scale: 0, x: "-50%" },
          }}
        >
          <div className="text-xl pb-3 text-black Customwrong">
            Wrong with self improvement & how we&apos;re fixing it.
          </div>
          <div className="text-5xl pb-3 mb-2 font-bold text-black CustomSelf">
            Self Improvement. Ugh.
          </div>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 2.1, ease: "easeInOut", type: "spring",delay:0.3 }}
          intial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              opacity: 1,
              scale: 1,
              x: [0, -100, -300, -450, -500],
              y: [35, 20, 10, 0, -10],
              rotate: [-60, -45, -35,-35,-35, -35, -15],
            },
            hidden: { opacity: 0, scale: 0},
          }}
          className="flex items-center justify-center"
        >
          <img
            src="/blue-ghost.png"
            alt="download applestore"
            width={70}
            height={70}
          />
        </motion.div>
      </div>

      <div className="timeline px-20 pt-12 h-96 overflow-y-scroll customScroll">
        <div className="border-l-2 border-l-violet-300   flex  flex-col gap-16">
          <Reveal keyframes={customAnimation}>
          {DataArray.map((val) => {
            return (
              <div  key={val.index}
              >
                <motion.div
                 className=" max-w-[40rem] relative align-top pl-8">
                  <div style={{left:"-12px"}} className="absolute">🟣</div>
                  <p className="text-xl font-bold customPara">{val.head}</p>
                  <p className="mt-3 innerCard">
                   {val.para}
                  </p>
                </motion.div>
              </div>
            );
          })}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default SelfImprovement;