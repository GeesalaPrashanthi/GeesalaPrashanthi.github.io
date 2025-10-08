import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
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
    description: `Built a machine learning model to predict customer churn using classification algorithms (Logistic Regression, XGBoost).\n\nConducted feature engineering and exploratory data analysis (EDA) on customer behavior data to identify churn drivers.\n\nAchieved ~85% accuracy, enabling proactive retention strategies through data-driven insights.`,
  techStack: ["Python", "XGBoost", "Logistic Regression", "Pandas", "Scikit-learn"],
  image: "https://www.rulex.ai/wp-content/uploads/2022/10/predicting-customer-churn-machinelearning.png",
    github: "https://github.com/prashanthigeesala",
  },
  {
    title: "Sales Forecasting / Demand Prediction",
    description: `Developed a sales forecasting model using ARIMA and Prophet to predict future demand and seasonal trends.\n\nPerformed time series analysis and visualization to uncover sales patterns and key performance indicators.\n\nImproved forecasting accuracy by 20%, supporting strategic planning and inventory optimization.`,
    techStack: ["ARIMA", "Prophet", "Time Series", "Python", "Tableau", "Looker"],
  image: "https://hptpedia.hyper-trade.com/content/images/size/w1600/2023/08/Sales-forecast.jpg",
    github: "https://github.com/prashanthigeesala",
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
