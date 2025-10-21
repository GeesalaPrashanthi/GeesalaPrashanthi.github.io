import { useEffect, useRef } from "react";

const skills = [
  "Python", "R", "SQL", "JavaScript", "Scikit-learn", "TensorFlow", 
  "PyTorch", "XGBoost", "Pandas", "NumPy", "SciPy", "Tableau", 
  "Power BI", "QuickSight", "Looker Studio", "Matplotlib", "Seaborn", 
  "Plotly", "Git", "Docker", "AWS", "Jupyter", "Apache Spark", 
  "ETL", "Statistical Analysis"
];

export const Skills = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 0.5;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section id="skills" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl font-bold">Technical Skills</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive toolkit for data science and analytics
            </p>
          </div>

          <div className="relative">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Scrolling container */}
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-hidden py-8"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {/* Duplicate skills for seamless loop */}
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-6 py-3 bg-card border-2 border-primary/20 rounded-full text-foreground font-medium hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105 shadow-card"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
