import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Activities from "@/components/Activities";
import Team from "@/components/Team";
import Guidelines from "@/components/Guidelines";
import Footer from "@/components/Footer";
import Announcements from "@/components/Announcements";
import HackathonGallery from "@/components/HackathonGallery";
const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Mission />
      <Activities />
      <HackathonGallery />
      <Team />
      {/*<Announcements />*/}
      <Guidelines />
      <Footer />
    </div>
  );
};

export default Index;
