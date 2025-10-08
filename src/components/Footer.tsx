const Footer = () => {
  return (
    <footer className="py-8 bg-accent/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center text-muted-foreground">
          <p className="text-sm">
            © {new Date().getFullYear()} Prashanthi Geesala. Built with passion for data science.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
