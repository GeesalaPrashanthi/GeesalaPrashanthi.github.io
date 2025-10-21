import { Trophy, Star, Award, Code } from "lucide-react";
import { Card } from "@/components/ui/card";

const achievements = [
  {
    icon: Trophy,
    title: "Deloitte CyberKshetra'21",
    description: "2nd place - Earned pre-placement offer for Advisory Intern role",
  },
  {
    icon: Code,
    title: "HackerRank Excellence",
    description: "Gold badge in Python, Silver badge in SQL",
  },
  {
    icon: Star,
    title: "BinarySearch Legend",
    description: "Achieved Legend badge for maintaining 256-day coding streak",
  },
  {
    icon: Award,
    title: "Nurture Tech Knight",
    description: "Achieved 'Nurture Tech Knight' title in Cognizant's ReCogNurize 2.0 challenge",
  },
];

export const Achievements = () => {
  return (
    <section className="py-20 bg-background" id="achievements">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
          Achievements
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Recognition for technical excellence and leadership
        </p>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card
                key={index}
                className="p-6 border border-border hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
