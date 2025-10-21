import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const Header = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <a 
            href="#hero" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
            className="flex items-center"
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              PG
            </div>
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            <a 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a 
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("experience");
              }}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Experience
            </a>
            <a 
              href="#education" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("education");
              }}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Education
            </a>
            <a 
              href="#projects" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a 
              href="#skills" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
              }}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a 
              href="#achievements" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("achievements");
              }}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Achievements
            </a>
            <a 
              href="#certificates" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("certificates");
              }}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Certifications
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="rounded-full"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </Button>
      </div>
    </header>
  );
};
