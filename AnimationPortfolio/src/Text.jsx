import React from "react";
import { motion } from "framer-motion";
function Text() {
  const varients = {
    visible: {
      opacity: 1,
      x: 100,
      transition: { staggerChildren: 0.2 },
    },
    didden: { opacity: 0 },
  };
  const items = ["item1", "item2", "item3", "item4", "item5", "item6"];
  return (
    <div className="course">
      <motion.ul initial="hidden" variants={varients} animate="visible">
        {items.map((item) => (
          <motion.li key={item}  variants={varients}>{item}</motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default Text;
