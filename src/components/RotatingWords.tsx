import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WORDS = [
  "Tranquilidad.",
  "Cercanía.",
  "Tiempo para escucharte.",
  "Explicaciones claras.",
  "Odontología humana.",
  "Tratamientos planificados.",
  "Una experiencia distinta.",
  "Menos ansiedad.",
  "Más confianza.",
  "Tu sonrisa, acompañada."
];

const DISPLAY_DURATION = 4000;
const TRANSITION_DURATION = 0.8;

export default function RotatingWords() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % WORDS.length);
    }, DISPLAY_DURATION);

    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: {
      opacity: 0,
      y: 20,
      filter: 'blur(8px)',
    },
    center: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
    },
    exit: {
      opacity: 0,
      y: -20,
      filter: 'blur(8px)',
    },
  };

  return (
    <div className="relative h-12 sm:h-14">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentIndex}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: TRANSITION_DURATION,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="absolute left-0 right-0 text-[17px] sm:text-[19px] font-normal text-muted-foreground leading-relaxed"
        >
          {WORDS[currentIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
