import "./App.css";
import "./index.css";
import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen.tsx";
import { Navbar } from "./components/Navbar.tsx";
import { MobileMenu } from "./components/MobileMenu.tsx";
import { Home } from "./components/sections/Home.tsx";
import { Events } from "./components/sections/Events.tsx";




function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      {isLoaded && (
        <div
          className={`min-h-screen transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } bg-black text-gray-100`}
        >
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          
          {/* Section Accueil */}
          <Home />
          
          {/* Section Events avec id="event" pour le scroll */}
          <Events />
        </div>
      )}
    </>
  );
}

export default App;
