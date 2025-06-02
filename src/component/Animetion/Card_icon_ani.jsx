import { motion } from "framer-motion";

const AnimatedImage = ({ src, alt, className }) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay:0.01 , duration: 0.2 }}
      viewport={{ once: false }}
    />
  );
};

export default AnimatedImage;
