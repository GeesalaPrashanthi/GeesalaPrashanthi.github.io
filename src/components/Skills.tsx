import { Badge } from "@/components/ui/badge";
import { Code, Database, BarChart3, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: ["Python (Advanced)", "R (Advanced)", "MySQL (Advanced)", "PostgreSQL (Advanced)", "Java", "JavaScript", "HTML", "C"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Visualization",
    skills: ["Tableau", "QuickSight", "Looker", "Stata", "MS Excel", "Seaborn", "Matplotlib"],
  },
  {
    icon: Database,
    title: "Data Technologies",
    skills: ["Hadoop", "Spark", "MATLAB", "Pandas", "Numpy", "Scikit-learn"],
  },
  {
    icon: Wrench,
    title: "Core Competencies",
    skills: ["Data Modeling", "Statistical Analysis", "Data Visualization", "Quantitative Analysis", "Machine Learning", "Regression Analysis"],
  },
];

const Skills = () => {
  return (
    <section className="py-20 bg-accent/30" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
          Technical Skills
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A comprehensive toolkit for data science and business intelligence
        </p>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-lg p-6 shadow-md border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
