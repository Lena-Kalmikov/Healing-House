// import { useState } from "react";
import { motion } from "framer-motion";

import "./App.css";

function App() {
  return (
    <>
      <section className="w-screen h-screen flex justify-center bg-primary">
        <div className="flex flex-col md:flex-row w-full h-full max-w-6xl p-6">
          <motion.div
            className="flex-1 flex flex-col md:flex-row justify-center"
            initial={{ x: "100%", opacity: 0 }} // Start position and opacity
            animate={{ x: 0, opacity: 1 }} // End position and opacity
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="flex-1 flex flex-col justify-center p-4 text-center md:text-left">
              <h1 className="text-3xl md:text-6xl font-bold mb-4">
                כותרת ראשית
              </h1>
              <p className="md:text-xl mb-4">
                לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט
                למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי סחטיר בלובק. תצטנפל
                בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם
                גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת.
              </p>
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
              >
                <button className="w-2/5 bg-button text-white text-center text-lg md:text-2xl px-4 py-2 rounded-md shadow-lg hover:bg-buttonHover transition ease-out duration-500">
                  יצירת קשר
                </button>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="flex-1 flex items-center justify-center p-4 md:mr-10"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <img
              src="https://via.placeholder.com/400"
              alt="Placeholder"
              className="w-full h-auto object-cover rounded-xl"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default App;
