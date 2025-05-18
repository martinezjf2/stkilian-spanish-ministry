"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoaderWithBlink({ children }) {
  const [progress, setProgress] = useState(0);
  const [blinkPhase, setBlinkPhase] = useState(false);
  const [showHome, setShowHome] = useState(false);

  // Simulate loading
  useEffect(() => {
    if (progress < 100) {
      const timeout = setTimeout(() => setProgress((p) => p + 1), 20);
      return () => clearTimeout(timeout);
    } else {
      const blinkTimeout = setTimeout(() => {
        setBlinkPhase(true);
      }, 300);
      return () => clearTimeout(blinkTimeout);
    }
  }, [progress]);

  // Show main content after blink
  useEffect(() => {
    if (blinkPhase) {
      const delay = 1600; // time for 3 blinks
      const timer = setTimeout(() => setShowHome(true), delay);
      return () => clearTimeout(timer);
    }
  }, [blinkPhase]);

  // Blink animation
  const blinkVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <div className="relative w-full h-full">
      {/* Main content - fades in from black */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: showHome ? 1 : 0 }}
        transition={{ duration: 1.5 }}
      >
        {children}
      </motion.div>

      {/* Loader on top */}
      <AnimatePresence>
        {!showHome && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-10 flex items-center justify-center bg-black text-white text-5xl font-bold"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            {blinkPhase ? (
              <motion.span
                variants={blinkVariants}
                initial="visible"
                animate="hidden"
                transition={{
                  repeat: 3,
                  repeatType: "reverse",
                  duration: 0.3,
                }}
              >
                {progress}%
              </motion.span>
            ) : (
              <motion.span>{progress}%</motion.span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
