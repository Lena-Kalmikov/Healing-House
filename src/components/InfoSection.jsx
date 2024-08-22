import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import placeholder from "../assets/placeholder.png";

function InfoSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <section
      className="info w-screen h-screen flex justify-center bg-primary"
      ref={ref}
    >
      <div className="flex flex-col md:flex-row max-w-6xl p-6">
        <motion.div
          className="flex-1 flex flex-col md:flex-row justify-center"
          initial={{ y: "30%", opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="flex-1 flex flex-col justify-center p-4 text-center md:text-left">
            <p className="md:text-xl mb-4">
              נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף.
              אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי
              בלוף קינץ תתיח לרעח. לת צשחמי הועניב היושבב שערש שמחויט - שלושע
              ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="flex-1 flex items-center justify-center p-4 md:mr-10"
          initial={{ y: "-30%", opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
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

export default InfoSection;
