import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/home" className="">
      <h1 className="text-yellow text-lg font-bold">Mess Management System</h1>
    </Link>
  );
};

export default Logo;
