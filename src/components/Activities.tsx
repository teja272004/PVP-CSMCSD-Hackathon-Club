import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Code, Brain, Users, Target } from "lucide-react";

const Activities = () => {
  const activities = [
    {
      semester: "Odd (1st Semester)",
      events: [
        {
          title: "FSD/Web Hackathon",
          description: "A competitive hackathon focused on frontend, backend, and full-stack project building.",
          objective: "Boost real-time development skills and UI/UX design thinking.",
          icon: Code,
          color: "bg-blue-500"
        },
        {
          title: "Idea Pitch & Screening",
          description: "Teams pitch their hackathon ideas; top ideas move to execution.",
          objective: "Identify innovative ideas and select top participants for mentorship.",
          icon: Target,
          color: "bg-green-500"
        }
      ]
    },
    {
      semester: "Even (2nd Semester)",
      events: [
        {
          title: "ML/AI Hackathon",
          description: "Students solve data-centric problems using machine learning models.",
          objective: "Apply ML techniques to real-world problems and build deployable AI solutions.",
          icon: Brain,
          color: "bg-purple-500"
        },
        {
          title: "Tech Ecosystem Meetup",
          description: "Interaction with alumni, tech leaders, and early-stage founders.",
          objective: "Help students connect with mentors, startups, and investors.",
          icon: Users,
          color: "bg-orange-500"
        }
      ]
    }
  ];

  return (
    <section id="activities" className="py-20" style={{ backgroundColor: "#e0f7fa" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-accent rounded-full mb-6">
            <Calendar className="h-4 w-4 mr-2 text-accent-foreground" />
            <span className="text-sm font-medium text-accent-foreground">Academic Year 2025-2026</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Proposed Activities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategic events designed to enhance technical skills and foster innovation throughout the academic year.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-12">
          {activities.map((semesterData, semesterIndex) => (
            <div key={semesterIndex} className="animate-fade-in" style={{ animationDelay: `${semesterIndex * 0.3}s` }}>
              <div className="flex items-center mb-8">
                <Badge variant="outline" className="text-lg px-4 py-2 font-semibold">
                  {semesterData.semester}
                </Badge>
                <div className="flex-1 h-px bg-border ml-4" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {semesterData.events.map((event, eventIndex) => (
                  <Card key={eventIndex} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${(semesterIndex * 2 + eventIndex) * 0.2}s` }}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className={`w-12 h-12 ${event.color} rounded-xl flex items-center justify-center mb-4 group-hover:animate-glow-pulse`}>
                          <event.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {event.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                      <div className="pt-4 border-t border-border">
                        <h4 className="font-semibold text-foreground mb-2">Objective:</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {event.objective}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;