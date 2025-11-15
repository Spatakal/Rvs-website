import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import RolesSection from "@/components/RolesSection";
import PartnersSection from "@/components/PartnersSection";
import WhatsNextSection from "@/components/WhatsNextSection";
import StatsSection from "@/components/StatsSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WelcomeScreen from "@/components/WelcomeScreen";

const Index = () => {
  return (
    <>
      <WelcomeScreen />
      <div className="min-h-screen">
        <Header />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <RolesSection />
        <WhatsNextSection />
        <StatsSection />
        <PartnersSection />
        <TeamSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
