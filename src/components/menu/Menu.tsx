"use client";

import { useState } from "react";
import FoodCard from "./FoodCard";

type MenuCategory = "breakfast" | "lunch" | "dinner" | "brunch";

type MenuItem = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

const menuItems: Record<MenuCategory, MenuItem[]> = {
  breakfast: [
    {
      id: 1,
      title: "Pancakes",
      description: "Fluffy pancakes served with syrup and butter.",
      price: 599,
      image: "/food/pancake.png",
    },
    {
      id: 2,
      title: "Omelette",
      description: "Classic omelette with cheese and vegetables.",
      price: 649,
      image: "/food/Omelette.png",
    },
    {
      id: 3,
      title: "Pancakes",
      description: "Fluffy pancakes served with syrup and butter.",
      price: 599,
      image: "/food/pancake.png",
    },
    {
      id: 4,
      title: "Omelette",
      description: "Classic omelette with cheese and vegetables.",
      price: 649,
      image: "/food/Omelette.png",
    },
    {
      id: 5,
      title: "Pancakes",
      description: "Fluffy pancakes served with syrup and butter.",
      price: 599,
      image: "/food/pancake.png",
    },
    {
      id: 6,
      title: "Omelette",
      description: "Classic omelette with cheese and vegetables.",
      price: 649,
      image: "/food/Omelette.png",
    },
  ],
  lunch: [
    {
      id: 3,
      title: "Burger",
      description: "Juicy beef burger with lettuce, tomato, and cheese.",
      price: 999,
      image: "/food/burger.png",
    },
    {
      id: 4,
      title: "Caesar Salad",
      description: "Fresh lettuce with Caesar dressing and croutons.",
      price: 849,
      image: "/food/caesar-salad.png",
    },
  ],
  dinner: [
    {
      id: 5,
      title: "Steak",
      description: "Grilled steak served with mashed potatoes.",
      price: 1499,
      image: "/food/steak.png",
    },
    {
      id: 6,
      title: "Pasta",
      description: "Creamy Alfredo pasta with mushrooms and herbs.",
      price: 1249,
      image: "/food/pasta.png",
    },
  ],
  brunch: [
    {
      id: 7,
      title: "Avocado Toast",
      description: "Toasted bread topped with smashed avocado.",
      price: 799,
      image: "/food/Avocado_Toast.png",
    },
    {
      id: 8,
      title: "French Toast",
      description: "Sweet and soft French toast with powdered sugar.",
      price: 899,
      image: "/food/French_Toast.png",
    },
  ],
};

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

      <div className="flex justify-center flex-wrap gap-4 mb-8">
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
