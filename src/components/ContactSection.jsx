import PropTypes from "prop-types";
import useSectionAnimation from "../hooks/useSectionAnimation";
import { motion } from "framer-motion";

function ContactSection({ setActiveSection }) {
  const { ref, hasAnimated } = useSectionAnimation("contact", setActiveSection);

  return (
    <section
      id="contact"
      ref={ref}
      className="w-screen h-screen flex justify-center items-center bg-secondary"
    >
      <motion.div
        className="md:w-1/2 p-8"
        initial={{ opacity: 0 }}
        animate={hasAnimated ? { opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeIn" }}
      >
        <form>
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-10 d:mb-16">
            יצירת קשר
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="fullName" className="text-lg mb-1">
                שם מלא
              </label>
              <input
                type="text"
                id="fullName"
                className="p-2 border border-gray-300 rounded-md"
                placeholder="איך קוראים לך?"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-lg mb-1">
                מספר טלפון
              </label>
              <input
                type="tel"
                id="phone"
                className="p-2 border border-gray-300 rounded-md"
                placeholder="מה מספר הטלפון שלך?"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="text-lg mb-1">
              דוא"ל
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="מה כתובת המייל שלך?"
              required
            />
          </div>

          <div className="mt-4">
            <label htmlFor="message" className="text-lg mb-1">
              הודעה
            </label>
            <textarea
              id="message"
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="4"
              placeholder="מה בא לך לכתוב לנו?"
              required
            />
          </div>
          <div className="mt-6 flex justify-center">
            <button type="submit" className="custom-btn">
              שליחה
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}

ContactSection.propTypes = { setActiveSection: PropTypes.func.isRequired };

export default ContactSection;
