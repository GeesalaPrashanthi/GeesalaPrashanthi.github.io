import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Github, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters")
});

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(error => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as string] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error for this field when user starts typing
    if (errors[e.target.name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[e.target.name];
        return newErrors;
      });
    }
  };

  return (
    <section 
      id="contact"
      ref={sectionRef}
      className="section-padding"
      style={{ backgroundColor: '#0D1B2A' }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <h2 className="text-5xl font-bold text-white mb-4">
              Let's Work Together
            </h2>
            <div className="h-1 w-16 mx-auto mb-6" style={{ backgroundColor: '#00C2FF' }} />
            <p className="text-xl text-gray-300">
              I'm open to freelance projects or full-time roles
            </p>
          </div>

          {/* Contact Form */}
          <form 
            onSubmit={handleSubmit}
            className={`space-y-6 mb-12 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-400"
                style={{ 
                  borderColor: errors.name ? '#EF4444' : '#4B5563',
                }}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name}</p>
              )}
            </div>

            <div>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-400"
                style={{ 
                  borderColor: errors.email ? '#EF4444' : '#4B5563',
                }}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            <div>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={6}
                className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-400 resize-none"
                style={{ 
                  borderColor: errors.message ? '#EF4444' : '#4B5563',
                }}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message}</p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full text-lg font-semibold transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: '#00C2FF',
                color: '#FFFFFF',
              }}
            >
              Send Message
            </Button>
          </form>

          {/* Social Links */}
          <div className={`text-center transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <p className="text-gray-300 mb-6">Connect with me</p>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/prashanthi-geesala-0495891bb/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-white/10 text-white hover:bg-cyan-400 hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/GeesalaPrashanthi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-white/10 text-white hover:bg-cyan-400 hover:scale-110 transition-all duration-300"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="mailto:pgeesala@bu.edu"
                className="p-4 rounded-full bg-white/10 text-white hover:bg-cyan-400 hover:scale-110 transition-all duration-300"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Prashanthi Geesala. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
