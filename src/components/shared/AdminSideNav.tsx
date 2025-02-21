"use client";

import { Drawer, Menu, MenuProps } from "antd";
import { useSelector } from "react-redux";
import { FaCartShopping, FaUsers } from "react-icons/fa6";
import { MdOutlineLogout, MdOutlineMenuBook } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Logo from "./Logo";
import { RootState } from "@/store/store";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "menu management",
    label: (
      <Link href="/admin/menu-management" passHref>
        Menu Management
      </Link>
    ),
    icon: <MdOutlineMenuBook size={16} />,
  },
  {
    key: "order management",
    label: (
      <Link href="/admin/order-management" passHref>
        Order Management
      </Link>
    ),
    icon: <FaCartShopping size={18} />,
  },
  {
    key: "user management",
    label: (
      <Link href="/admin/user-management" passHref>
        User Management
      </Link>
    ),
    icon: <FaUsers size={18} />,
  },
];

const AdminSideNav: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState<boolean>(
    window.innerWidth <= 1024
  );
  const collapsed = useSelector(
    (state: RootState) => state.collapsed.collapsed
  );

  const handleLogout = () => {
    console.log("Logout triggered");
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* ==================== Drawer ============================ */}
      <GiHamburgerMenu
        onClick={toggleDrawer}
        className="lg:hidden fixed top-5 left-5 z-50"
      />
      {isMobileView && (
        <Drawer
          title={
            <div className="flex items-center justify-center mb-4 mt-2">
              <Logo />
            </div>
          }
          footer={
            <div
              className="flex items-center space-x-2 p-4 cursor-pointer border-t border-t-gray-200 dark:border-t-gray-700"
              onClick={handleLogout}
            >
              <MdOutlineLogout size={20} />
              <span className="text-[14px]">Logout</span>
            </div>
          }
          onClose={toggleDrawer}
          open={isDrawerOpen}
          placement="left"
          // bodyStyle={{ padding: 0 }}
          width={300}
          onClick={toggleDrawer}
          closeIcon={
            <div
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              <IoMdClose />
            </div>
          }
          style={{
            backgroundColor: "#ffffff",
            color: "#000000",
          }}
        >
          <Menu
            defaultSelectedKeys={["dashboard"]}
            mode="inline"
            items={items}
            theme={"light"}
          />
        </Drawer>
      )}

      {/* ==================== Sidenav ============================ */}
      <div className="h-screen hidden lg:flex flex-col justify-between sticky top-0 left-0 bg-white dark:bg-darkBackground border-r-gray-200 dark:border-r-gray-700 border-r">
        <div>
          <div className="flex items-center justify-center mb-4 mt-2">
            {/* <Image
              src={!collapsed ? "/images/logo1.png" : "/images/logo-small.png"}
              alt="Logo"
              width={collapsed ? 40 : 180}
              height={collapsed ? 40 : 80}
              className="transition-all duration-300"
            /> */}
            <h1>AMC Logo</h1>
          </div>
          <Menu
            style={{
              width: collapsed ? 80 : 250,
              transition: "width 0.2s ease",
              height: "calc(100vh - 8rem)",
              overflowY: "auto",
              padding: "0px 10px",
            }}
            defaultSelectedKeys={["dashboard"]}
            mode="inline"
            items={items}
            theme={"light"}
            inlineCollapsed={collapsed}
          />
        </div>

        <div
          className="flex items-center space-x-2 p-4 cursor-pointer border-t border-t-gray-200 dark:border-t-gray-700"
          onClick={handleLogout}
        >
          <MdOutlineLogout size={20} />
          {!collapsed && <span className="text-[14px]">Logout</span>}
        </div>
      </div>
    </>
  );
};

export default AdminSideNav;
