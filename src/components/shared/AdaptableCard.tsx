import React, { ReactNode } from "react";

interface AdaptableCardProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

const AdaptableCard: React.FC<AdaptableCardProps> = ({
  children,
  className = "",
  onClick,
}) => {
  return (
    <div
      style={{ boxShadow: "0px 2px 8px 0px #00000026" }}
      className={`bg-white dark:bg-secondaryDarkBackground p-3 rounded-xl ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default AdaptableCard;
