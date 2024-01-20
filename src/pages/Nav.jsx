import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef} from "react";
import { FiArrowRight } from "react-icons/fi";
import Kinglike from "../assets/kinglike.png"
import AiImage from "../assets/ai.png"
import ContactImage from "../assets/contact.png"
import {Link as RouterLink} from "react-router-dom"

const Nav = () => {
  return (
    <motion.section
    className="bg-neutral-800 p-4 md:p-8 flex items-center justify-center h-screen overflow-hidden"
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ type: "spring", duration: 1, delay: 0.2 }}
  >
      <div className="mx-auto max-w-5xl flex flex-col w-full">
        <motion.div initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}>
          <Link
            heading="About"
            subheading="Know what KingLike does"
            imgSrc={Kinglike}
            href="/home"
          />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}>
        <Link
          heading="Modals"
          subheading="Access our AI models"
          imgSrc={AiImage}
          href="/search"
        />
        </motion.div>
                <motion.div initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}>
        <Link
          heading="Contact"
          subheading="Want to share your thoughts?"
          imgSrc={ContactImage}
          href="/contact"
        />
        </motion.div>
      </div>
    </motion.section>
  );
};

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div  ref={ref}
    onMouseMove={handleMouseMove}
    initial="initial"
    whileHover="whileHover">
    <RouterLink
    to={href}
    className="group relative flex flex-row items-center justify-between border-b-2 border-neutral-200 py-4 transition-colors duration-500 hover:border-neutral-500 md:py-8 cursor-none"
  >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-200 transition-colors duration-500 group-hover:text-neutral-500 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-200 transition-colors duration-500 group-hover:text-neutral-500">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "0deg" },
          whileHover: { scale: 1, rotate: "0deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-contain md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-200" />
      </motion.div>
    </RouterLink>
    </motion.div>
  );
};

export default Nav;