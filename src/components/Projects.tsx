import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import actOnMass from "@/assets/act-on-mass.webp";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "Customer Churn Prediction",
    description: `Built a machine learning model to predict customer churn using classification algorithms and XGBoost. Conducted feature engineering and exploratory data analysis (EDA) on customer behavior data to identify key churn drivers. Achieved ~85% accuracy by optimizing model parameters and balancing class distribution. Designed visualizations to communicate churn patterns and customer segments effectively. Delivered actionable insights that supported proactive retention strategies.`,
    techStack: ["Python", "XGBoost", "Classification", "Pandas", "Scikit-learn"],
    image: "https://www.rulex.ai/wp-content/uploads/2022/10/predicting-customer-churn-machinelearning.png",
    github: "https://github.com/GeesalaPrashanthi/Customer-churn-prediction",
  },
  {
    title: "Massachusetts Legislative Roll Call Analyses",
    description: `Built a data pipeline to collect and clean Massachusetts legislative roll call votes.\n\nStructured datasets with bill names, amendments, legislators, and voting records.\n\nDocumented the full ETL and visualization process for reproducibility and stakeholder use.\n\n Next steps: Develop interactive Looker Studio dashboards to explore voting patterns, missed votes, and bill-level transparency.\n\nEnable filtering by topic, bill type, and legislator for detailed analysis.`,
    techStack: ["Python", "Pandas", "ETL", "SQL", "Looker Studio", "Data Visualization"],
    image: actOnMass,
    github: "https://github.com/BU-Spark/ds-act-on-mass",
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-background" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Building data-driven solutions that create measurable business impact
        </p>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group bg-card"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <Badge key={i} variant="outline" className="border-primary/30 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 justify-center">
                  {project.github && (
                    <Button className="bg-primary text-white hover:bg-primary/90" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3">
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
