import React from "react";
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-8 py-3.5 border border-white rounded-2xl text-white text-sm font-semibold tracking-wide hover:bg-white hover:text-black transition-all duration-300 min-w-40"
    >
      {children}
    </button>
  );
}
