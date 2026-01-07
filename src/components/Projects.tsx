import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const projects = [
  {
    title: "NASA System Log Anomaly Detection",
    description: `Built a time series forecasting and anomaly detection system to identify unusual patterns in NASA web server logs. Processed 3.4M+ log entries using Apache Spark and aggregated them into hourly metrics. Implemented ARIMA forecasting in MATLAB to predict 48-hour error rates with 95% confidence intervals. Developed multi-method anomaly detection combining residual-based analysis, change-point detection, and statistical outliers to achieve robust identification. Created composite scoring that flagged 12 high-confidence anomalies representing critical incidents. Generated automated insights reports and interactive visualizations showing error rate timelines, forecasts, and top failing endpoints. Identified key patterns revealing 47% of errors concentrated in top 5 endpoints.`,
    techStack: ["Apache Spark", "MATLAB", "Python", "PySpark", "ARIMA", "Pandas", "Matplotlib", "Seaborn"],
    image: "images/images/nasa_log_anomaly.png",
    github: "https://github.com/GeesalaPrashanthi/NASA-System-log-anomaly-detection",
  },
  {
    title: "Massachusetts Legislative Voting Analyses",
    description: `Built an end-to-end data pipeline and interactive dashboard to increase transparency in Massachusetts state legislature. Engineered asynchronous API requests to extract Senate voting data and developed custom PDF parsing solution using PyMuPDF and Adobe Acrobat OCR to scrape House data. Implemented data cleaning pipeline to handle name variations, special characters, and OCR artifacts. Denormalized datasets combining roll call votes with representative metadata and bill information into master tables. Deployed data to Google BigQuery and created interactive Looker Studio dashboards enabling citizens to analyze voting patterns and representative alignment with leadership.`,
    techStack: ["Python", "PyMuPDF", "Google BigQuery", "Looker Studio", "REST APIs", "SQL", "Pandas"],
    image: "images/images/roll_call.png",
    github: "https://github.com/BU-Spark/ds-act-on-mass/tree/fa25-team-a-dev/fa25-team-a",
  },
  {
    title: "Stroke Risk Prediction",
    description: `Developed a machine learning system to predict stroke risk from patient health data using advanced feature engineering. Created Age-Normalized Risk Index (ANRI) to identify patients with unusually high risk for their age and Chronic Condition Score (CCS) to quantify cardiovascular burden. Performed comprehensive exploratory analysis revealing key risk patterns in younger high-risk patients. Built and evaluated multiple classification models achieving optimized performance metrics. Identified critical symptoms including shortness of breath, chest discomfort, and dizziness strongly associated with high-risk patients. Delivered actionable insights for early intervention and risk stratification in clinical settings. Achieved ~85% model accuracy through hyperparameter optimization and class balancing techniques.`,
    techStack: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Matplotlib", "Seaborn", "Plotly", "Imbalanced-learn"],
    image: "images/images/stroke_risk.png",
    github: "https://github.com/GeesalaPrashanthi/Stroke-Risk-Prediction",
  },
  {
    title: "Customer Churn Prediction",
    description: `Built a machine learning model to predict customer churn using classification algorithms and XGBoost. Conducted comprehensive feature engineering and exploratory data analysis on customer behavior data to identify key churn drivers including contract type, monthly charges, and tenure patterns. Implemented data preprocessing techniques to handle missing values and encode categorical variables. Trained and evaluated multiple classification models achieving ~85% accuracy through hyperparameter optimization and class balancing using SMOTE. Analyzed feature importance revealing month-to-month contracts and high monthly bills as primary churn indicators. Designed interactive visualizations to communicate churn patterns and customer segments effectively. Delivered actionable insights supporting proactive retention strategies for at-risk customer groups.`,
    techStack: ["Python", "XGBoost", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn", "Imbalanced-learn"],
    image: "images/images/churn_prediction.jpg",
    github: "https://github.com/GeesalaPrashanthi/Customer-churn-prediction",
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
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
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="flex-1 flex flex-col p-6 space-y-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground flex-1">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="gap-2">
                        <Github className="h-4 w-4" />
                        View on GitHub
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
