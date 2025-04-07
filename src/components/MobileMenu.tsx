type MobileMenuProps = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

export const MobileMenu = ({ menuOpen, setMenuOpen }: MobileMenuProps) => {

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
          ${
            menuOpen
              ? "h-screen opacity-100 pointer-events-auto"
              : "h-0 opacity-0 pointer-events-none"
          } bg-gradient-to-r from-green-700 to-cyan-600`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-[#fefee2] text-3xl cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* liens du menu */}
      <div className="flex flex-col items-center space-y-6 text-[#fefee2] text-xl">
        <a
          className={`text-2xl font-semibold text-[#fefee2] my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }                            
            `}
          onClick={() => setMenuOpen(false)}
          href="#home"
        >
          Accueil
        </a>
        <a
          className={`text-2xl font-semibold text-[#fefee2] my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }                            
            `}
          onClick={() => setMenuOpen(false)}
          href="#concept"
        >
          Concept
        </a>
        <a
          className={`text-2xl font-semibold text-[#fefee2] my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }                            
            `}
          onClick={() => setMenuOpen(false)}
          href="#events"
        >
          Evènements
        </a>
        <a
          className={`text-2xl font-semibold text-[#fefee2] my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }                            
            `}
          onClick={() => setMenuOpen(false)}
          href="#about"
        >
          À propos
        </a>
        <a
          className={`text-2xl font-semibold text-[#fefee2] my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }                            
            `}
          onClick={() => setMenuOpen(false)}
          href="#contact"
        >
          Contact
        </a>
      </div>
    </div>
  );
};