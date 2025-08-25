import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code2 } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png"; // Import the logo

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute inset-0 bg-background/20" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Welcome to Innovation Hub</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Idea Hackathons<br />
            <span className="bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent">
              Club
            </span>
          </h1>
         
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
             Organized with Passion by CSM & CSD Students, PVPSIT
            <br />
            
            For Empowering students with the skills, tools, and opportunities needed to transform innovative ideas into impactful, real-world tech solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button
              asChild
              size="lg"
              className="bg-white text-tech-blue hover:bg-blue-50 shadow-glow"
            >
              <a href="#activities" className="flex items-center gap-2">
                <Code2 className="h-5 w-5" />
                <span>Explore Activities</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white text-tech-blue hover:bg-blue-50 shadow-glow"
            >
              <a
                href="https://chat.whatsapp.com/BsyHiC0wgf9FtsbDxlaQY0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Meet Our Team
              </a>
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 mt-12 text-blue-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">4</div>
              <div className="text-sm">Events Planned</div>
            </div>
            <div className="w-px h-8 bg-blue-300/30" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">2</div>
              <div className="text-sm">Semesters</div>
            </div>
            <div className="w-px h-8 bg-blue-300/30" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">∞</div>
              <div className="text-sm">Ideas</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;