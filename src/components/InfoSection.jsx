import PropTypes from "prop-types";
import placeholder from "../assets/placeholder.png";
import useSectionAnimation from "../hooks/useSectionAnimation";
import { motion } from "framer-motion";

function InfoSection({ setActiveSection }) {
  const { ref, hasAnimated } = useSectionAnimation("info", setActiveSection);

  return (
    <section
    id="info"
      ref={ref}
      className="w-screen h-screen flex justify-center bg-primary"
    >
      <div className="flex flex-col md:flex-row max-w-6xl p-6">
        <motion.div
          className="flex-1 flex items-center p-4"
          initial={{ y: "30%", opacity: 0 }}
          animate={hasAnimated ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <p className="md:text-xl">
            נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו
            בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ
            תתיח לרעח. לת צשחמי הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו
            שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת.
          </p>
        </motion.div>
        <motion.div
          className="flex-1 flex items-center p-4 md:mr-10"
          initial={{ y: "-30%", opacity: 0 }}
          animate={hasAnimated ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
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

InfoSection.propTypes = { setActiveSection: PropTypes.func.isRequired };

export default InfoSection;
