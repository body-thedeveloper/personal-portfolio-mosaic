
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-secondary/50 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <p className="text-lg mb-4 text-muted-foreground">Hi, I'm</p>
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
            Your Name
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            A creative developer focused on crafting beautiful and functional digital
            experiences.
          </p>
        </motion.div>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-foreground rounded-full flex justify-center"
        >
          <div className="w-1 h-2 bg-foreground rounded-full mt-2" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
