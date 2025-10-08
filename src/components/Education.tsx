const Education = () => {
  return (
    <section className="py-20 bg-card" id="education">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Education</h2>
        <div className="max-w-4xl mx-auto space-y-8 mt-8">
          <div className="bg-background p-6 rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-semibold">Master's in Data Science</h3>
            <div className="text-sm text-muted-foreground">Boston University — Sep 2025 – Present</div>
            <p className="mt-3 text-sm text-foreground">Relevant coursework:</p>
            <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
              <li>Tools for Data Science</li>
              <li>Math for Data Science and Machine Learning</li>
              <li>AI Ethics</li>
            </ul>
          </div>

          <div className="bg-background p-6 rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-semibold">B.Tech in Computer Science and Engineering</h3>
            <div className="text-sm text-muted-foreground">GITAM University — Jun 2019 – Apr 2023</div>
            <p className="mt-3 text-sm text-foreground">Relevant coursework:</p>
            <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
              <li>Math: Linear Algebra, Probability and Statistics, Numerical Methods</li>
              <li>Data Science with Python</li>
              <li>Database Management</li>
              <li>Cryptography</li>
              <li>Big Data</li>
              <li>Artificial Intelligence</li>
              <li>Cloud Computing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
