import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Users2, Crown, Calendar, DollarSign, Settings } from "lucide-react";

const Team = () => {
  const organizers = [
    {
      name: "Jakkamsetti Madhavan",
      role: "Coordinator",
      rollNo: "22501A4218",
      image: "/lovable-uploads/1b421369-560c-47a0-92ca-4d306a6d0192.png",
      description: "Leading the club with vision and strategic planning. Responsible for overall club direction, partnerships, and ensuring our mission is fulfilled.",
      icon: Crown,
      color: "bg-yellow-500"
    },
    {
      name: "Mudigonda Naga Bhanuteja Sharma",
      role: "Coordinator",
      rollNo: "22501A4441",
      image: "/lovable-uploads/23cc61c5-dcea-4849-9ca4-8dba1c0c5c58.png",
      description: "Orchestrating hackathons and technical events. Managing event logistics, participant coordination, and ensuring smooth execution of all club activities.",
      icon: Calendar,
      color: "bg-blue-500"
    },
    {
      name: "Akshitha Ponna",
      role: "Coordinator",
      rollNo: "22501A4201",
      image: "/lovable-uploads/e83f070e-0cb8-48c8-a5d1-253d59622ad3.png",
      description: "Responsible for the technical execution of events and workshops, including developing content, and sourcing knowledgeable speakers for technical sessions.",
      icon: Settings,
      color: "bg-green-500"
    },
    {
      name: "Aaisha Sultana Guduru",
      role: "Coordinator",
      rollNo: "22501A4401",
      image: "/lovable-uploads/c0a76776-4643-4478-bdd9-f53c8500dbb3.png",
      description: "Overseeing club finances and sponsorships while designing all promotional materials. Acting as the main point of contact to drive student engagement.",
      icon: DollarSign,
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="team" className="py-20" style={{ backgroundColor: "#e0f7fa" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-accent rounded-full mb-6">
            <Users2 className="h-4 w-4 mr-2 text-accent-foreground" />
            <span className="text-sm font-medium text-accent-foreground">Leadership Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Club Organizers
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Meet the passionate leaders driving innovation and organizing impactful events for our tech community.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {organizers.map((organizer, index) => (
            <Card
              key={index}
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 shadow-sm animate-scale-in"
              style={{
                animationDelay: `${index * 0.2}s`,
                background: "linear-gradient(135deg, #36dfbaff, #FFF8DC)" // Gradient stays same
              }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="relative">
                    <Avatar className="w-24 h-24 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                      <AvatarImage 
                        src={organizer.image} 
                        alt={organizer.name}
                        className="object-cover"
                      />
                      <AvatarFallback className={`${organizer.color} text-white text-xl font-bold`}>
                        {organizer.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className={`absolute -bottom-2 -right-2 w-8 h-8 ${organizer.color} rounded-full flex items-center justify-center shadow-lg group-hover:animate-glow-pulse`}>
                      <organizer.icon className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-extrabold text-gray-900 mb-2 tracking-wide font-serif">
                      {organizer.name}
                    </h3>
                    
                    <Badge variant="outline" className="mb-3 font-medium text-gray-900 border-gray-500/40 bg-white/30">
                      {organizer.role}
                    </Badge>
                    
                    <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                      {organizer.description}
                    </p>
                    
                    <p className="text-xs text-gray-600 font-mono">
                      Roll No: {organizer.rollNo}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full">
            <span className="text-primary font-medium">Ready to join our mission? Connect with any of our organizers! Click Join Club..</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
