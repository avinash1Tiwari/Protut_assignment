import { motion } from "framer-motion";
import './Button.css'
const UserButton = ({children}) => {
  return (
    <div className="">

   
    <motion.button
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className="px-6 py-2 rounded-md relative radial-gradient bg-neutral-950 w-52"
    >
     
      <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
       <span className="text-neutral-100 tracking-wide h-full w-full block relative linear-mask font-semibold text-2xl text-left">
        {children}
      </span>
    </motion.button>
    </div>
  );
};

export default UserButton;