
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-32 md:py-48 bg-secondary">
      <div className="max-w-screen-xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight mb-12">
            About
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-base sm:text-lg text-muted leading-relaxed mb-6">
                As a Digital Product Designer, I specialize in creating intuitive and 
                engaging digital experiences. My approach combines user-centered design 
                principles with creative problem-solving to deliver impactful solutions.
              </p>
              <p className="text-base sm:text-lg text-muted leading-relaxed">
                Through careful attention to detail and a deep understanding of user 
                needs, I craft interfaces that not only look beautiful but also 
                provide meaningful interactions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-display font-medium mb-6">Experience</h3>
              <ul className="space-y-6 text-muted">
                <li>
                  <div className="font-medium text-foreground">Senior Product Designer</div>
                  <div className="text-sm">2020 — Present</div>
                </li>
                <li>
                  <div className="font-medium text-foreground">UI/UX Designer</div>
                  <div className="text-sm">2018 — 2020</div>
                </li>
                <li>
                  <div className="font-medium text-foreground">Visual Designer</div>
                  <div className="text-sm">2016 — 2018</div>
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
