import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, Award, Megaphone } from "lucide-react";

const Announcements: FC = () => {
  return (
    <section
      id="announcements"
      className="py-20"
      style={{ backgroundColor: "#e0f7fa" }} // same light pastel blue as Mission
    >
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-accent rounded-full mb-6">
            <Megaphone className="h-4 w-4 mr-2 text-accent-foreground" />
            <span className="text-sm font-medium text-accent-foreground">
              Announcements
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Idea Hackathon Club – Join the Hackathon!
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            🔥 Let’s innovate, compete & create something impactful! 💡
          </p>
        </div>

        {/* Announcement Card */}
        <Card className="shadow-lg rounded-2xl border border-border max-w-5xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold text-foreground">
              Event Details
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6 text-foreground">
            {/* Event Info */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                <p>
                  <strong>Date:</strong> 27th Sept 2025 (Saturday)
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <p>
                  <strong>Duration:</strong> 8 Hours (Offline)
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-primary" />
                <p>
                  <strong>Team Size:</strong> 3–4 Members per Team
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-primary" />
                <p>
                  <strong>Organized by:</strong> Dept. of CSM & CSD
                </p>
              </div>
            </div>

            {/* Eligibility */}
            <div>
              <h3 className="text-lg font-semibold mb-2">👩‍💻 Eligibility</h3>
              <p className="text-muted-foreground">
                Open to all 2nd, 3rd & 4th Year Students of <br />
                <strong>
                  CSE | CSM | CSD | IT | ECE | EEE | MEC | CIVIL
                </strong>{" "}
                branches of PVPSIT
              </p>
            </div>

            {/* Rounds & Timeline */}
            <div>
              <h3 className="text-lg font-semibold mb-2">📌 Rounds & Timeline</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  <strong>Registrations Open:</strong> 10th Sept 2025
                </li>
                <li>
                  <strong>Round 1 – Prototype Submission</strong> <br />
                  🗓 Deadline: 18th Sept
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Problem Statement</li>
                    <li>Solution &amp; Workflow</li>
                    <li>Prototype/Working Model</li>
                    <li>Tools/Technologies Used</li>
                    <li>Expected Results</li>
                    <li>Advantages/Impact</li>
                  </ul>
                </li>
                <li>
                  <strong>Round 1 Results:</strong> 📢 Shortlisted teams
                  announced by 24th Sept
                </li>
                <li>
                  <strong>Round 2 – Final Hackathon (Offline)</strong> <br />
                  📅 27th Sept 2025 (Friday) – ⏱ 8-hour Hackathon
                </li>
                <li>🎖 Participation Certificates for all Final Round Teams</li>
                <li>🏆 Winners awarded with Prize Money</li>
              </ul>
            </div>

            {/* ✅ Register Now Button */}
            <div className="text-center mt-8">
              <Button
                asChild
                size="lg"
                className="bg-green-600 text-white hover:bg-green-700 px-8 py-4 rounded-xl shadow-md"
              >
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfKc8lj86yK2mRhsV-8lNRCBrWh8natG5snHWa2nhcOeKeXtw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Announcements;
