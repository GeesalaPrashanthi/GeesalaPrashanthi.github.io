import { Briefcase } from "lucide-react";

const experienceData = [
  // 1. BIE Amazon
  {
    title: "Business Intelligence Engineer",
    organization: "Amazon",
    location: "Bangalore, India",
    period: "Jun 2024 – Jul 2025",
    description: [
      "Built a data mart with 150+ attributes for entitlement studies, reducing 0.4 BIE effort per year",
      "Applied statistical analysis identifying 30% of customers affected by fatigue and cannibalization",
      "Consolidated metrics for 4 ABPL products into QuickSight dashboard tracking 15+ KPIs",
    ],
  },
  // 2. Analyst - Deloitte
  {
    title: "Solution Delivery Analyst",
    organization: "Deloitte USI",
    location: "Hyderabad, India",
    period: "Oct 2023 – May 2024",
    description: [
      "Administered endpoint security tools across 15K+ workstations and 3K servers",
      "Reduced incident response times by 20% through proactive monitoring solutions",
    ],
  },
  // 3. BIE Intern
  {
    title: "Business Intelligence Engineer Intern",
    organization: "Amazon",
    location: "Bangalore, India",
    period: "Jan 2023 – Jun 2023",
    description: [
      "Designed end-to-end data mart for B2B invoicing KPIs, saving 0.8HC per year",
      "Created optimized data model and built ETL pipelines (SQL + Python)",
    ],
  },
  // 4. Analyst Intern - Deloitte (renamed)
  {
    title: "Analyst Intern",
    organization: "Deloitte USI",
    location: "Hyderabad, India",
    period: "Jun 2022 – Jul 2022",
    description: [
      "Monitored network traffic using OSINT tools including VirusTotal, AbuseIPDB, and URLScan",
      "Investigated 10+ security incidents using Splunk and QRadar",
    ],
  },
  // 5. Event Management Lead - GITAM
  {
    title: "Event Management Lead",
    organization: "Association for Computing Machinery - GITAM",
    location: "Visakhapatnam, India",
    period: "Sep 2021 – Apr 2022",
    description: [
      "Planned and executed 17 technical seminars and workshops to boost student exposure to emerging CS topics and practical skills.",
      "Led a 6-member operations team and coordinated logistics with 8 industry and academic speakers to deliver professional, well-attended events."
    ],
  },
];

const Experience = () => {
  return (
    <section className="py-20 bg-background" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Experience</h2>
        <div className="max-w-4xl mx-auto mt-8 space-y-8">
          {experienceData.map((item, idx) => (
            <div key={idx} className="bg-card p-6 rounded-lg border border-border shadow-sm">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <div className="text-sm text-muted-foreground">{item.organization} — {item.location}</div>
                </div>
                <div className="text-sm text-muted-foreground">{item.period}</div>
              </div>
              <ul className="list-disc list-inside text-sm text-muted-foreground mt-3 space-y-1">
                {item.description.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
