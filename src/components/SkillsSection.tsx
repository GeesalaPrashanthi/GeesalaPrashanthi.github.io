import { useEffect, useRef, useState } from "react";
import { Code2, Database, BarChart3, Wrench, Brain, Cloud } from "lucide-react";

const skills = [
  { name: "Python", icon: Code2, detail: "Primary language for ML & data analysis" },
  { name: "SQL", icon: Database, detail: "Advanced queries & database optimization" },
  { name: "R", icon: BarChart3, detail: "Statistical analysis & modeling" },
  { name: "TensorFlow", icon: Brain, detail: "Deep learning frameworks" },
  { name: "Tableau", icon: BarChart3, detail: "Interactive data visualization" },
  { name: "PowerBI", icon: BarChart3, detail: "Business intelligence dashboards" },
  { name: "AWS", icon: Cloud, detail: "Cloud data infrastructure" },
  { name: "Scikit-learn", icon: Brain, detail: "Machine learning modeling" },
  { name: "Pandas", icon: Code2, detail: "Data manipulation & analysis" },
  { name: "XGBoost", icon: Brain, detail: "Gradient boosting for ML" },
  { name: "QuickSight", icon: BarChart3, detail: "AWS analytics & visualization" },
  { name: "Docker", icon: Wrench, detail: "Containerization & deployment" },
];

export const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="section-padding"
      style={{ backgroundColor: '#F8F9FA' }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4" style={{ color: '#0D1B2A' }}>
              Technical Skills
            </h2>
            <div className="h-1 w-16 mx-auto" style={{ backgroundColor: '#00C2FF' }} />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className={`relative group transition-all duration-500 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex flex-col items-center gap-3">
                    {/* Icon Container */}
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: hoveredSkill === skill.name ? '#00C2FF' : '#FFFFFF',
                        border: '2px solid #00C2FF',
                        boxShadow: hoveredSkill === skill.name ? '0 0 20px rgba(0, 194, 255, 0.5)' : 'none',
                      }}
                    >
                      <Icon
                        className="h-7 w-7 transition-colors duration-300"
                        style={{
                          color: hoveredSkill === skill.name ? '#FFFFFF' : '#00C2FF',
                        }}
                      />
                    </div>

                    {/* Skill Name */}
                    <p className="text-sm font-semibold text-center" style={{ color: '#0D1B2A' }}>
                      {skill.name}
                    </p>

                    {/* Tooltip */}
                    <div
                      className={`absolute top-20 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg text-xs text-center whitespace-nowrap pointer-events-none transition-all duration-300 z-10 ${
                        hoveredSkill === skill.name ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                      }`}
                      style={{
                        backgroundColor: '#0D1B2A',
                        color: '#FFFFFF',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                      }}
                    >
                      {skill.detail}
                      <div
                        className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45"
                        style={{ backgroundColor: '#0D1B2A' }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Skills Note */}
          <div className="mt-12 text-center">
            <p className="text-lg" style={{ color: '#4A5568' }}>
              and more tools including <strong>NumPy, SciPy, Matplotlib, Seaborn, Git, Jupyter, Apache Spark...</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
