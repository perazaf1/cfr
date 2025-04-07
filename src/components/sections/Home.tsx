
import { motion } from "framer-motion";



import { ConceptCards } from "../../components/ConceptCards";
import GradientButton from "../../components/GradientButton";


export const Home = () => {
  return (
    <>
      <motion.section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
        style={{
          background:
            "linear-gradient(90deg, rgba(54,121,9,1) 0%, rgba(21,151,189,1) 100%)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center z-10 px-4 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-[#fefee2]">
            Courir, se dépasser,
            <br />
            s'amuser en famille !
          </h1>

          <p className="text-lg md:text-xl text-[#fefee2] mb-8 max-w-2xl mx-auto">
            Un moment sportif et ludique pour les parents et leurs enfants. Vous
            cherchez une activité fun pour passer du temps avec votre enfant
            tout en bougeant ? Rejoignez le run club CrazyFamilyRun !
          </p>

          {/* 👉 Ton bouton stylé qui scroll vers #event */}
          <GradientButton href="#events">Rejoignez-nous</GradientButton>
        </div>
      </motion.section>

      {/* Section des cartes de concept */}
      <ConceptCards />
    </>
  );
};
