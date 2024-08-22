import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import placeholder from "../assets/placeholder.png";

function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <section
      className="about w-screen h-screen flex justify-center bg-secondary"
      ref={ref}
    >
      <div className="flex flex-col-reverse md:flex-row max-w-6xl p-6">
        <motion.div
          className="flex-1 flex items-center justify-center p-4 md:ml-10"
          initial={{ y: "30%", opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src={placeholder}
            alt="Placeholder"
            className="object-cover rounded-xl"
          />
        </motion.div>
        <motion.div
          className="flex-1 flex flex-col md:flex-row justify-center"
          initial={{ y: "-30%", opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="flex-1 flex flex-col justify-center p-4 text-center md:text-left">
            <p className="md:text-xl mb-4">
              להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט
              לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. קולורס מונפרד אדנדום
              סילקוף, מרגשי ומרגשח עמחליף.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
