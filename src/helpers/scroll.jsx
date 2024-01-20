import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Art from "../assets/art.png";
import Nature from "../assets/nature.png";
import Landscape from "../assets/landscape.png";
import Mountain from "../assets/mountain.png";
import Ocean from "../assets/ocean.png";

const Scroll = () => {
  return (
    <div className="bg-transparent">
      <div className="flex flex-col items-center justify-center">
        <span className="font-bold text-3xl lg:text-5xl uppercase text-neutral-100">
          What You Get Here?
        </span>
     </div>
      <HorizontalScrollCarousel />
      <div className="flex items-center justify-center">
        <span className="font-semibold mb-10 text-2xl text-neutral-100">
          So what are <span className="font-bold uppercase text-gray-400">you</span> waiting for?
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-transparent">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-x-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[300px] w-[300px] md:h-[450px] md:w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Scroll;

const cards = [
  {
    url: Art,
    title: "Img-Txt",
    id: 1,
  },
  {
    url: Nature,
    title: "Txt-Img",
    id: 2,
  },
  {
    url: Mountain,
    title: "Txt-Txt",
    id: 3,
  },
  {
    url: Landscape,
    title: "Txt-MP3",
    id: 4,
  },
  {
    url: Ocean,
    title: "Coming Soon.",
    id: 5,
  },
];