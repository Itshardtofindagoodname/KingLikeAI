import React from "react";
import { motion } from "framer-motion";
import Navbar from "../helpers/Navbar";
import Card from "../helpers/Card";
import Imgtxt from "../assets/img_txt.webp";
import Txtimg from "../assets/txt_img.webp";
import Audio from "../assets/audio.webp";
import Txt from "../assets/txt.webp";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const SearchAi = () => {
  const cards = [
    {
      title: "Helping you read and get info about any Image",
      imageSrc: Imgtxt,
      category: "Image to Text",
      link: "/imagerec",
      rating: "4.5/5",
    },
    {
      title: "Providing you AI-generated Images",
      imageSrc: Txtimg,
      category: "Text to Image",
      link: "/imagegen",
      rating: "4.2/5",
    },
    {
      title: "Audio Samples to the prompts you give",
      imageSrc: Audio,
      category: "Text to Audio",
      link: "/audio",
      rating: "4/5",
    },
    {
      title: "Your not-so-basic Prompt-to-Text model",
      imageSrc: Txt,
      category: "Text to Text",
      link: "/text",
      rating: "4.5/5",
    },
  ];

  return (
    <div className="bg-neutral-900 min-h-screen flex flex-col justify-center">
      <div className="fixed top-0 w-full z-30"><Navbar/></div>
      <div className="mt-20 flex justify-center items-center py-20">
        <motion.div
          className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 space-y-4 md:space-y-0"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ ease: "easeInOut", duration: 0.5 + index * 0.2 }}
            >
              <Card
                title={card.title}
                imageSrc={card.imageSrc}
                category={card.category}
                link={card.link}
                rating={card.rating}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SearchAi;
