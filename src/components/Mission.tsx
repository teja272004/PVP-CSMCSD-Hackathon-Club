import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Users2, Rocket } from "lucide-react";

const Mission = () => {
  const missionPoints = [
    {
      icon: Lightbulb,
      title: "Foster Creativity",
      description: "Foster creativity, critical thinking, and innovation"
    },
    {
      icon: Rocket,
      title: "Full Stack & ML",
      description: "Provide exposure to Full Stack Development (FSD) and Machine Learning (ML)"
    },
    {
      icon: Users2,
      title: "Build Ecosystem",
      description: "Build a thriving ecosystem of developers, creators, and entrepreneurs"
    }
  ];

  return (
    <section 
      id="about" 
      className="py-20" 
      style={{ backgroundColor: "#e0f7fa" }} // light pastel blue background
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-accent rounded-full mb-6">
            <Target className="h-4 w-4 mr-2 text-accent-foreground" />
            <span className="text-sm font-medium text-accent-foreground">Our Mission</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Mission & Vision Statement
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"> 
            To empower students with the skills, tools, and opportunities needed to transform innovative ideas into impactful, real-world tech solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {missionPoints.map((point, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-white/90 border-0 shadow-sm animate-scale-in" 
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-glow-pulse">
                  <point.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {point.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
