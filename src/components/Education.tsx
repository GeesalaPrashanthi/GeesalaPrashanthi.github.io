import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin } from "lucide-react";

const educationItems = [
  {
    title: "Master's in Data Science",
    organization: "Boston University",
    location: "Massachusetts, US",
    period: "Sep 2025 – Present",
    points: [
      "Relevant coursework: Tools for Data Science; Math for Data Science and Machine Learning; AI Ethics"
    ]
  },
  {
    title: "B.Tech in Computer Science and Engineering",
    organization: "GITAM University",
    location: "Visakhapatnam, India",
    period: "Jun 2019 – Apr 2023",
    points: [
      "Relevant coursework: Linear Algebra; Probability and Statistics; Numerical Methods; Data Science with Python; Database Management; Cryptography; Big Data; Artificial Intelligence; Cloud Computing",
      "GPA: 9.63/10"
    ]
  }
];

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl font-bold">Education</h2>
            <p className="text-lg text-muted-foreground">
              Academic background and achievements
            </p>
          </div>

          <div className="space-y-6">
            {educationItems.map((edu, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent/10 text-accent">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-semibold">{edu.title}</h3>
                          <p className="text-muted-foreground">{edu.organization}</p>
                        </div>
                        <div className="text-right text-sm">
                          <p className="font-medium text-primary">{edu.period}</p>
                          <div className="flex items-center gap-1 text-muted-foreground justify-end">
                            <MapPin className="h-3 w-3" />
                            <p>{edu.location}</p>
                          </div>
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {edu.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1.5">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
