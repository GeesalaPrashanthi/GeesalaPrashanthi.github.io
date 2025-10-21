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
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Introduction to Big Data with Spark and Hadoop",
    issuer: "IBM (Coursera)",
    description: "Certificate in big data concepts and processing",
    link: "https://www.coursera.org/account/accomplishments/verify/S8PBLLHPANYG",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM (Coursera)",
    description: "Data analysis techniques using Python libraries",
    link: "https://www.coursera.org/account/accomplishments/verify/EJ6AQV59UGR7",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Agile Software Development",
    issuer: "University of Minnesota (Coursera)",
    description: "Foundations of agile methodologies and practices",
    link: "https://www.coursera.org/account/accomplishments/verify/YB42QLB59MKN",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Cloud Computing Foundations",
    issuer: "Duke University (Coursera)",
    description: "Introduction to cloud computing concepts and services",
    link: "https://www.coursera.org/account/accomplishments/verify/GX5L55G5GXCA",
    image: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Database Management Essentials",
    issuer: "University of Colorado System (Coursera)",
    description: "Core database concepts and SQL fundamentals",
    link: "https://www.coursera.org/account/accomplishments/verify/7VFG3PCVPZ2U",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Introduction to Graph Theory",
    issuer: "University of California San Diego (Coursera)",
    description: "Foundational concepts in graph theory and applications",
    link: "https://www.coursera.org/account/accomplishments/verify/DJRJT9EWHLVM",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
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
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <div className="text-white text-lg font-bold drop-shadow-md">
                {cert.title}
              </div>
              <div className="text-white/90 text-sm mt-2">{cert.issuer}</div>
            </div>
          </div>

          {/* Back face */}
          <div
            className="absolute inset-0 flex items-center justify-center bg-card"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-primary-foreground bg-primary px-6 py-3 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              View Certificate
              <ExternalLink className="w-4 h-4" />
            </a>
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
