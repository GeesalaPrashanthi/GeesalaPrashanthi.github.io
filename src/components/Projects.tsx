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
    title: "Amazon BI Dashboard Suite",
    description: "Developed comprehensive QuickSight dashboards tracking 24+ metrics for delivery campaigns and consolidated 4 ABPL products with 15+ KPIs, improving cross-team decision-making efficiency by 10%.",
    techStack: ["QuickSight", "SQL", "Python", "AWS"],
    image: project1,
    github: "https://github.com/prashanthigeesala",
  },
  {
    title: "Customer Segmentation ML Model",
    description: "Applied statistical analysis and machine learning to identify customer acquisition issues, discovering 30% of customers affected by fatigue and cannibalization patterns in EU SBCC Credit card campaigns.",
    techStack: ["Python", "Scikit-learn", "Pandas", "Statistical Analysis"],
    image: project2,
    github: "https://github.com/prashanthigeesala",
  },
  {
    title: "B2B Invoicing Data Mart",
    description: "Designed end-to-end data mart for B2B invoicing KPIs supporting Pay by Invoicing for Amazon Business, eliminating 5 redundant reports and automating processes to save 0.8HC per year.",
    techStack: ["SQL", "Python", "ETL", "Data Modeling"],
    image: project3,
    github: "https://github.com/prashanthigeesala",
  },
  {
    title: "Big Data Analytics Pipeline",
    description: "Built scalable ETL pipelines processing large-scale datasets using Hadoop and Spark, reducing reporting latency by 12% while ensuring data quality and real-time insights delivery.",
    techStack: ["Hadoop", "Spark", "Python", "SQL"],
    image: project4,
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
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
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
                
                <div className="flex gap-3">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
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
