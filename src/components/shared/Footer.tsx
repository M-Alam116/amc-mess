import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-lightBlack text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:justify-items-center">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm opacity-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              totam soluta illo illum fugiat fuga corporis distinctio veniam
              odit ipsa.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/public/home" className="text-sm opacity-80">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/public/menu" className="text-sm opacity-80">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/public/about" className="text-sm opacity-80">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/public/contact" className="text-sm opacity-80">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm opacity-80">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm opacity-80">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} AMC. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-300 hover:text-yellow">
              <FaTwitter className="text-lg" />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-yellow">
              <FaLinkedin className="text-lg" />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-yellow">
              <FaGithub className="text-lg" />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-yellow">
              <FaFacebook className="text-lg" />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-yellow">
              <FaInstagram className="text-lg" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
