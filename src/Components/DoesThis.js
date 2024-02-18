import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import './DoesThis.css'


const DoesThis = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef();
  const boxContainerRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    observer.observe(ref?.current);
    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      boxContainerRef.current.scrollBy({
        top: 0,
        left: +500,
        behavior: "smooth",
      });
    } else {
    }
  }, [isIntersecting]);
  return (
    <section className="overflow-x-hidden mt-12 mb-28 p-4 px-20 customHeading" ref={ref}>
      <div className="flex flex-row items-center justify-between ">
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
          <h1 className="text-5xl font-bold px-4 mb-5 customHeading">
            Does this sound familiar...
          </h1>
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
              x: [0, -50, -100, -200, -350],
              y: [35, 20, 10, 0, -10],
              rotate: [-60, -45, -35,-35,-35, -35, -15],
            },
            hidden: { opacity: 0, scale: 0},
          }}
        >
          <img width={70} height={70} alt="" src="/red-ghost.png" />
        </motion.div>
      </div>
      <div
        className=" p-10 flex space-x-8 gap-7 items-center overflow-x-auto hide-scrollbar h-250"
        ref={boxContainerRef}
      >
        <div className="rounded-xl bg-purple-200 min-w-[350px]  p-6 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out">
          <img className="customImgstyle" width={70} height={70} alt="" src="/angry-emoji.svg" />
          <h3 className="font-bold text-lg">You argue with a colleague</h3>
          <p className="text-gray-700 custom-para">
            You get angry and defensive,instead of staying open and working
            towards common ground
          </p>
        </div>

        <div className="rounded-xl bg-blue-300 min-w-[350px]  p-6 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300  ease-in-out">
          <img className="customImgstyle" width={70} height={70} alt="Shy-emoji" src="/shy-emoji.svg" />
          <h3 className="font-bold text-lg text-white">
            You get a prmotion at work
          </h3>
          <p className="text-white custom-para">
            You question yourself and wonder unqualified imposter instead of
            trusting yourself & your abilites
          </p>
        </div>

        <div className="rounded-xl bg-yellow-200 min-w-[350px]  p-6 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300  ease-in-out">
        <img className="customImgstyle" width={70} height={70} alt="" src="/sad-emoji.svg" />
          <h3 className="font-bold text-lg ">You attend a class reunion</h3>
          <p className="text-gray-700 custom-para">
            You compare yourelf with your peers your self judgement more
            independent of others.
          </p>
        </div>

        <div className=" rounded-xl bg-violet-600 min-w-[350px]  p-6 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out">
        <img className="customImgstyle" width={70} height={70} alt="" src="/fright-emoji.svg" />
          <h3 className="font-bold text-white">
            You are at a lively dinner party
          </h3>
          <p className="text-white custom-para">
            You play on your phone instead of confidently approaching
            strangers and striking up a chat
          </p>
        </div>

        <div className="rounded-xl bg-blue-100 min-w-[350px]  p-6 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out">
        <img className="customImgstyle" width={70} height={70} alt="frustrate" src="/frustrate-emoji.svg" />
          <h3 className="font-bold text-lg ">
            You hit dead end in a negotiation
          </h3>
          <p className="text-gray-700 custom-para">
            You get fruzzeled, nervous and frustated instead of staying
            optmisitic and solution-oriented.
          </p>
        </div>

        <div className="rounded-xl bg-purple-200 min-w-[350px]  p-6 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out">
        <img className="customImgstyle" width={70} height={70} alt="" src="/angry-emoji.svg" />
          <h3 className="font-bold text-lg">You argue with a colleague</h3>
          <p className="text-gray-700 custom-para">
            You get angry and defensive,instead of staying open and working
            towards common ground
          </p>
        </div>
        <div className="rounded-xl bg-violet-600 min-w-[350px]  p-6 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out">
        <img className="customImgstyle" width={70} height={70} alt="" src="/wink-emoji.svg" />
          <h3 className="font-bold text-white">
            You are at a lively dinner party
          </h3>
          <p className="text-white custom-para">
            You play on your phone instead of confidentaly approaching
            starangersand striking up a chat
          </p>
        </div>

        <div className="rounded-xl bg-blue-100 min-w-[350px]  p-6 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out">
        <img className="customImgstyle" width={70} height={70} alt="" src="/neutral-emoji.svg" />
          <h3 className="font-bold text-lg ">
            You hit dead end in a negotiation
          </h3>
          <p className="text-gray-700 custom-para">
            You get fruzzeled, nervous and frustated instead of staying
            optmisitic and solution-oriented.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DoesThis;