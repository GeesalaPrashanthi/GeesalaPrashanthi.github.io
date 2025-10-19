import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 border-t bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by Prashanthi Geesala
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
