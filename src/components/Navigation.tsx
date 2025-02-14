
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        duration: 0.75,
        ease: [0.45, 0, 0.55, 1],
      },
    },
    open: {
      x: "0%",
      transition: {
        duration: 0.75,
        ease: [0.45, 0, 0.55, 1],
      },
    },
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      x: 50,
    },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.5,
        ease: [0.45, 0, 0.55, 1],
      },
    }),
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.45, 0, 0.55, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md py-4" : "py-6"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
        <motion.a
          href="#home"
          className="text-2xl font-display font-medium tracking-tight logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          a f
          <span className="logo-dot" />
        </motion.a>
        <button
          onClick={toggleMenu}
          className="relative z-50 w-10 h-10 flex flex-col justify-center items-center"
        >
          <span
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isMenuOpen ? "-rotate-45" : "translate-y-1"
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            style={{ 
              position: 'fixed',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              height: '100vh',
              width: '100%'
            }}
            className="bg-background z-40 flex items-center justify-center"
          >
            <div className="flex flex-col items-center space-y-8">
              {["Work", "About"].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  custom={i}
                  variants={menuItemVariants}
                  className="text-4xl font-display font-medium tracking-tight hover:text-muted transition-colors"
                  onClick={() => {
                    toggleMenu();
                  }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
