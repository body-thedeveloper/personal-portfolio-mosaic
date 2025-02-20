
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          className="max-w-4xl"
        >
          <motion.h1 
            className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-display font-medium tracking-tight mb-8 leading-[1.1]"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.45, 0, 0.55, 1] }}
          >
            Digital Product
            <br />
            Designer
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl text-muted leading-relaxed max-w-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.45, 0, 0.55, 1] }}
          >
            Creating meaningful digital experiences through thoughtful design
            and creative solutions.
          </motion.p>
        </motion.div>
      </div>
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center"
        >
          <div className="w-1 h-2 bg-white/20 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
