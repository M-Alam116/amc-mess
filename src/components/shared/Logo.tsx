import Link from "next/link";

interface LogoProps {
  scrolled?: boolean;
}

const Logo = ({ scrolled }: LogoProps) => {
  return (
    <Link href="/home" className="">
      <h1 className={`text-lg font-bold transition-colors duration-300 ${scrolled ? "text-black" : "text-yellow"}`}>Mess Management System</h1>
    </Link>
  );
};

export default Logo;
