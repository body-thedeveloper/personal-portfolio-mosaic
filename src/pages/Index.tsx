
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Background3D from "@/components/Background3D";

const Index = () => {
  return (
    <main className="relative bg-background">
      <Background3D />
      <CustomCursor />
      <Navigation />
      <Hero />
      <Work />
      <About />
      <Blog />
      <Contact />
    </main>
  );
};

export default Index;
