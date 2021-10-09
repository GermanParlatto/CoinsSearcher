import React from "react";

const Card: React.FC = ({ children }) => {
  return (
    <div className="bg-white shadow-lg rounded flex p-4 flex-col w-full">
      {children}
    </div>
  );
};

Card.displayName = "Card";
export default Card;
