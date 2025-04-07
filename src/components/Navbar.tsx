import { useEffect } from "react";
import { MobileMenu } from "./MobileMenu";

type NavbarProps = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

export const Navbar = ({ menuOpen, setMenuOpen }: NavbarProps) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <nav
        className="fixed top-0 w-full z-40 shadow-lg"
        style={{
          background:
            "linear-gradient(90deg, rgba(54,121,9,1) 0%, rgba(21,151,189,1) 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a
              href="#home"
              className="font-mono text-xl font-bold text-[#fefee2] flex items-center"
            >
              <img
                src="/public/images/logo500.png"
                alt="Crazy Family Run Logo"
                className="h-12 w-auto"
              />
            </a>
            <div
              className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
              onClick={() => setMenuOpen(!menuOpen)} // ✅ simplifié ici
            >
              &#9776;
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-[#fefee2] transition-colors">
                Accueil
              </a>
              <a href="#concept" className="text-gray-300 hover:text-[#fefee2] transition-colors">
                Concept
              </a>
              <a href="#events" className="text-gray-300 hover:text-[#fefee2] transition-colors">
                Evènements
              </a>
              <a href="#about" className="text-gray-300 hover:text-[#fefee2] transition-colors">
                A propos
              </a>
              <a href="#contact" className="text-gray-300 hover:text-[#fefee2] transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 👇 Mobile menu added here */}
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};
