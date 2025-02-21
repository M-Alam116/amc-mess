"use client";

import { Drawer } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Button from "./Button";

const PublicNavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const pathname = usePathname();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsDrawerOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navItems = [
    { key: "home", label: "Home", href: "/public/home" },
    { key: "menu", label: "Menu", href: "/public/menu" },
    { key: "about", label: "About Us", href: "/public/about" },
    { key: "contact", label: "Contact", href: "/public/contact" },
  ];

  return (
    <>
      <Drawer
        title={<Logo />}
        onClose={toggleDrawer}
        open={isDrawerOpen && isMobile}
        placement="left"
        width={300}
      >
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`text-lg font-medium ${
                pathname === item.href ? "text-yellow" : "text-black"
              }`}
              onClick={toggleDrawer}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4 mt-8 w-full">
          <Link href="/signup">
            <Button>Sign Up</Button>
          </Link>
          <Link href="/login">
            <Button>Login</Button>
          </Link>
        </div>
      </Drawer>

      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between gap-4 px-6 py-4">
          <Logo />

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? pathname === item.href
                      ? "text-black bg-yellow px-4 py-1 rounded-full"
                      : "text-black"
                    : pathname === item.href
                    ? "text-black bg-yellow px-4 py-1 rounded-full"
                    : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          </div>

          {isMobile && (
            <GiHamburgerMenu
              onClick={toggleDrawer}
              className={`text-2xl cursor-pointer md:hidden transition-colors duration-300 ${
                scrolled ? "text-black" : "text-white"
              }`}
            />
          )}
        </div>
      </header>
    </>
  );
};

export default PublicNavBar;
