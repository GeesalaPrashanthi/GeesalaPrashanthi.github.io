import { Card, CardContent } from "@/components/ui/card";
import { Building2, MapPin } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Business Intelligence Engineer",
    organization: "Amazon",
    location: "Bangalore, India",
    period: "Jun 2024 – Jul 2025",
    points: [
      "Built a robust data mart with 150+ attributes to automate entitlement studies, saving 0.4 HC annually",
      "Partnered with product, marketing, and analytics teams to standardize KPIs and validate critical metrics",
      "Developed scalable data solutions that replaced manual offline analyses, reducing turnaround time",
      "Created unified dashboards tracking 15+ KPIs, improving visibility across multiple product lines",
      "Applied advanced statistical analysis to uncover that 30% of customers faced fatigue and cannibalization",
      "Integrated multi-product exposure data enabling marketing to analyze crossover impacts on user behavior",
      "Identified account ownership discrepancies affecting cashback, facilitating timely corrections with partners",
      "Delivered actionable reports on promotional offers and delivery adoption to guide business strategy",
      "Built marketing channel reports aggregating data across global marketplaces for executive reviews",
      "Monitored competitor launches and advised marketing teams on optimizing customer targeting strategies"
    ]
  },
  {
    type: "work",
    title: "Solution Delivery Analyst",
    organization: "Deloitte USI",
    location: "Hyderabad, India",
    period: "Oct 2023 – May 2024",
    points: [
      "Managed endpoint security tools across 15,000+ workstations and 3,000 servers to maintain security posture",
      "Reduced incident response time by 20% through deployment of proactive monitoring and alert systems",
      "Coordinated patch management and vulnerability remediation to close security gaps efficiently",
      "Developed reports to track security incidents and system health metrics in real time",
      "Maintained compliance documentation to support audits and internal controls",
      "Assisted in delivering security awareness training to increase organizational cybersecurity readiness",
      "Supported rollout and configuration of advanced endpoint protection technologies across teams"
    ]
  },
  {
    type: "work",
    title: "Business Intelligence Engineer Intern",
    organization: "Amazon",
    location: "Bangalore, India",
    period: "Jan 2023 – Jun 2023",
    points: [
      "Designed an end-to-end data mart for B2B invoicing KPIs, saving 0.8 HC per year in manual reporting",
      "Built efficient ETL pipelines and optimized data models using SQL and Python for faster processing",
      "Collaborated with business stakeholders to define and validate key invoicing metrics and reports",
      "Ensured data quality through rigorous validation and consistency checks for reliable insights",
      "Developed interactive dashboards to translate complex data into user-friendly visualizations",
      "Documented data workflows and architecture to support scalability and maintenance"
    ]
  },
  {
    type: "work",
    title: "Analyst Intern",
    organization: "Deloitte USI",
    location: "Hyderabad, India",
    period: "Jun 2022 – Jul 2022",
    points: [
      "Monitored network traffic using OSINT tools like VirusTotal, AbuseIPDB, and URLScan to detect threats",
      "Investigated security incidents using Splunk and QRadar, supporting timely response",
      "Prepared detailed incident reports and documented findings for internal and client review",
      "Conducted vulnerability assessments to identify and help remediate network security weaknesses",
      "Assisted senior analysts with malware analysis and cyber threat intelligence gathering",
      "Shared relevant threat information to enhance team awareness and response readiness"
    ]
  },
  {
    type: "work",
    title: "Event Management Lead",
    organization: "Association for Computing Machinery - GITAM",
    location: "Visakhapatnam, India",
    period: "Sep 2021 – Apr 2022",
    points: [
      "Planned and executed 17 technical seminars and workshops to expose students to emerging CS topics",
      "Led a 3-member operations team and coordinated logistics with 8 industry and academic guest speakers",
      "Managed event budgeting and resource allocation to ensure seamless execution within constraints",
      "Created and implemented promotional campaigns to maximize student attendance and engagement",
      "Established partnerships with external organizations to secure sponsorships and support",
      "Collected and analyzed post-event feedback to improve future seminar planning and delivery"
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl font-bold">Professional Experience</h2>
            <p className="text-lg text-muted-foreground">
              Professional roles and projects I contributed to
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-2"
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-primary" />
                          <p className="text-lg font-medium">{exp.organization}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <p className="text-muted-foreground">{exp.location}</p>
                        </div>
                      </div>
                      <p className="text-sm font-medium text-primary mt-2">{exp.period}</p>
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
