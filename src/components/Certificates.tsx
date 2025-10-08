import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink } from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  description: string;
  link?: string;
}

const certificates: Certificate[] = [
  {
    title: "Python for Everybody Specialization",
    issuer: "University of Michigan (Coursera)",
    description: "Comprehensive Python programming course covering data structures, web scraping, and database management.",
    link: "https://www.coursera.org/specializations/python",
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM (Coursera)",
    description: "Professional certification in data analysis techniques using Python libraries including Pandas, NumPy, and Matplotlib.",
    link: "https://www.coursera.org/learn/data-analysis-with-python",
  },
  {
    title: "Big Data with Spark and Hadoop",
    issuer: "IBM (Coursera)",
    description: "Certification in big data processing technologies, distributed computing, and large-scale data analytics.",
    link: "https://www.coursera.org/learn/big-data-hadoop-spark",
  },
  {
    title: "Machine Learning A-Z",
    issuer: "Udemy",
    description: "Complete machine learning bootcamp covering regression, classification, clustering, and deep learning algorithms.",
    link: "https://www.udemy.com/course/machinelearning/",
  },
];

const Certificates = () => {
  return (
    <section className="py-20 bg-accent/30" id="certificates">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
          Certifications
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Continuous learning and professional development in data science
        </p>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className="p-6 border border-border hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {cert.description}
                  </p>
                  
                  {cert.link && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        View Certificate
                        <ExternalLink className="w-3 h-3 ml-2" />
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

export default Certificates;
