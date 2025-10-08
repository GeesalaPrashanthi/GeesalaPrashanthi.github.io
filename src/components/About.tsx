import { Card } from "@/components/ui/card";
import profile from "@/assets/profile-photo.jpg";

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-accent/10 via-transparent to-background" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-8 text-foreground">About me</h2>

        <Card className="p-6 md:p-8 bg-card border border-border shadow-lg max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 w-32 h-32 md:w-44 md:h-44 rounded-xl overflow-hidden">
              <img src={profile} alt="Prashanthi Geesala" className="w-full h-full object-cover object-center" />
            </div>

            <div className="prose prose-sm sm:prose-base max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Hi, I'm Prashanthi Geesala — Data Storyteller and Problem Solver who is pursuing her Master's in Data Science at Boston University. I am passionate about uncovering the stories buried in data and applying analytics to create real-world impact.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Working at Amazon and Deloitte helped me learn how to develop scalable intelligent data systems that deliver insights that make a difference. Whether I'm forecasting customer churn or modeling retail sales, I like transforming tangled data into concise, easily acted-upon stories that inform businesses to make better, quicker decisions.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                When I'm not developing models or dashboards, I can be found testing new visualization tools or examining data-driven case studies that link analytics and strategy and innovation.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
