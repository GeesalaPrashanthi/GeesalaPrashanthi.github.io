import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, BarChart3, Wrench } from "lucide-react";

const skillCategories = [
  {
    category: "Programming & Scripting",
    icon: Code2,
    skills: ["Python", "R", "SQL", "JavaScript"]
  },
  {
    category: "Data Science & ML",
    icon: BarChart3,
    skills: ["Scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "Pandas", "NumPy", "SciPy"]
  },
  {
    category: "Visualization & BI",
    icon: Database,
    skills: ["Tableau", "Power BI", "QuickSight", "Looker Studio", "Matplotlib", "Seaborn", "Plotly"]
  },
  {
    category: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "Docker", "AWS", "Jupyter", "Apache Spark", "ETL", "Statistical Analysis"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl font-bold">Technical Skills</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive toolkit for data science and analytics
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={index}
                  className="shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold">{category.category}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <Badge 
                          key={i}
                          variant="secondary"
                          className="px-3 py-1.5 text-sm bg-background border-2 border-primary/20 hover:bg-primary/10 hover:border-primary transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
