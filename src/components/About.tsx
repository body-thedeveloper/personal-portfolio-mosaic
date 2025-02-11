
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-32 md:py-48 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-12">
            About
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                A passionate digital designer and developer with a focus on creating
                meaningful and impactful user experiences. With a keen eye for detail
                and a deep understanding of modern design principles.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                I combine strategic thinking with creative execution to deliver
                solutions that not only look beautiful but also drive results.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-display font-bold mb-4">Experience</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li>
                  <div className="font-medium">Senior Designer</div>
                  <div className="text-sm">2020 - Present</div>
                </li>
                <li>
                  <div className="font-medium">UI/UX Designer</div>
                  <div className="text-sm">2018 - 2020</div>
                </li>
                <li>
                  <div className="font-medium">Frontend Developer</div>
                  <div className="text-sm">2016 - 2018</div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
