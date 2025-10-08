import { Mail, MapPin, Phone, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <section className="py-20 bg-card" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
          Get in Touch
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Let's discuss how data-driven insights can transform your business
        </p>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Contact Information
            </h3>
            
            <div className="space-y-6 mb-8">
              <Card className="p-4 border border-border hover:border-primary/50 transition-colors bg-background">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a 
                      href="mailto:pgeesala@bu.edu" 
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      pgeesala@bu.edu
                    </a>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 border border-border hover:border-primary/50 transition-colors bg-background">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a 
                      href="tel:+16175497446" 
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      +1 (617) 549-7446
                    </a>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 border border-border hover:border-primary/50 transition-colors bg-background">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">Boston, MA</p>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground mb-4">Connect with me</h4>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" asChild className="hover:border-primary">
                  <a href="https://linkedin.com/in/prashanthi-geesala" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="hover:border-primary">
                  <a href="https://github.com/prashanthigeesala" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <Card className="p-6 border border-border bg-background">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="How can I help you?"
                    required
                    className="border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or inquiry..."
                    rows={5}
                    required
                    className="border-border focus:border-primary resize-none"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
