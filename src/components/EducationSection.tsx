import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "Boston University",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/Boston_University_wordmark.svg",
    degree: "Master's in Data Science",
    date: "Sep 2025 – Present",
    description: "Relevant coursework: Tools for Data Science, Math for Data Science and Machine Learning, AI Ethics",
  },
  {
    institution: "Malla Reddy College of Engineering",
    logo: "",
    degree: "Bachelor's in Electronics and Communication",
    date: "2019 – 2023",
    description: "GPA: 8.5/10",
  }
];

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    date: "2024",
  },
  {
    name: "Data Science Professional Certificate",
    issuer: "IBM via Coursera",
    logo: "",
    date: "2023",
  }
];

export const EducationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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
      id="education" 
      ref={sectionRef}
      className="section-padding"
      style={{ backgroundColor: '#F8F9FA' }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Education */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-4" style={{ color: '#0D1B2A' }}>
                Education
              </h2>
              <div className="h-1 w-16 mx-auto" style={{ backgroundColor: '#00C2FF' }} />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className={`group hover:-translate-y-2 transition-all duration-500 shadow-card hover:shadow-card-hover ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ 
                    animationDelay: `${index * 0.15}s`,
                    border: '1px solid #E0E0E0',
                  }}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div 
                        className="p-3 rounded-lg flex-shrink-0"
                        style={{ backgroundColor: '#E0F7FF' }}
                      >
                        <GraduationCap className="h-6 w-6" style={{ color: '#00C2FF' }} />
                      </div>
                      <div className="flex-1">
                        {edu.logo && (
                          <div className="mb-3 h-8">
                            <img 
                              src={edu.logo} 
                              alt={edu.institution}
                              className="max-w-full max-h-full object-contain"
                            />
                          </div>
                        )}
                        <h3 className="text-xl font-bold mb-1" style={{ color: '#0D1B2A' }}>
                          {edu.institution}
                        </h3>
                        <p className="text-lg font-semibold mb-2" style={{ color: '#00C2FF' }}>
                          {edu.degree}
                        </p>
                        <p className="text-sm font-medium mb-3" style={{ color: '#6B7280' }}>
                          {edu.date}
                        </p>
                        <p className="text-sm" style={{ color: '#4A5568' }}>
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-4" style={{ color: '#0D1B2A' }}>
                Certifications
              </h2>
              <div className="h-1 w-16 mx-auto" style={{ backgroundColor: '#00C2FF' }} />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className={`group hover:-translate-y-2 transition-all duration-500 shadow-card hover:shadow-card-hover ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ 
                    animationDelay: `${(index + education.length) * 0.15}s`,
                    border: '1px solid #E0E0E0',
                  }}
                >
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      {cert.logo && (
                        <div className="h-10 mb-4">
                          <img 
                            src={cert.logo} 
                            alt={cert.issuer}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      )}
                      <h3 className="text-xl font-bold" style={{ color: '#0D1B2A' }}>
                        {cert.name}
                      </h3>
                      <p className="text-base" style={{ color: '#00C2FF' }}>
                        {cert.issuer}
                      </p>
                      <p className="text-sm font-medium" style={{ color: '#6B7280' }}>
                        Issued: {cert.date}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
