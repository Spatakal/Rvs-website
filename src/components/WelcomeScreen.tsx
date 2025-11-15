import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import rvsLogo from "@/assets/rvs-logo.png";

const WelcomeScreen = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: show ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-secondary via-primary to-accent"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0, rotateY: 180 }}
        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center"
      >
        <motion.img
          src={rvsLogo}
          alt="RVS Logo"
          className="h-40 w-40 mx-auto mb-8 drop-shadow-2xl"
          animate={{
            y: [0, -20, 0],
            filter: ["drop-shadow(0 0 20px rgba(255,255,255,0.5))", "drop-shadow(0 0 40px rgba(255,255,255,0.8))", "drop-shadow(0 0 20px rgba(255,255,255,0.5))"]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold text-white mb-4"
        >
          Royal Value Solutions
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-xl md:text-2xl text-white/90 font-light"
        >
          IT Consulting & Services
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="h-1 w-64 mx-auto mt-8 bg-gradient-to-r from-transparent via-white to-transparent"
        />
      </motion.div>
    </motion.div>
  );
};

export default WelcomeScreen;
