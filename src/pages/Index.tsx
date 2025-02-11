
import { useEffect } from "react";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";

const Index = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/framer-motion@10.16.4/dist/framer-motion.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="relative">
      <CustomCursor />
      <Navigation />
      <Hero />
      <About />
    </main>
  );
};

export default Index;
