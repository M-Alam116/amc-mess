"use client";

import React, { ReactNode, MouseEventHandler } from "react";

interface ActionButtonProps {
  icon: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
  className?: string;
  disabled?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  icon,
  onClick,
  className = "",
  disabled = false,
}) => {
  return (
    <div
      className={`flex items-center justify-center rounded-full border w-11 h-11 cursor-pointer bg-transparent 
        ${disabled ? "cursor-not-allowed opacity-50" : ""} 
        ${className}`}
      onClick={disabled ? undefined : onClick}
    >
      {icon}
    </div>
  );
};

export default ActionButton;
