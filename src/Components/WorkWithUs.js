import { motion } from "framer-motion";
import React from "react";
import './WorkWithUs.css'
import OpenVacancies from "./OpenVacancies";


const DataArr=[{index:0,title:"Power through, even when the going gets tough",des:"We help you spot and work around whatever stands in the way, be it bad habits, fears, etc."},
{index:1,title:"Learn more about who you are and where you want to go",des:"We ask the right questions to help you better understand why you do things the way you do."},
{index:2,title:"Play and grow together with others on the same journey",des:"Ahead feels like a game, not like a chore. See yourself grow every day towards achieving your goals!"},
{index:3,title:"Master how to make it happen. in real life",des:"We support you towards ninja level skills with sleek taole such as drynans que and freshcords"},
{index:4,title:"Learn about practical skills that you can actually use in real life",des:"We teach you smert poychological techniques and hobit-forming strategies that are easy to apply"},
{index:5,title:"Get support that's made for your needs",des:"We build your personal readmap of lessons and actions towards your gools"},

]

const WorkWithUs = () => {
  return (
    <>

    <div className="px-20 my-32 outerCon">
      <section className="mt-16 outerCon2  rounded-2xl bg-violet-100 p-12 px-16">
        <div className="flex outerCon  justify-between items-center text-5xl font-bold">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, scale: 1, x: 0, y: 0 },
              hidden: { opacity: 0, scale: 0.5, x: "-50%" },
            }}
          >
            <span className="text-5xl Heading">Work with us</span>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, scale: 1, x: 0, y: 0 },
              hidden: { opacity: 0, scale: 0.5, x: "50%" },
            }}
          >
            <span className="text-violet-800 mr-15  Heading">ahead</span>
          </motion.div>
        </div>
        <div className="mt-12 flex gap-20 overflow-hidden Con">
          <div className="grow">
            <div className="rounded-2xl bg-white pt-8  firstPart  shadow-lg">
           
              <motion.div
              className="pl-4 inline-block"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 4 }}
                variants={{
                  visible: { opacity: [0.8,0.9,1.01,1], scale: [0.6,0.55,0.8,1], rotate: [0,45,-35,10,0] },
                  hidden: { opacity: 0, scale: 0.5, rotate: 0 },
                }}
              >
                <img width={60} height={60} alt="" src="/ghost.png" />
              </motion.div>
              <div className="flex flex-col gap-3 p-4 h-32 overflow-hidden">
                <h2 className="font-bold">About</h2>
                <p className="font-normal para">
                At ahead our goal is to make self- improvement fun and lasting. We know there's a way how to make it work. And that's what aHead is all about!

                </p>
              </div>

              <div className="flex flex-col gap-2 pt-8 h-36 p-4 rounded-2xl  mt-8 bg-orange-50 overflow-hidden">
                <h2 className="font-bold">Product</h2>
                <p className="font-normal para">
                Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager - like we did...
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 max-h-[75vh]  overflow-y-auto pr-6 secondPart custom-scrollbar">
            {DataArr.map((val) => (
              <div
                className="  p-6 mr-6 bg-white rounded-2xl secondPartInnerCard space-y-6 w-[25rem]"
                key={val.index}
              >
                <h2 className="font-bold">
                  {val.title}
                </h2>
                <p className="font-normal  para">
                 {val.des}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    <OpenVacancies/>
    </>
  );
};

export default WorkWithUs;