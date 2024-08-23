import { useState } from "react";

import Navbar from "./components/UI/Navbar";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  const sections = [
    { id: "hero", name: "ראשי" },
    { id: "about", name: "אודות" },
    { id: "info", name: "מידע" },
    { id: "contact", name: "יצירת קשר" },
  ];

  return (
    <>
      <Navbar sections={sections} activeSection={activeSection} />
      <HeroSection setActiveSection={setActiveSection} />
      <AboutSection setActiveSection={setActiveSection} />
      <InfoSection setActiveSection={setActiveSection} />
      <ContactSection setActiveSection={setActiveSection} />
    </>
  );
}

export default App;
