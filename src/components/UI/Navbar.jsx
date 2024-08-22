import { useState, useEffect } from "react";

function Navbar({ sections }) {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const sectionElement = document.querySelector(`#${section.id}`);
        const rect = sectionElement.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id) => {
    document.querySelector(`#${id}`).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="hidden md:flex fixed top-0 w-screen bg-navbar shadow-md ">
      <ul className="flex justify-around p-6 md:w-1/3">
        {sections.map((section) => (
          <li
            key={section.id}
            className={`cursor-pointer text-lg font-semibold transition-colors duration-300 hover:text-buttonHover ${
              activeSection === section.id ? "underline text-buttonHover" : ""
            }`}
            onClick={() => scrollToSection(section.id)}
          >
            {section.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
