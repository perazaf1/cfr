import { useState, useEffect } from "react";


type LoadingScreenProps = {
  onComplete: () => void;
};

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  // ton composant ici
  const [text, setText] = useState("");
  const fullText = "Crazy Family Run";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(()=> {
            onComplete()
        },1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]); // Added empty dependency array here

  const gradientTextStyle = {
    background: "linear-gradient(90deg, rgba(54,121,9,1) 0%, rgba(21,151,189,1) 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    display: "inline-block"
  };

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        <span style={gradientTextStyle}>{text}</span>
        <span className="animate-blink ml-1 text-white"> | </span>
      </div>
      <div className="w-[370px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div 
          className="w-[40%] h-full animate-loading-bar"
          style={{ backgroundColor: "#367909", boxShadow: "0 0 15px #367909" }}
        ></div>
      </div>  
    </div>
  );
};