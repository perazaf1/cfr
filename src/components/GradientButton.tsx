import React from "react";

type GradientButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
};

const GradientButton: React.FC<GradientButtonProps> = ({ children, href, onClick }) => {
  const ButtonTag: any = href ? "a" : "button";

  return (
    <ButtonTag
      onClick={onClick}
      href={href}
      className="px-6 py-3 rounded-2xl bg-[#fefee2] text-[#367909] font-poppins shadow-md transition-all duration-300 hover:brightness-105 inline-block"
    >
      {children}
    </ButtonTag>
  );
};

export default GradientButton;
