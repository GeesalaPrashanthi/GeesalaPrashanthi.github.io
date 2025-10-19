import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Customer Churn Prediction",
    subtitle: "ML Classification & Feature Engineering",
    description: `Built a machine learning model to predict customer churn using classification algorithms and XGBoost. Conducted feature engineering and exploratory data analysis (EDA) on customer behavior data to identify key churn drivers.`,
    fullDescription: `This project focused on predicting customer churn using advanced machine learning techniques. I developed a comprehensive pipeline that included:

• Feature Engineering: Created 25+ derived features from customer behavior data including usage patterns, tenure, and transaction history
• Model Development: Implemented and compared multiple classification algorithms (Logistic Regression, Random Forest, XGBoost)
• Optimization: Achieved ~85% accuracy through hyperparameter tuning and SMOTE for class imbalance
• Visualization: Built interactive dashboards showing churn patterns across customer segments
• Business Impact: Delivered actionable insights that supported proactive retention strategies, potentially saving millions in customer lifetime value`,
    insights: [
      "Achieved 85% accuracy in predicting customer churn",
      "Identified top 10 features driving churn behavior",
      "Reduced false negatives by 30% through model optimization",
      "Created customer segmentation for targeted retention campaigns"
    ],
    techStack: ["Python", "XGBoost", "Classification", "Pandas", "Scikit-learn"],
    image: "https://www.rulex.ai/wp-content/uploads/2022/10/predicting-customer-churn-machinelearning.png",
    github: "https://github.com/GeesalaPrashanthi/Customer-churn-prediction",
  },
  {
    title: "Massachusetts Legislative Analysis",
    subtitle: "ETL Pipeline & Data Visualization",
    description: `Built a comprehensive data pipeline to collect and clean Massachusetts legislative roll call votes. Structured datasets with bill names, amendments, legislators, and voting records for transparency.`,
    fullDescription: `This project created a robust data infrastructure for analyzing Massachusetts legislative voting patterns:

• Data Pipeline: Developed automated ETL process to collect, clean, and structure legislative data from multiple sources
• Database Design: Created normalized schema tracking bills, amendments, legislators, and voting records
• Data Quality: Implemented validation checks ensuring 99% data accuracy
• Documentation: Comprehensive documentation of ETL process for reproducibility
• Future Development: Planned interactive Looker Studio dashboards for exploring voting patterns, missed votes, and bill-level transparency

The system enables filtering by topic, bill type, and legislator for detailed analysis, supporting civic engagement and government accountability.`,
    insights: [
      "Processed 5,000+ roll call votes across multiple legislative sessions",
      "Structured data for 200+ legislators and 1,000+ bills",
      "Documented full ETL process for team reproducibility",
      "Enabled stakeholder access to voting transparency data"
    ],
    techStack: ["Python", "Pandas", "ETL", "SQL", "Looker Studio", "Data Visualization"],
    image: "https://images.unsplash.com/photo-1555374018-13a8994ab246?w=800&q=80",
    github: "https://github.com/BU-Spark/ds-act-on-mass",
  },
  {
    title: "Amazon QuickSight Dashboards",
    subtitle: "Business Intelligence & Metrics Tracking",
    description: `Developed comprehensive QuickSight dashboards tracking 15+ KPIs for Amazon Business Prime Launch (ABPL) products and Amazon Day delivery campaigns.`,
    fullDescription: `Created enterprise-level business intelligence solutions for Amazon's strategic initiatives:

• Dashboard Development: Built 5+ interactive QuickSight dashboards with 24+ metrics tracking delivery performance
• Metrics Consolidation: Unified tracking for 4 ABPL products into single comprehensive dashboard
• Data Integration: Connected multiple data sources including Redshift, S3, and internal APIs
• Performance Optimization: Achieved sub-2-second query response times through efficient data modeling
• Stakeholder Impact: Enabled data-driven decision making for executives and product teams

The dashboards provided real-time visibility into campaign performance, customer behavior, and operational efficiency.`,
    insights: [
      "Consolidated 15+ KPIs into unified tracking system",
      "Reduced manual reporting effort by 40%",
      "Enabled real-time monitoring of delivery campaigns",
      "Supported executive decision-making with automated insights"
    ],
    techStack: ["AWS QuickSight", "SQL", "Redshift", "S3", "Data Modeling", "BI"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    github: "",
  }
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4" style={{ color: '#0D1B2A' }}>
              Selected Projects
            </h2>
            <div className="h-1 w-16 mx-auto" style={{ backgroundColor: '#00C2FF' }} />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`group cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-card hover:shadow-card-hover ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ 
                  animationDelay: `${index * 0.15}s`,
                  border: '1px solid #E0E0E0',
                }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <ArrowRight className="h-12 w-12 mb-2 mx-auto" style={{ color: '#00C2FF' }} />
                      <p className="text-lg font-semibold">See Details</p>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#0D1B2A' }}>
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium mb-3" style={{ color: '#00C2FF' }}>
                      {project.subtitle}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-xs px-2 py-1"
                        style={{
                          backgroundColor: '#E0F7FF',
                          color: '#006D86',
                        }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold" style={{ color: '#0D1B2A' }}>
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedProject && (
            <div className="space-y-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg"
              />

              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold mb-2" style={{ color: '#00C2FF' }}>
                    Project Overview
                  </h4>
                  <p className="whitespace-pre-line leading-relaxed" style={{ color: '#4A5568' }}>
                    {selectedProject.fullDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3" style={{ color: '#00C2FF' }}>
                    Key Insights & Outcomes
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.insights.map((insight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span style={{ color: '#00C2FF' }}>✓</span>
                        <span style={{ color: '#4A5568' }}>{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, i) => (
                    <Badge
                      key={i}
                      style={{
                        backgroundColor: '#E0F7FF',
                        color: '#006D86',
                      }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {selectedProject.github && (
                  <Button
                    className="w-full"
                    style={{ backgroundColor: '#00C2FF', color: '#FFFFFF' }}
                    asChild
                  >
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github className="h-5 w-5" />
                      View on GitHub
                    </a>
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
