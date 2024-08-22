import Navbar from "./components/UI/Navbar";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";

import "./App.css";

function App() {
  const sections = [
    { id: "hero", name: "ראשי" },
    { id: "about", name: "אודות" },
    { id: "info", name: "מידע" },
    { id: "contact", name: "יצירת קשר" },
  ];
  return (
    <>
      <Navbar sections={sections} />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="info">
        <InfoSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </>
  );
}

export default App;
