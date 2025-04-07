
import { motion } from "framer-motion";

export const Events = () => {
  return (
    <motion.section
      id="events"
      className="min-h-screen py-20 px-6 bg-white text-[#367909] font-poppins"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Nos Événements
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl mb-12 text-[#1597bd]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Découvrez les courses, ateliers et rendez-vous CrazyFamilyRun pour toute la famille !
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2">
          {[1, 2].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl shadow-lg bg-white text-[#367909]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-2">
                {item === 1 ? "Crazy Family Run - Versailles" : "Crazy Family Run - Versailles"}
              </h3>
              <p className="text-md mb-2">
                {item === 1
                  ? "🏃‍♂️ 1ère édition !"
                  : "🏃‍♂️ 2ème édition ! "}
              </p>
              <p className="text-sm text-[#1597bd]">
                {item === 1
                  ? "12 mai 2025 - Jardins de Mme Elisabeth"
                  : "26 mai 2025 - Jardins de Mme Elisabeth"}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
