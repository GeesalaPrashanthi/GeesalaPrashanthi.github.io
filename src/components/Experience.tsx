import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "education",
    title: "Master's in Data Science",
    organization: "Boston University",
    location: "Massachusetts, US",
    period: "Sep 2025 – Present",
    points: [
      "Relevant coursework:",
      "Tools for Data Science; Math for Data Science and Machine Learning; AI Ethics"
    ]
  },
  {
    type: "work",
    title: "Business Intelligence Engineer",
    organization: "Amazon",
    location: "Bangalore, India",
    period: "Jun 2024 – Jul 2025",
    points: [
      "Built a data mart with 150+ attributes for entitlement studies, reducing 0.4 BIE effort per year",
      "Applied statistical analysis identifying 30% of customers affected by fatigue and cannibalization",
      "Consolidated metrics for 4 ABPL products into QuickSight dashboard tracking 15+ KPIs",
      "Developed QuickSight dashboards with 24+ metrics for Amazon Day delivery campaigns"
    ]
  },
  {
    type: "work",
    title: "Solution Delivery Analyst",
    organization: "Deloitte USI",
    location: "Hyderabad, India",
    period: "Oct 2023 – May 2024",
    points: [
      "Administered endpoint security tools across 15K+ workstations and 3K servers",
      "Reduced incident response times by 20% through proactive monitoring solutions",
      "Built weekly reports to track upgrade status and security tool installations"
    ]
  },
  {
    type: "work",
    title: "Data Analyst Intern",
    organization: "DSAT Consultancy Services",
    location: "Hyderabad, India",
    period: "Jun 2023 – Aug 2023",
    points: [
      "Conducted data analysis and validation using Python and SQL to ensure data accuracy",
      "Developed interactive visualizations using Matplotlib and Seaborn for stakeholder presentations",
      "Contributed to team projects and participated in code reviews to maintain quality standards"
    ]
  },
  {
    type: "education",
    title: "Bachelor's in Electronics and Communication",
    organization: "Malla Reddy College of Engineering",
    location: "Hyderabad, India",
    period: "2019 – 2023",
    points: [
      "GPA: 8.5/10"
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl font-bold">Experience & Education</h2>
            <p className="text-lg text-muted-foreground">
              A journey through professional achievements and academic excellence
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${
                      exp.type === "education" 
                        ? "bg-accent/10 text-accent" 
                        : "bg-primary/10 text-primary"
                    }`}>
                      {exp.type === "education" ? (
                        <GraduationCap className="h-6 w-6" />
                      ) : (
                        <Briefcase className="h-6 w-6" />
                      )}
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                          <p className="text-muted-foreground">{exp.organization}</p>
                        </div>
                        <div className="text-right text-sm">
                          <p className="font-medium text-primary">{exp.period}</p>
                          <p className="text-muted-foreground">{exp.location}</p>
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {exp.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1.5">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
