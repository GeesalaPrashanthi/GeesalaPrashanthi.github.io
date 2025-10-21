import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 blur-2xl animate-pulse" />
              <img
                src="/src/images/profile_photo.png"
                alt="Prashanthi Geesala"
                className="relative w-56 h-56 rounded-full object-cover border-4 border-background shadow-glow"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold">
              Prashanthi Geesala
            </h1>
            <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Data Scientist & Business Intelligence Engineer
            </p>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transforming data into actionable insights through advanced analytics, machine learning, 
            and compelling visualizations. Currently pursuing Master's in Data Science at Boston University.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Boston, MA</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <a href="mailto:pgeesala@bu.edu" className="hover:text-primary transition-colors">
                pgeesala@bu.edu
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:+16175497446" className="hover:text-primary transition-colors">
                +1 (617) 549-7446
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="gradient-primary shadow-glow hover:shadow-xl transition-all"
              onClick={scrollToContact}
            >
              Get in Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 hover:bg-accent/10"
              asChild
            >
              <a 
                href="https://www.linkedin.com/in/prashanthi-geesala-0495891bb/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
