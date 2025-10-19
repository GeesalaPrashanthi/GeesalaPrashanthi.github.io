import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Customer Churn Prediction",
    description: `Built a machine learning model to predict customer churn using classification algorithms and XGBoost. Conducted feature engineering and exploratory data analysis (EDA) on customer behavior data to identify key churn drivers. Achieved ~85% accuracy by optimizing model parameters and balancing class distribution. Designed visualizations to communicate churn patterns and customer segments effectively. Delivered actionable insights that supported proactive retention strategies.`,
    techStack: ["Python", "XGBoost", "Classification", "Pandas", "Scikit-learn"],
    image: "https://www.rulex.ai/wp-content/uploads/2022/10/predicting-customer-churn-machinelearning.png",
    github: "https://github.com/GeesalaPrashanthi/Customer-churn-prediction",
  },
  {
    title: "Massachusetts Legislative Roll Call Analyses",
    description: `Built a data pipeline to collect and clean Massachusetts legislative roll call votes. Structured datasets with bill names, amendments, legislators, and voting records. Documented the full ETL and visualization process for reproducibility and stakeholder use.\n\nNext steps: Develop interactive Looker Studio dashboards to explore voting patterns, missed votes, and bill-level transparency. Enable filtering by topic, bill type, and legislator for detailed analysis.`,
    techStack: ["Python", "Pandas", "ETL", "SQL", "Looker Studio", "Data Visualization"],
    image: "https://images.unsplash.com/photo-1555374018-13a8994ab246?w=800&q=80",
    github: "https://github.com/BU-Spark/ds-act-on-mass",
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl font-bold">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              Showcasing data science and analytics solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-2 flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-56 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                <CardHeader>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </CardHeader>

                <CardContent className="flex-1 space-y-4">
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex gap-3">
                  <Button 
                    variant="default"
                    className="flex-1 gradient-primary shadow-md hover:shadow-glow"
                    asChild
                  >
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
