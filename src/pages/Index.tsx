import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Timeline />
      <Skills />
      <Projects />
      <Achievements />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
