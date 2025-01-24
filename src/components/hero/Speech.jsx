import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "Hello! I'm Manu, a Software Developer.",
            2000,
            "Specialising in full-stack development and cloud technologies.",
            2000,
            "I deliver scalable, innovative, and efficient solutions.",
            3000,
            "Always learning, adapting, and excited to take on new challenges.",
            3000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          // omitDeletionAnimation
          repeat={Infinity}
        />
      </div>
      <img src="/man.png" alt="" />
    </motion.div>
  );
};

export default Speech;