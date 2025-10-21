export const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a Data Scientist and Analyst with hands-on experience in transforming large-scale data into meaningful, actionable insights. My journey blends strong analytical foundations with real-world impact — from building scalable data pipelines and, optimize BI dashboards and business decisions, improve forecasting accuracy, and enhance customer retention from my experience at Amazon and Deloitte.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Currently pursuing my Master's in Data Science at Boston University, I'm deepening my expertise in statistical analysis, machine learning, predictive modeling, and data visualization, while exploring how data can drive smarter, more ethical decision-making.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            I bring a hands-on, data-first mindset — combining Python, SQL, and BI tools with storytelling and strategic thinking to turn raw data into business outcomes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-primary group-hover:text-accent transition-colors animate-pulse">2+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>

            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-primary group-hover:text-accent transition-colors animate-pulse">15+</div>
              <div className="text-sm text-muted-foreground">Data Projects</div>
            </div>

            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-primary group-hover:text-accent transition-colors animate-pulse">85%+</div>
              <div className="text-sm text-muted-foreground">Model Accuracy</div>
            </div>

            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-primary group-hover:text-accent transition-colors animate-pulse">∞</div>
              <div className="text-sm text-muted-foreground">Curiosity for Data</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
