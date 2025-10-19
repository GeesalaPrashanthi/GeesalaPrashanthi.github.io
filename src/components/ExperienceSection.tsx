import { useEffect, useRef, useState } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    role: "Business Intelligence Engineer",
    duration: "Jun 2024 – Jul 2025",
    achievements: [
      "Built a data mart with 150+ attributes for entitlement studies, reducing 0.4 BIE effort per year",
      "Applied statistical analysis identifying 30% of customers affected by fatigue and cannibalization",
      "Consolidated metrics for 4 ABPL products into QuickSight dashboard tracking 15+ KPIs"
    ],
    side: "left"
  },
  {
    company: "Deloitte USI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg",
    role: "Solution Delivery Analyst",
    duration: "Oct 2023 – May 2024",
    achievements: [
      "Administered endpoint security tools across 15K+ workstations and 3K servers",
      "Reduced incident response times by 20% through proactive monitoring solutions",
      "Built weekly reports to track upgrade status and security tool installations"
    ],
    side: "right"
  },
  {
    company: "DSAT Consultancy Services",
    logo: "",
    role: "Data Analyst Intern",
    duration: "Jun 2023 – Aug 2023",
    achievements: [
      "Conducted data analysis and validation using Python and SQL to ensure data accuracy",
      "Developed interactive visualizations using Matplotlib and Seaborn for stakeholder presentations",
      "Contributed to team projects and participated in code reviews to maintain quality standards"
    ],
    side: "left"
  }
];

export const ExperienceSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.2 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4" style={{ color: '#0D1B2A' }}>
              Professional Experience
            </h2>
            <div className="h-1 w-16 mx-auto" style={{ backgroundColor: '#00C2FF' }} />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center line (desktop only) */}
            <div 
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
              style={{ backgroundColor: '#00C2FF' }}
            />

            {/* Timeline Items */}
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  ref={el => itemRefs.current[index] = el}
                  className={`relative transition-all duration-700 ${
                    visibleItems.includes(index) 
                      ? 'opacity-100 translate-x-0' 
                      : `opacity-0 ${exp.side === 'left' ? '-translate-x-12' : 'translate-x-12'}`
                  }`}
                >
                  <div className={`md:grid md:grid-cols-2 gap-8 items-center ${
                    exp.side === 'right' ? 'md:flex-row-reverse' : ''
                  }`}>
                    {/* Content */}
                    <div className={exp.side === 'right' ? 'md:text-right md:col-start-2' : ''}>
                      <div className="bg-white p-6 rounded-lg border-2 shadow-card hover:shadow-card-hover transition-all duration-300"
                        style={{ borderColor: '#E0E0E0' }}
                      >
                        {/* Company Logo */}
                        {exp.logo && (
                          <div className={`mb-4 ${exp.side === 'right' ? 'md:flex md:justify-end' : ''}`}>
                            <div className="w-24 h-12 flex items-center">
                              <img 
                                src={exp.logo} 
                                alt={exp.company}
                                className="max-w-full max-h-full object-contain"
                              />
                            </div>
                          </div>
                        )}

                        <h3 className="text-2xl font-bold mb-1" style={{ color: '#0D1B2A' }}>
                          {exp.company}
                        </h3>
                        <p className="text-lg font-semibold mb-2" style={{ color: '#00C2FF' }}>
                          {exp.role}
                        </p>
                        <p className="text-sm font-medium mb-4" style={{ color: '#6B7280' }}>
                          {exp.duration}
                        </p>

                        <ul className={`space-y-2 ${exp.side === 'right' ? 'md:text-right' : ''}`}>
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              {exp.side === 'left' && <span style={{ color: '#00C2FF' }}>•</span>}
                              <span style={{ color: '#4A5568' }}>{achievement}</span>
                              {exp.side === 'right' && <span style={{ color: '#00C2FF' }}>•</span>}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Timeline Node (desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: '#00C2FF',
                          boxShadow: '0 0 0 4px #FFFFFF, 0 0 0 6px #00C2FF',
                        }}
                      >
                        <Briefcase className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    {/* Mobile indicator */}
                    <div className="md:hidden absolute -left-4 top-8">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: '#00C2FF' }}
                      >
                        <Briefcase className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
