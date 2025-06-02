import React from "react";
import { motion } from "framer-motion";

const SplitText = ({ text, className = "" }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1  }}
      variants={{
        hidden: {},
        visible: {},
      }}
      className={className}
    >
      <span className="inline-block">
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.0, duration: 0.8 }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    </motion.div>
  );
};

export default SplitText;
