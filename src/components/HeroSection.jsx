import PropTypes from "prop-types";
import placeholder from "../assets/placeholder.png";
import useSectionAnimation from "../hooks/useSectionAnimation";
import { motion } from "framer-motion";
import { scroller } from "react-scroll";

function HeroSection({ setActiveSection }) {
  const { ref, hasAnimated } = useSectionAnimation("hero", setActiveSection);

  const handleScrollToContact = () => {
    setActiveSection("contact"); // Set active section
    scroller.scrollTo("contact", {
      smooth: true,
      duration: 500,
    });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="w-screen h-screen flex justify-center bg-primary"
    >
      <div className="flex flex-col md:flex-row max-w-6xl p-6">
        <motion.div
          className="flex-1 flex flex-col justify-center p-4"
          initial={{ x: "35%", opacity: 0 }}
          animate={hasAnimated ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
            <h1 className="text-3xl md:text-6xl font-bold mb-4">כותרת ראשית</h1>
            <p className="md:text-xl mb-4">
              לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט
              למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי סחטיר בלובק. תצטנפל
              בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם
              גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת.
            </p>
            <motion.div
              initial={{ x: "35%", opacity: 0 }}
              animate={hasAnimated ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 2.5, ease: "easeOut" }}
            >
              <button className="custom-btn" onClick={handleScrollToContact}>
                יצירת קשר
              </button>
            </motion.div>
        </motion.div>
        <motion.div
          className="flex-1 flex items-center p-4 md:mr-10"
          initial={{ y: "-22%", opacity: 0 }}
          animate={hasAnimated ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <img
            src={placeholder}
            alt="Placeholder"
            className="object-cover rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

HeroSection.propTypes = { setActiveSection: PropTypes.func.isRequired };

export default HeroSection;
