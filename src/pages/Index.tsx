
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";

const Index = () => {
  return (
    <main className="relative bg-background">
      <CustomCursor />
      <Navigation />
      <Hero />
      <About />
    </main>
  );
};

export default Index;
