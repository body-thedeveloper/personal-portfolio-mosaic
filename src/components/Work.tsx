
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "Digital Product Design",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
    year: "2024",
  },
  {
    id: 2,
    title: "Project Two",
    description: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    year: "2023",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Brand Identity",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80",
    year: "2023",
  },
];

const Work = () => {
  return (
    <section id="work" className="py-32 md:py-48">
      <div className="max-w-screen-xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight mb-16">
            Selected Work
          </h2>
          <div className="grid gap-24">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative"
              >
                <a 
                  href="#" 
                  className="block relative aspect-[16/9] overflow-hidden bg-accent/5 rounded-lg"
                  onMouseMove={(e) => {
                    const bounds = e.currentTarget.getBoundingClientRect();
                    const x = (e.clientX - bounds.left) / bounds.width;
                    const y = (e.clientY - bounds.top) / bounds.height;
                    e.currentTarget.style.setProperty('--mouse-x', `${x * 100}%`);
                    e.currentTarget.style.setProperty('--mouse-y', `${y * 100}%`);
                  }}
                >
                  <motion.div
                    className="w-full h-full relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.45, 0, 0.55, 1] }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30"
                      style={{
                        background: `radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)`
                      }}
                    />
                  </motion.div>
                </a>
                <motion.div 
                  className="flex justify-between items-start mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div>
                    <h3 className="text-xl font-medium mb-2 tracking-tight">{project.title}</h3>
                    <p className="text-muted">{project.description}</p>
                  </div>
                  <span className="text-sm text-muted">{project.year}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
