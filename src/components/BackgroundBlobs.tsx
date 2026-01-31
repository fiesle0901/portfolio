import { motion } from "framer-motion";
import { useMemo } from "react";

const BackgroundBlobs = () => {
  // Generate random blobs once
  const blobs = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      size: Math.random() * 40 + 10, // 10px to 50px
      initialX: Math.random() * 100, // 0-100%
      initialY: Math.random() * 100, // 0-100%
      duration: Math.random() * 20 + 10, // 10s to 30s
      delay: Math.random() * 5,
      xOffset: (Math.random() - 0.5) * 100, // -50px to 50px movement
      yOffset: (Math.random() - 0.5) * 100,
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-primary">
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className="absolute bg-green-500/30 rounded-full blur-sm"
          style={{
            width: blob.size,
            height: blob.size,
            top: `${blob.initialY}%`,
            left: `${blob.initialX}%`,
            willChange: "transform",
          }}
          animate={{
            x: [0, blob.xOffset, 0],
            y: [0, blob.yOffset, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: blob.delay,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundBlobs;
