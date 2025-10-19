import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

export const AboutSection = () => {
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
      id="about"
      ref={sectionRef}
      className="section-padding"
      style={{ backgroundColor: '#F8F9FA' }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Profile Image */}
            <div 
              className={`flex justify-center md:justify-end transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              <Card 
                className="relative overflow-hidden shadow-card-hover"
                style={{ 
                  border: '3px solid #00C2FF',
                  borderRadius: '1rem',
                }}
              >
                <img
                  src="https://geesalaprashanthi.github.io/assets/profile-photo-Dur99tQj.jpg"
                  alt="Prashanthi Geesala"
                  className="w-80 h-80 object-cover"
                />
              </Card>
            </div>

            {/* Right: Text Content */}
            <div className="space-y-6">
              <div 
                className={`transition-all duration-700 delay-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0D1B2A' }}>
                  About Me
                </h2>
                <div className="h-1 w-16 mb-6" style={{ backgroundColor: '#00C2FF' }} />
              </div>

              <div 
                className={`space-y-4 text-lg leading-relaxed transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ color: '#0D1B2A' }}
              >
                <p>
                  I'm a data scientist specializing in <strong>machine learning</strong>, <strong>business intelligence</strong>, and <strong>data visualization</strong>. 
                  Currently pursuing my Master's in Data Science at Boston University, I combine technical expertise with business acumen 
                  to deliver impactful solutions.
                </p>

                <p>
                  At Amazon, I <strong>reduced customer churn by identifying 30% of affected customers</strong> through statistical analysis 
                  and built data marts that <strong>saved 0.4 BIE effort annually</strong>. My work spans the full data science lifecycle—from 
                  ETL pipelines to machine learning models to executive dashboards.
                </p>

                <p>
                  I'm passionate about turning complex datasets into clear insights that drive business decisions. Whether it's 
                  <strong> predicting customer behavior</strong>, <strong>optimizing operations</strong>, or <strong>building scalable data infrastructure</strong>, 
                  I thrive on solving challenging problems with data.
                </p>
              </div>

              <div 
                className={`pt-4 transition-all duration-700 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              >
                <div className="flex flex-wrap gap-4 text-sm font-semibold">
                  <div className="px-4 py-2 rounded-full border-2" style={{ 
                    borderColor: '#00C2FF',
                    color: '#0D1B2A',
                  }}>
                    📊 Machine Learning
                  </div>
                  <div className="px-4 py-2 rounded-full border-2" style={{ 
                    borderColor: '#00C2FF',
                    color: '#0D1B2A',
                  }}>
                    📈 Data Analysis
                  </div>
                  <div className="px-4 py-2 rounded-full border-2" style={{ 
                    borderColor: '#00C2FF',
                    color: '#0D1B2A',
                  }}>
                    🎯 Business Impact
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
