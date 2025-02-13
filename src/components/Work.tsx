
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "Digital Product Design",
    image: "/placeholder.svg",
    year: "2024",
  },
  {
    id: 2,
    title: "Project Two",
    description: "UI/UX Design",
    image: "/placeholder.svg",
    year: "2023",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Brand Identity",
    image: "/placeholder.svg",
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
                <a href="#" className="block relative aspect-[16/9] overflow-hidden bg-accent/5">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.45, 0, 0.55, 1] }}
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                <div className="flex justify-between items-start mt-6">
                  <div>
                    <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                    <p className="text-muted">{project.description}</p>
                  </div>
                  <span className="text-sm text-muted">{project.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
