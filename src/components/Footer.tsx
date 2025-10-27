import { Code, Mail, MapPin, Phone } from "lucide-react";
import logo from "../assets/logo.png"; // Adjust the filename if needed

const Footer = () => {
  return (
    <footer className="bg-tech-blue-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Club Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="Idea Hackathons Club Logo"
                className="w-16 h-16 rounded-lg bg-white/10 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">Idea Hackathons Club</h3>
                <p className="text-blue-200 text-sm">Innovate • Create • Transform</p>
              </div>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Empowering students with the skills, tools, and opportunities needed to transform innovative ideas into impactful, real-world tech solutions.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#about" className="block text-blue-200 hover:text-white transition-colors">About Us</a>
              <a href="#activities" className="block text-blue-200 hover:text-white transition-colors">Activities</a>
              <a href="#team" className="block text-blue-200 hover:text-white transition-colors">Our Team</a>
              <a href="#guidelines" className="block text-blue-200 hover:text-white transition-colors">Guidelines</a>
            </nav>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-300 flex-shrink-0" />
                <span className="text-blue-100 text-sm">
                  Department of CSE(AI&ML) and CSE(AI&DS)<br />
                  PVPSIT, Kanuru, Vijayawada
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-300 flex-shrink-0" />
                <span className="text-blue-100 text-sm">22501a4218@pvpsit.ac.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-300 flex-shrink-0" />
                <span className="text-blue-100 text-sm">+91 8096785522</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-500/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-200 text-sm">
              © 2025 Idea Hackathons Club - PVPSIT. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-blue-200">
              <span>Designed and Developed Idea Hackathon Club</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;