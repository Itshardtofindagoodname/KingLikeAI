import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Aianim from "../assets/ai.json";
import Scroll from "../helpers/scroll";
import Navbar from "../helpers/Navbar";

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="overflow-hidden bg-gradient-to-b from-neutral-800 via-neutral-600 to-neutral-800 font-inter w-screen max-w-screen"
      initial="initial"
      animate="animate"
    >
      <motion.main
        className="relative h-screen"
        variants={fadeInUp}
      >
        <div className="fixed top-0 w-full z-30">
          <Navbar />
        </div>
        <motion.div
          className="relative z-20 mt-40 flex items-center"
          variants={fadeInUp}
        >
          <motion.div
            className="container relative flex flex-col items-center justify-between px-6 py-8 mx-auto"
            variants={fadeInUp}
          >
            <motion.div className="flex flex-col" variants={fadeInUp}>
              <motion.h1
                className="w-full text-4xl font-bold text-center text-neutral-200 uppercase sm:text-5xl"
                variants={fadeInUp}
              >
                The One-Stop AI-spot for Everyone
              </motion.h1>
              <motion.h2
                className="w-full max-w-2xl py-8 mx-auto text-xl font-light text-center text-neutral-400"
                variants={fadeInUp}
              >
                <span className="text-yellow-400 font-bold">
                  Unlock Your Creative Superpowers
                </span>
                : Who needs multiple websites when you can have a party in one
                tab! Let your imagination run wild{" "}
                <span className="font-normal text-neutral-200">
                  without breaking a{" "}
                  <span className=" line-through">sweat</span> Bank
                </span>
                . Welcome to the{" "}
                <span className="text-neutral-200 font-normal italic">
                  Multitasking fiesta of the future!
                </span>
              </motion.h2>
            </motion.div>
            <motion.div
              className="relative block w-full mx-auto mt-6 md:mt-0"
              variants={fadeInUp}
            >
              <Lottie
                animationData={Aianim}
                loop={true}
                className="max-w-xs m-auto md:max-w-4xl"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.main>

      <motion.div className="my-20" variants={fadeInUp}>
        <motion.div className="container p-6 px-6 mx-auto" variants={fadeInUp}>
          <motion.div
            className="mb-16 text-center"
            variants={fadeInUp}
          >
            <motion.h2
              className="text-base font-semibold tracking-wide text-yellow-400 uppercase"
              variants={fadeInUp}
            >
              Features
            </motion.h2>
            <motion.p
              className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-neutral-300 sm:text-4xl"
              variants={fadeInUp}
            >
              What KingLike Provides
            </motion.p>
          </motion.div>
          <motion.div className="flex flex-wrap my-12" variants={fadeInUp}>
            <motion.div
              className="w-full p-8 border-b border-gray-200 md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0"
              variants={fadeInUp}
            >
              <motion.div className="flex items-center mb-6" variants={fadeInUp}>
                <svg width="20" height="20" fill="currentColor" className="w-6 h-6 text-yellow-400" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                  </path>
                </svg>
                <motion.div className="ml-4 text-xl text-white">
                  Multiple Models
                </motion.div>
              </motion.div>
              <motion.p
                className="leading-loose text-gray-400 text-md"
                variants={fadeInUp}
              >
                You get four models for now to use at all times without the
                stress of running multiple websites at once making it easier
                for people to use it.
              </motion.p>
            </motion.div>
            <motion.div
              className="w-full p-8 border-b border-gray-200 md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0"
              variants={fadeInUp}
            >
              <motion.div className="flex items-center mb-6" variants={fadeInUp}>
                <svg width="20" height="20" fill="currentColor" className="w-6 h-6 text-yellow-400" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                  </path>
                </svg>
                <motion.div className="ml-4 text-xl text-white">
                  Everything Free
                </motion.div>
              </motion.div>
              <motion.p
                className="leading-loose text-gray-400 text-md"
                variants={fadeInUp}
              >
                Yes, all the models in KingLike are absolutely free of any cost
                for the moment. Additionally, no sign-ups are required either
                at all.
              </motion.p>
            </motion.div>
            <motion.div
              className="w-full p-8 md:w-1/2 lg:w-1/3"
              variants={fadeInUp}
            >
              <motion.div className="flex items-center mb-6" variants={fadeInUp}>
                <svg width="20" height="20" fill="currentColor" className="w-6 h-6 text-yellow-400" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                  </path>
                </svg>
                <motion.div className="ml-4 text-xl text-white">
                  Peak Performance
                </motion.div>
              </motion.div>
              <motion.p
                className="leading-loose text-gray-400 text-md"
                variants={fadeInUp}
              >
                To speak of Performance, every bit of this Website, starting from
                images to design, is made using the AIs of KingLike. How Awesome
                Is That?
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="max-w-screen-xl p-8 mx-auto mb-20"
        variants={fadeInUp}
      >
        <motion.h2
          className="mb-12 text-3xl font-extrabold leading-9 text-gray-200 border-b-2 border-gray-100"
          variants={fadeInUp}
        >
          What to Expect from KingLike?
        </motion.h2>
        <motion.ul className="flex flex-wrap items-start gap-8" variants={fadeInUp}>
          <motion.li className="w-2/5" variants={fadeInUp}>
            <motion.p className="text-lg font-medium leading-6 text-gray-200">
              Faster Responses
            </motion.p>
            <motion.p className="mt-2 text-base leading-6 text-gray-400">
              The Response time, though may seem long at times, but is made to
              answer in the best way possible taking the least amount of time.
            </motion.p>
          </motion.li>
          <motion.li className="w-2/5" variants={fadeInUp}>
            <motion.p className="text-lg font-medium leading-6 text-gray-200">
              Accuracy
            </motion.p>
            <motion.p className="mt-2 text-base leading-6 text-gray-400">
             "With great speed comes less accuracy" but not here, it's pretty accurate with the responses it generates at all
              times.
            </motion.p>
          </motion.li>
          <motion.li className="w-2/5" variants={fadeInUp}>
            <motion.p className="text-lg font-medium leading-6 text-gray-200">
              Upcoming changes and Updates
            </motion.p>
            <motion.p className="mt-2 text-base leading-6 text-gray-400">
              The models used will always be kept under observation of any
              failure, providing maximum security and user interaction. If
              anything doesn't work for you, you can go ahead and let me know
              about it and I'll try fixing it as soon as possible. Also, I am
              working on new features like.... Let that be a secret before it's
              launched, so Sshhh..
            </motion.p>
          </motion.li>
          <motion.li className="w-2/5" variants={fadeInUp}>
            <motion.p className="text-lg font-medium leading-6 text-gray-200">
              Are the Models like Chatbot?
            </motion.p>
            <motion.p className="mt-2 text-base leading-6 text-gray-400">
              The Short-Answer is No, only the text-to-text functions like a
              chatbot for back-and-forth question answer, but other models don't
              because KingLike aims to answer your queries and questions, so it
              provides AI-models more like a Q/A bot than a chatbot.
            </motion.p>
          </motion.li>
        </motion.ul>
      </motion.div>
            
      <motion.section
      className="container min-h-screen p-4 mx-auto max-w-7xl sm:p-6 lg:p-8"
      variants={fadeInUp}
    >
      <motion.div className="flex flex-wrap -mx-8" variants={fadeInUp}>
        <motion.div
          className="w-full px-8 lg:w-1/2"
          variants={fadeInUp}
        >
          <motion.div
            className="pb-12 mb-12 border-b lg:mb-0 lg:pb-0 lg:border-b-0"
            variants={fadeInUp}
          >
            <motion.h2
              className="mb-4 text-3xl font-bold lg:text-4xl font-heading text-white"
            >
              Sounds Good but don't know how to get started?
            </motion.h2>
            <motion.p
              className="mb-8 leading-loose text-gray-400"
              variants={fadeInUp}
            >
              Well starting with KingLike AI is like putting butter on bread(or
              more like falling asleep). There's No SIGN-UP or Fee Payment too
              which makes it much more faster to access the AIs.<br />Also
              sometimes the site may crash due to overloading, so you can
              refresh it and you'll be Good to Go.
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.div className="w-full px-8 lg:w-1/2" variants={fadeInUp}>
          <motion.ul className="space-y-12" variants={fadeInUp}>
            <motion.li className="flex -mx-4" variants={fadeInUp}>
              <div className="px-4">
                <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-black rounded-full font-heading bg-blue-50">
                  1
                </span>
              </div>
              <div className="px-4">
                <motion.h3
                  className="my-4 text-xl font-semibold text-white"
                  variants={fadeInUp}
                >
                  Click on the NAVIGATE button
                </motion.h3>
                <motion.p
                  className="leading-loose text-gray-300"
                  variants={fadeInUp}
                >
                  In the top-right corner you'll be greeted with the much
                  welcoming Navigate button which will keep directing you
                  towards your destiny.
                </motion.p>
              </div>
            </motion.li>
            <motion.li className="flex -mx-4" variants={fadeInUp}>
              <div className="px-4">
                <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-black rounded-full font-heading bg-blue-50">
                  2
                </span>
              </div>
              <div className="px-4">
                <motion.h3
                  className="my-4 text-xl font-semibold text-white"
                  variants={fadeInUp}
                >
                  Go to MODELS Section
                </motion.h3>
                <motion.p
                  className="leading-loose text-gray-300"
                  variants={fadeInUp}
                >
                  This is the portion where all the models are kept with
                  description so it's easier for you to find the one you would
                  like to use.
                </motion.p>
              </div>
            </motion.li>
            <motion.li className="flex -mx-4" variants={fadeInUp}>
              <div className="px-4">
                <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-black rounded-full font-heading bg-blue-50">
                  3
                </span>
              </div>
              <div className="px-4">
                <motion.h3
                  className="my-4 text-xl font-semibold text-white"
                  variants={fadeInUp}
                >
                  Well ENJOY Now
                </motion.h3>
                <motion.p
                  className="leading-loose text-gray-300"
                  variants={fadeInUp}
                >
                  Go ahead now, use the AI bots without any worry of losing
                  your time(or wallet)
                </motion.p>
              </div>
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.section>
            <Scroll />
            <footer className="bg-neutral-900 rounded-lg m-4">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <p className="text-gray-400">Copyright © 2024 KingLike</p>
                </div>
            </footer>
        </motion.div>
    );
}

export default Home;