import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Users, Calendar } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo + Title */}
          <div className="flex items-center space-x-2">
            <img
              src="/pvp.jpeg" // from public folder
              alt="PVPSIT Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg object-contain cursor-pointer"
            />
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                Idea Hackathons Club
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                PVPSIT - CSE(AI&ML), CSE(Data Science)
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#activities"
              className="text-foreground hover:text-primary transition-colors"
            >
              Activities
            </a>
            <a
              href="#team"
              className="text-foreground hover:text-primary transition-colors"
            >
              Team
            </a>
            <a
              href="#guidelines"
              className="text-foreground hover:text-primary transition-colors"
            >
              Guidelines
            </a>
          </nav>

          {/* Buttons + Hamburger */}
          <div className="flex items-center space-x-4">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="hidden md:flex"
            >
              <a
                href="https://www.pvpsiddhartha.ac.in/aiml_web/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Join Events
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-gradient-primary text-white border-0 hover:opacity-90"
            >
              <a
                href="https://chat.whatsapp.com/BsyHiC0wgf9FtsbDxlaQY0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Users className="h-4 w-4 mr-2" />
                Join Club
              </a>
            </Button>

            {/* Hamburger for mobile */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <nav className="flex flex-col items-center gap-4 py-6 text-foreground font-medium">
            <a
              href="#about"
              className="hover:text-primary"
              onClick={() => setOpen(false)}
            >
              About
            </a>
            <a
              href="#activities"
              className="hover:text-primary"
              onClick={() => setOpen(false)}
            >
              Activities
            </a>
            <a
              href="#team"
              className="hover:text-primary"
              onClick={() => setOpen(false)}
            >
              Team
            </a>
            <a
              href="#guidelines"
              className="hover:text-primary"
              onClick={() => setOpen(false)}
            >
              Guidelines
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
