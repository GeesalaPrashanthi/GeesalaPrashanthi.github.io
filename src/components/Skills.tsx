import { useEffect, useRef } from "react";
import { 
  Code2, Database, BarChart3, GitBranch, Box, Cloud, 
  Activity, Brain, LineChart, Table, Boxes, Workflow,
  FileCode, Server, BookOpen, TestTube
} from "lucide-react";

const skillsRow1 = [
  { name: "Python", icon: Code2 },
  { name: "R", icon: Activity },
  { name: "SQL", icon: Database },
  { name: "JavaScript", icon: FileCode },
  { name: "Scikit-learn", icon: Brain },
  { name: "TensorFlow", icon: Brain },
  { name: "PyTorch", icon: Brain },
  { name: "XGBoost", icon: LineChart },
  { name: "Pandas", icon: Table },
  { name: "NumPy", icon: TestTube },
  { name: "SciPy", icon: TestTube },
  { name: "Tableau", icon: BarChart3 },
];

const skillsRow2 = [
  { name: "Power BI", icon: BarChart3 },
  { name: "QuickSight", icon: LineChart },
  { name: "Looker Studio", icon: BarChart3 },
  { name: "Matplotlib", icon: LineChart },
  { name: "Seaborn", icon: LineChart },
  { name: "Plotly", icon: BarChart3 },
  { name: "Git", icon: GitBranch },
  { name: "Docker", icon: Box },
  { name: "AWS", icon: Cloud },
  { name: "Jupyter", icon: BookOpen },
  { name: "Apache Spark", icon: Server },
  { name: "ETL", icon: Workflow },
  { name: "Statistical Analysis", icon: Activity },
];

export const Skills = () => {
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer1 = scrollRef1.current;
    const scrollContainer2 = scrollRef2.current;
    
    let animationId1: number;
    let animationId2: number;
    let scrollPosition1 = 0;
    let scrollPosition2 = 0;

    // Scroll right
    const scroll1 = () => {
      if (!scrollContainer1) return;
      scrollPosition1 += 0.5;
      if (scrollPosition1 >= scrollContainer1.scrollWidth / 2) {
        scrollPosition1 = 0;
      }
      scrollContainer1.scrollLeft = scrollPosition1;
      animationId1 = requestAnimationFrame(scroll1);
    };

    // Scroll left
    const scroll2 = () => {
      if (!scrollContainer2) return;
      scrollPosition2 -= 0.5;
      if (scrollPosition2 <= 0) {
        scrollPosition2 = scrollContainer2.scrollWidth / 2;
      }
      scrollContainer2.scrollLeft = scrollPosition2;
      animationId2 = requestAnimationFrame(scroll2);
    };

    if (scrollContainer1) {
      animationId1 = requestAnimationFrame(scroll1);
    }
    
    if (scrollContainer2) {
      scrollPosition2 = scrollContainer2.scrollWidth / 2;
      animationId2 = requestAnimationFrame(scroll2);
    }

    return () => {
      cancelAnimationFrame(animationId1);
      cancelAnimationFrame(animationId2);
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl font-bold">Technical Skills</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive toolkit for data science and analytics
            </p>
          </div>

          <div className="space-y-6">
            {/* First row - scrolling right */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

              <div
                ref={scrollRef1}
                className="flex gap-4 overflow-x-hidden py-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {[...skillsRow1, ...skillsRow1].map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={index}
                      className="flex-shrink-0 flex items-center gap-3 px-6 py-3 bg-card border-2 border-primary/20 rounded-full text-foreground font-medium hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105 shadow-card"
                    >
                      <Icon className="h-5 w-5 text-primary" />
                      {skill.name}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Second row - scrolling left */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

              <div
                ref={scrollRef2}
                className="flex gap-4 overflow-x-hidden py-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {[...skillsRow2, ...skillsRow2].map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={index}
                      className="flex-shrink-0 flex items-center gap-3 px-6 py-3 bg-card border-2 border-primary/20 rounded-full text-foreground font-medium hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105 shadow-card"
                    >
                      <Icon className="h-5 w-5 text-primary" />
                      {skill.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
