import { MapPin, Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-background to-accent/30 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/60 rounded-full blur-2xl opacity-20 scale-110"></div>
              <img
                src={profilePhoto}
                alt="Prashanthi Geesala"
                className="relative w-48 h-48 rounded-full object-cover border-4 border-card shadow-lg"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
            Prashanthi Geesala
          </h1>
          
          <p className="text-2xl md:text-3xl text-primary font-medium mb-6">
            Data Scientist & Business Intelligence Engineer
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Transforming data into actionable insights through advanced analytics, 
            machine learning, and compelling visualizations. Currently pursuing Master's 
            in Data Science at Boston University.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Boston, MA</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:pgeesala@bu.edu" className="hover:text-primary transition-colors">
                pgeesala@bu.edu
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>+1 (617) 549-7446</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button size="lg" variant="outline" className="border-2">
              <Linkedin className="w-4 h-4 mr-2" />
              <a href="https://www.linkedin.com/in/prashanthi-geesala-0495891bb/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
