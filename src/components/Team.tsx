import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Users2, Crown, Calendar, DollarSign, Settings, Star } from "lucide-react";

const Team = () => {
  const organizers = [
    {
      name: "Parasa Nagamani",
      role: "Faculty Coordinator",
      rollNo: "",
      image: "nagamanimam.jpg",
      description:
        "Guiding the club with academic expertise, mentorship, and support. Ensures alignment of club activities with institutional goals.",
      icon: Star,
      color: "bg-red-500",
    },
    {
      name: "Jakkamsetti Madhavan",
      role: "Coordinator",
      rollNo: "22501A4218",
      image: "/lovable-uploads/1b421369-560c-47a0-92ca-4d306a6d0192.png",
      description:
        "Leading the club with vision and strategic planning. Responsible for overall club direction, partnerships, and ensuring our mission is fulfilled.",
      icon: Crown,
      color: "bg-yellow-500",
    },
    {
      name: "Mudigonda Naga Bhanuteja Sharma",
      role: "Coordinator",
      rollNo: "22501A4441",
      image: "/lovable-uploads/23cc61c5-dcea-4849-9ca4-8dba1c0c5c58.png",
      description:
        "Responsible for the technical execution of events and workshops, including developing content, and sourcing knowledgeable speakers for technical sessions.",
      icon: Calendar,
      color: "bg-blue-500",
    },
    {
      name: "Akshitha Ponna",
      role: "Coordinator",
      rollNo: "22501A4201",
      image: "/lovable-uploads/e83f070e-0cb8-48c8-a5d1-253d59622ad3.png",
      description:
        "Orchestrating hackathons and technical events. Managing event logistics, participant coordination, and ensuring smooth execution of all club activities.",
      icon: Settings,
      color: "bg-green-500",
    },
    {
      name: "Aaisha Sultana Guduru",
      role: "Coordinator",
      rollNo: "22501A4401",
      image: "/lovable-uploads/c0a76776-4643-4478-bdd9-f53c8500dbb3.png",
      description:
        "Overseeing club finances and sponsorships while designing all promotional materials. Acting as the main point of contact to drive student engagement.",
      icon: DollarSign,
      color: "bg-purple-500",
    },
  ];

  // 1. Separate the faculty from the student organizers
  const facultyCoordinator = organizers.find(
    (o) => o.role === "Faculty Coordinator"
  );
  const studentOrganizers = organizers.filter(
    (o) => o.role !== "Faculty Coordinator"
  );

  // Reusable function to render a card to avoid code duplication
  const renderOrganizerCard = (organizer, index) => (
    <Card
      key={index}
      className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 shadow-sm animate-scale-in"
      style={{
        animationDelay: `${index * 0.2}s`,
        background: "linear-gradient(135deg, #36dfba, #FFF8DC)",
      }}
    >
      <CardContent className="p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
          {/* Avatar */}
          <div className="relative">
            <Avatar className="w-16 h-16 sm:w-24 sm:h-24 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
              <AvatarImage
                src={organizer.image}
                alt={organizer.name}
                className="object-cover"
              />
              <AvatarFallback className={`${organizer.color} text-white`}>
                {organizer.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div
              className={`absolute -bottom-2 -right-2 p-2 rounded-full ${organizer.color} text-white`}
            >
              <organizer.icon className="w-4 h-4" />
            </div>
          </div>
          {/* Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
              {organizer.name}
            </h3>
            <p className="text-primary font-medium mb-2">{organizer.role}</p>
            {organizer.rollNo && (
              <Badge variant="secondary" className="mb-3">
                {organizer.rollNo}
              </Badge>
            )}
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {organizer.description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="team" className="py-20" style={{ backgroundColor: "#e0f7fa" }}>
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-accent rounded-full mb-6">
            <Users2 className="h-4 w-4 mr-2 text-accent-foreground" />
            <span className="text-sm font-medium text-accent-foreground">
              Leadership Team
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Club Organizers
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Meet the passionate leaders driving innovation and organizing
            impactful events for our tech community.
          </p>
        </div>

        {/* 2. Render the centered Faculty Coordinator card */}
        <div className="flex justify-center mb-8">
            <div className="max-w-2xl w-full">
                {facultyCoordinator && renderOrganizerCard(facultyCoordinator, 0)}
            </div>
        </div>

        {/* 3. Render the grid of student organizers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {studentOrganizers.map((organizer, index) =>
            renderOrganizerCard(organizer, index + 1) // index + 1 for animation delay
          )}
        </div>
      </div>
    </section>
  );
};

export default Team;