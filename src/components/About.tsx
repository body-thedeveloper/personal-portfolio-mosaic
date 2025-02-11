
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            I'm a passionate developer with a keen eye for design and a deep
            understanding of user experience. With years of experience in web
            development, I specialize in creating intuitive and engaging digital
            solutions.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            My approach combines clean code with creative problem-solving,
            resulting in websites and applications that not only look great but
            also perform exceptionally well.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
