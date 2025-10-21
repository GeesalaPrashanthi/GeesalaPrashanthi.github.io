import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a backend
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
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl font-bold">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss how we can work together
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-card border-2">
              <CardContent className="p-6 space-y-6">
                <h3 className="text-2xl font-semibold">Contact Information</h3>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:pgeesala@bu.edu"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <span>pgeesala@bu.edu</span>
                  </a>

                  <a 
                    href="tel:+16175497446"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Phone className="h-5 w-5" />
                    </div>
                    <span>+1 (617) 549-7446</span>
                  </a>

                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <span>Boston, MA</span>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                      asChild
                    >
                      <a 
                        href="https://www.linkedin.com/in/prashanthi-geesala-0495891bb/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                      asChild
                    >
                      <a 
                        href="https://github.com/GeesalaPrashanthi" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-2">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full gradient-primary shadow-md hover:shadow-glow"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
