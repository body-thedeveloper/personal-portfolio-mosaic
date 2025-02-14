
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <section id="blog" className="py-32 md:py-48">
      <div className="max-w-screen-xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight mb-12">
            Blog
          </h2>
          <div className="grid gap-8">
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
            >
              <h3 className="text-xl font-display font-medium mb-2">The Future of Web Design</h3>
              <p className="text-muted mb-4">Exploring upcoming trends and technologies shaping the web design landscape.</p>
              <span className="text-sm text-muted">March 15, 2024</span>
            </motion.article>
            
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
            >
              <h3 className="text-xl font-display font-medium mb-2">Creating Meaningful Digital Experiences</h3>
              <p className="text-muted mb-4">A deep dive into user-centered design principles and their impact.</p>
              <span className="text-sm text-muted">March 1, 2024</span>
            </motion.article>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
