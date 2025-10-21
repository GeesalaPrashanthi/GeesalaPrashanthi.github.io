import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  description: string;
  link?: string;
  image?: string;
}

const certificates: Certificate[] = [
  {
    title: "Python for Everybody Specialization",
    issuer: "University of Michigan (Coursera)",
    description: "Specialization covering Python programming and data handling",
    link: "https://www.coursera.org/account/accomplishments/specialization/DYDTWZBXAWWV",
    image: "/src/images/python_for_everybody.png",
  },
  {
    title: "Introduction to Big Data with Spark and Hadoop",
    issuer: "IBM (Coursera)",
    description: "Certificate in big data concepts and processing",
    link: "https://www.coursera.org/account/accomplishments/verify/S8PBLLHPANYG",
    image: "/src/images/big_data_with_spark_and_hadoop.png",
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM (Coursera)",
    description: "Data analysis techniques using Python libraries",
    link: "https://www.coursera.org/account/accomplishments/verify/EJ6AQV59UGR7",
    image: "/src/images/data_analysis_with_python.png",
  },
  {
    title: "Agile Software Development",
    issuer: "University of Minnesota (Coursera)",
    description: "Foundations of agile methodologies and practices",
    link: "https://www.coursera.org/account/accomplishments/verify/YB42QLB59MKN",
    image: "/src/images/agile_software_development.png",
  },
  {
    title: "Cloud Computing Foundations",
    issuer: "Duke University (Coursera)",
    description: "Introduction to cloud computing concepts and services",
    link: "https://www.coursera.org/account/accomplishments/verify/GX5L55G5GXCA",
    image: "/src/images/cloud_computing.png",
  },
  {
    title: "Database Management Essentials",
    issuer: "University of Colorado System (Coursera)",
    description: "Core database concepts and SQL fundamentals",
    link: "https://www.coursera.org/account/accomplishments/verify/7VFG3PCVPZ2U",
    image: "/src/images/database_management_essentials.png",
  },
  {
    title: "Introduction to Graph Theory",
    issuer: "University of California San Diego (Coursera)",
    description: "Foundational concepts in graph theory and applications",
    link: "https://www.coursera.org/account/accomplishments/verify/DJRJT9EWHLVM",
    image: "/src/images/introduction_to_graph_theory.png",
  },
];

const smoothScrollBy = (el: HTMLElement | null, delta: number, duration = 600) => {
  if (!el) return;
  const start = el.scrollLeft;
  const end = start + delta;
  const startTime = performance.now();

  function step(now: number) {
    const t = Math.min(1, (now - startTime) / duration);
    const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    el.scrollLeft = Math.round(start + (end - start) * eased);
    if (t < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
};

const CertificateCard: React.FC<{ cert: Certificate }> = ({ cert }) => {
  const [flipped, setFlipped] = useState(false);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setFlipped((s) => !s);
    }
  };

  return (
    <div
      className="flex-none w-80 sm:w-96 snap-start relative"
      tabIndex={0}
      role="button"
      aria-pressed={flipped}
      aria-label={`View ${cert.title} by ${cert.issuer}`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
      onKeyDown={onKeyDown}
    >
      <div
        className="w-full h-56 sm:h-64 rounded-lg overflow-hidden shadow-card relative"
        style={{ perspective: 1000 }}
      >
        <div
          className="relative w-full h-full transition-transform duration-700"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front face */}
          <div
            className="absolute inset-0"
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-full object-cover blur-[2px] brightness-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent backdrop-blur-[1px]"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <div className="text-white text-xl font-bold drop-shadow-lg">
                {cert.title}
              </div>
              <div className="text-white/90 text-base mt-2 font-medium">{cert.issuer}</div>
            </div>
          </div>

          {/* Back face */}
          <div
            className="absolute inset-0"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-full object-cover blur-[2px] brightness-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent backdrop-blur-[1px]"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-white bg-primary/90 backdrop-blur-sm px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-primary transition-all duration-300 shadow-lg"
              >
                View Certificate
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Certificates = () => {
  return (
    <section className="py-20 bg-muted/30" id="certificates">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
          Certifications
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Continuous learning and professional development in data science
        </p>

        <div className="max-w-6xl mx-auto relative py-6">
          <button
            aria-label="Scroll left"
            onClick={() => {
              const el = document.querySelector("#cert-carousel");
              if (el) smoothScrollBy(el as HTMLElement, -320, 600);
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-card/90 backdrop-blur-sm p-3 sm:p-4 rounded-full shadow-lg z-10 text-2xl hover:bg-card transition-colors border border-border"
          >
            ‹
          </button>

          <div
            id="cert-carousel"
            className="overflow-x-auto scroll-smooth py-2 px-6 scrollbar-hide"
          >
            <div className="flex gap-6 snap-x snap-mandatory">
              {certificates.map((cert, index) => (
                <CertificateCard cert={cert} key={index} />
              ))}
            </div>
          </div>

          <button
            aria-label="Scroll right"
            onClick={() => {
              const el = document.querySelector("#cert-carousel");
              if (el) smoothScrollBy(el as HTMLElement, 320, 600);
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-card/90 backdrop-blur-sm p-3 sm:p-4 rounded-full shadow-lg z-10 text-2xl hover:bg-card transition-colors border border-border"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};
