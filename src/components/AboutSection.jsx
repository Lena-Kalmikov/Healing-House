import PropTypes from "prop-types";
import placeholder from "../assets/placeholder.png";
import useSectionAnimation from "../hooks/useSectionAnimation";
import { motion } from "framer-motion";

function AboutSection({ setActiveSection }) {
  const { ref, hasAnimated } = useSectionAnimation("about", setActiveSection);

  return (
    <section
      id="about"
      ref={ref}
      className="w-screen h-screen flex justify-center bg-secondary"
    >
      <div className="flex flex-col-reverse md:flex-row max-w-6xl p-6">
        <motion.div
          className="flex-1 flex items-center p-4 md:ml-10"
          initial={{ y: "30%", opacity: 0 }}
          animate={hasAnimated ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src={placeholder}
            alt="Placeholder"
            className="object-cover rounded-xl"
          />
        </motion.div>
        <motion.div
          className="flex-1 flex items-center p-4"
          initial={{ y: "-30%", opacity: 0 }}
          animate={hasAnimated ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <p className="md:text-xl">
            להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט
            לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. קולורס מונפרד אדנדום
            סילקוף, מרגשי ומרגשח עמחליף.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

AboutSection.propTypes = { setActiveSection: PropTypes.func.isRequired };

export default AboutSection;
