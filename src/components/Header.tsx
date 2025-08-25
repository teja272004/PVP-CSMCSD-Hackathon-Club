import { Button } from "@/components/ui/button";
import { Menu, Users, Calendar } from "lucide-react";
import logo from "../assets/logo.png"; // Make sure this path is correct

const Header = () => {
  return (
    // This 'fixed' class is what lifts the header out of the normal page flow
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
           
            <img 
              src="/pvp.jpeg"  // Direct path from public folder
              alt="PVPSIT Logo" 
              className="w-14 h-14 rounded-lg object-contain cursor-pointer" 
            />
            <div>
              <h1 className="text-2xl font-bold text-foreground">Idea Hackathons Club</h1>
              <p className="text-sm text-muted-foreground">PVPSIT - CSE(AI&ML),CSE(Data Science)</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#activities" className="text-foreground hover:text-primary transition-colors">Activities</a>
            <a href="#team" className="text-foreground hover:text-primary transition-colors">Team</a>
            <a href="#guidelines" className="text-foreground hover:text-primary transition-colors">Guidelines</a>
          </nav>
          
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
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
