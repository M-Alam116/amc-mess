interface ButtonProps {
  onClick?: () => void;
  className?: string;
  outline?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  className = "",
  outline = false,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${
        outline
          ? "border border-yellow text-yellow hover:bg-yellow hover:text-black"
          : "bg-yellow text-black"
      } transition-all duration-300 text-sm h-10 px-6 rounded-lg ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
