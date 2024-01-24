// import React from "react";
import { motion } from "framer-motion";
const Links = () => {
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.3,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };
  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };
  const items = ["Homepage", "Service", "Portfolio", "Contact", "About"];
  return (
    <motion.div className="links" variants={variants}>
      {items.map((items) => (
        <motion.a
          href={`#${items}`}
          key={items}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {items}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
