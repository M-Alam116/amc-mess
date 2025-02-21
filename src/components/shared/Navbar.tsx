"use client";

import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleCollapsed } from "@/store/collapsedSlice";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { RootState } from "@/store/store";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const collapsed = useSelector(
    (state: RootState) => state.collapsed.collapsed
  );

  const handleCollapseToggle = () => {
    dispatch(toggleCollapsed());
  };

  return (
    <div className="flex items-center justify-between sticky top-0 right-0 z-20 p-4 bg-white dark:bg-darkBackground border-b-gray-200 dark:border-b-gray-700 border-b">
      <div
        onClick={handleCollapseToggle}
        className="cursor-pointer hidden lg:flex"
      >
        {collapsed ? (
          <AiOutlineMenuUnfold size={20} />
        ) : (
          <AiOutlineMenuFold size={20} />
        )}
      </div>

      <div className="flex items-center ml-auto space-x-4">
        <FaUserCircle size={24} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
