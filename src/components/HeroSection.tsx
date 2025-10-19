import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0D1B2A 0%, #1B2838 100%)',
      }}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300C2FF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6 animate-fade-slide-in">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Prashanthi Geesala
            </h1>
            <div className="h-1 w-24 mx-auto" style={{ backgroundColor: '#00C2FF' }} />
            <p className="text-3xl md:text-4xl lg:text-5xl font-semibold" style={{ color: '#00C2FF' }}>
              Data Scientist & ML Engineer
            </p>
          </div>

          <p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            Transforming complex data into actionable insights through advanced analytics and machine learning
          </p>

          <div 
            className="pt-4 animate-scale-in"
            style={{ animationDelay: '0.4s' }}
          >
            <Button 
              size="lg"
              onClick={scrollToProjects}
              className="text-lg px-8 py-6 font-semibold transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: '#00C2FF',
                color: '#FFFFFF',
              }}
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer animate-bounce-subtle"
        aria-label="Scroll to about section"
      >
        <span className="text-sm font-medium">Scroll</span>
        <ChevronDown className="h-6 w-6" />
      </button>
    </section>
  );
};
