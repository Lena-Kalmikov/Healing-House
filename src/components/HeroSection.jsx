import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import placeholder from "../assets/placeholder.png";

function HeroSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  function scrollToContact() {
    document.querySelector(".contact").scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      className="hero w-screen h-screen flex justify-center bg-primary"
      ref={ref}
    >
      <div className="flex flex-col md:flex-row max-w-6xl p-6">
        <motion.div
          className="flex-1 flex flex-col md:flex-row justify-center"
          initial={{ x: "35%", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="flex-1 flex flex-col justify-center p-4 text-center md:text-left">
            <h1 className="text-3xl md:text-6xl font-bold mb-4">כותרת ראשית</h1>
            <p className="md:text-xl mb-4">
              לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט
              למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי סחטיר בלובק. תצטנפל
              בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם
              גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת.
            </p>
            <motion.div
              initial={{ x: "35%", opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 2.5, ease: "easeOut" }}
            >
              <button className="custom-btn" onClick={scrollToContact}>
                יצירת קשר
              </button>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="flex-1 flex items-center justify-center p-4 md:mr-10"
          initial={{ y: "-22%", opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
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

export default HeroSection;
