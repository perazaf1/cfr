'use client';
import { motion } from 'framer-motion';

export const ConceptCards = () => {
  const concepts = [
    {
      id: 1,
      title: "1 à 3 km de course",
      description: "Un parcours accessible à tous, adapté aux familles avec des enfants de tout âge. Aucun niveau sportif requis, juste l'envie de partager un moment actif !",
      icon: "running",
      color: "#00a9af"
    },
    {
      id: 2,
      title: "Défis ludiques",
      description: "Tout au long du parcours, relevez ensemble des petits défis amusants qui renforceront votre complicité parent-enfant et rendront la course encore plus divertissante.",
      icon: "target",
      color: "#00a9af"
    },
    {
      id: 3,
      title: "Ambiance conviviale",
      description: "Une atmosphère bienveillante et motivante où l'entraide et la bonne humeur sont les maîtres mots. L'objectif n'est pas la performance mais le plaisir partagé.",
      icon: "smile",
      color: "#00a9af"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut'
      }
    })
  };

  return (
    <section id = "concept" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-2 text-center text-[#367909]">Notre Concept</h2>
        <div className="w-20 h-1 bg-[#1597bd] mx-auto mb-6"></div>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Une expérience sportive unique pour renforcer les liens familiaux
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {concepts.map((concept, index) => (
            <motion.div
              key={concept.id}
              className="bg-white rounded-lg shadow-lg p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              variants={cardVariants}
            >
              <div className="flex justify-center mb-6">
                {/* Tes icônes comme avant */}
                {/* (même code pour icônes, inchangé) */}
                {concept.icon === "running" && (
                  <svg className="w-12 h-12 text-[#00a9af]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.5,5.5C14.59,5.5 15.5,4.58 15.5,3.5C15.5,2.38 14.59,1.5 13.5,1.5C12.39,1.5 11.5,2.38 11.5,3.5C11.5,4.58 12.39,5.5 13.5,5.5M9.89,19.38L10.89,15L13,17V23H15V15.5L12.89,13.5L13.5,10.5C14.79,12 16.79,13 19,13V11C17.09,11 15.5,10 14.69,8.58L13.69,7C13.29,6.38 12.69,6 12,6C11.69,6 11.5,6.08 11.19,6.08L6,8.28V13H8V9.58L9.79,8.88L8.19,17L3.29,16L2.89,18L9.89,19.38Z" />
                  </svg>
                )}
                {concept.icon === "target" && (
                  <svg className="w-12 h-12 text-[#00a9af]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z" />
                  </svg>
                )}
                {concept.icon === "smile" && (
                  <svg className="w-12 h-12 text-[#00a9af]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M6.76,8.45C7.5,8.45 8.13,9.06 8.13,9.81C8.13,10.56 7.5,11.17 6.76,11.17C6.5,11.17 6,10.56 6,9.81C6,9.06 6.5,8.45 6.76,8.45M17.24,8.45C18,8.45 18.5,9.06 18.5,9.81C18.5,10.56 18,11.17 17.24,11.17C16.5,11.17 15.87,10.56 15.87,9.81C15.87,9.06 16.5,8.45 17.24,8.45M12,17.5C9.5,17.5 7.29,16.18 6,14.25C6.93,16 9.27,17.18 12,17.18C14.73,17.18 17.07,16 18,14.25C16.71,16.18 14.5,17.5 12,17.5Z" />
                  </svg>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-[#367909]">
                {concept.title}
              </h3>
              <p className="text-gray-700 text-center">
                {concept.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
