import { Briefcase, GraduationCap } from "lucide-react";

interface TimelineItem {
  type: "experience" | "education";
  title: string;
  organization: string;
  location: string;
  period: string;
  description?: string[];
}

const timelineData: TimelineItem[] = [
  {
    type: "education",
    title: "Master's in Data Science",
    organization: "Boston University",
    location: "Massachusetts, US",
    period: "Sep 2025 – Present",
  description: [
      "Relevant coursework:",
      "Tools for Data Science; Math for Data Science and Machine Learning; AI Ethics",
    ],
  },
  {
    type: "experience",
    title: "Business Intelligence Engineer",
    organization: "Amazon",
    location: "Bangalore, India",
    period: "Jun 2024 – Jul 2025",
    description: [
      "Built a data mart with 150+ attributes for entitlement studies, reducing 0.4 BIE effort per year",
      "Applied statistical analysis identifying 30% of customers affected by fatigue and cannibalization",
      "Consolidated metrics for 4 ABPL products into QuickSight dashboard tracking 15+ KPIs",
      "Developed QuickSight dashboards with 24+ metrics for Amazon Day delivery campaigns"
    ],
  },
  {
    type: "experience",
    title: "Solution Delivery Analyst",
    organization: "Deloitte USI",
    location: "Hyderabad, India",
    period: "Oct 2023 – May 2024",
    description: [
      "Administered endpoint security tools across 15K+ workstations and 3K servers",
      "Reduced incident response times by 20% through proactive monitoring solutions",
      "Built weekly reports to track upgrade status and security tool installations"
    ],
  },
  {
    type: "experience",
    title: "Business Intelligence Engineer Intern",
    organization: "Amazon",
    location: "Bangalore, India",
    period: "Jan 2023 – Jun 2023",
    description: [
      "Designed end-to-end data mart for B2B invoicing KPIs, saving 0.8HC per year",
      "Created optimized data model and built ETL pipelines (SQL + Python)",
      "Built QuickSight dashboard providing real-time insights, reducing reporting latency by 12%"
    ],
  },
  {
    type: "experience",
    title: "Advisory Intern",
    organization: "Deloitte USI",
    location: "Hyderabad, India",
    period: "Jun 2022 – Jul 2022",
    description: [
      "Monitored network traffic using OSINT tools including VirusTotal, AbuseIPDB, and URLScan",
      "Investigated 10+ security incidents using Splunk and QRadar",
      "Completed training in email, network and endpoint security"
    ],
  },
  {
    type: "experience",
    title: "Event Management Lead",
    organization: "Association for Computing Machinery - GITAM",
    location: "Visakhapatnam, India",
    period: "Sep 2021 – Apr 2022",
    description: [
      "Planned and executed 17 technical seminars and workshops to boost student exposure to emerging CS topics and practical skills.",
      "Led a 6-member operations team and coordinated logistics with 8 industry and academic speakers to deliver professional, well-attended events."
    ],
  },
  {
    type: "education",
    title: "B.Tech in Computer Science and Engineering",
    organization: "GITAM University",
    location: "Visakhapatnam, India",
    period: "Jun 2019 – Apr 2023",
    description: [
      "Relevant coursework:",
      "Linear Algebra; Probability and Statistics; Numerical Methods; Data Science with Python; Database Management; Cryptography; Big Data; Artificial Intelligence; Cloud Computing; GPA: 9.63/10",
    ],
  },
];

const Timeline = () => {
  return (
    <section className="py-20 bg-background" id="timeline">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
          Experience & Education
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A journey through professional achievements and academic excellence
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            
            {timelineData.map((item, index) => (
              <div key={index} className="relative pl-20 pb-12 last:pb-0">
                {/* Icon */}
                <div className="absolute left-0 top-1 w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-md">
                  {item.type === "experience" ? (
                    <Briefcase className="w-7 h-7 text-primary" />
                  ) : (
                    <GraduationCap className="w-7 h-7 text-primary" />
                  )}
                </div>
                
                {/* Content */}
                <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-border">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    <span className="text-sm text-muted-foreground mt-1 md:mt-0">{item.period}</span>
                  </div>
                  
                  <div className="text-primary font-medium mb-1">{item.organization}</div>
                  <div className="text-sm text-muted-foreground mb-3">{item.location}</div>
                  
                  {item.description && (
                    <ul className="space-y-2">
                      {item.description.map((desc, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2 mt-1.5 flex-shrink-0">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
