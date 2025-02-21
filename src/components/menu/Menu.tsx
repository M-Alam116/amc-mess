"use client";

import { useState } from "react";
import FoodCard from "./FoodCard";
import { MenuCategory, menuItems } from "@/data/data";

const isWeekend = () => {
  const today = new Date().getDay();
  return today === 0 || today === 6;
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState<MenuCategory>("breakfast");

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-6 opacity-70">
        Our Menu
      </h1>
      <div className="flex justify-center space-x-4 mb-8">
        {Object.keys(menuItems).map(
          (tab) =>
            (tab !== "brunch" || isWeekend()) && (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as MenuCategory)}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === tab ? "bg-yellow text-black" : "bg-gray-200"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            )
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {menuItems[activeTab].map((item) => (
          <FoodCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
            onAddToCart={() => console.log(`${item.title} added to cart`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
