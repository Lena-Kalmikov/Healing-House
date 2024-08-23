import PropTypes from "prop-types";
import { Link } from "react-scroll";

function Navbar({ sections, activeSection }) {
  return (
    <nav className="hidden md:flex fixed top-0 w-screen bg-navbar shadow-md">
      <ul className="flex justify-around p-6 md:w-1/2 lg:w-1/3">
        {sections.map((section) => (
          <li key={section.id}>
            <Link to={section.id} smooth={true} duration={500}>
              <button
                className={`text-lg font-semibold transition-colors duration-300 hover:text-buttonHover ${
                  activeSection === section.id
                    ? "underline text-buttonHover"
                    : ""
                }`}
              >
                {section.name}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeSection: PropTypes.string.isRequired,
};

export default Navbar;
