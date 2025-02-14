
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-32 md:py-48 bg-secondary">
      <div className="max-w-screen-xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight mb-12">
            Contact
          </h2>
          <div className="space-y-8">
            <p className="text-lg text-muted leading-relaxed">
              Let's work together! Feel free to reach out for collaborations or just a friendly hello.
            </p>
            <div className="space-y-4">
              <motion.a
                href="mailto:your.email@example.com"
                className="inline-block text-xl font-display hover:text-muted transition-colors"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                your.email@example.com
              </motion.a>
              <div className="flex gap-6">
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-foreground transition-colors"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  Twitter
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-foreground transition-colors"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  LinkedIn
                </motion.a>
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-foreground transition-colors"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  GitHub
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
