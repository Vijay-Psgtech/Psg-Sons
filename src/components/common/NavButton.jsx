import { motion } from "framer-motion";

const NavButton = ({ onClick, children, className = "" }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.85 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      onClick={onClick}
      className={`w-12 h-12 flex justify-center items-center bg-white rounded-full drop-shadow-md ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default NavButton;