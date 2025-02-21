"use client"

import FoodCard from "../menu/FoodCard";
import { menuItems } from "@/data/data";

const PopularItem = () => {
  const popularItems = Object.values(menuItems)
    .flat()
    .filter((item) => item.isPopular);

  return (
    <div className="mt-16 mb-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 opacity-70">Popular Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {popularItems.map((item) => (
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
    </div>
  );
};

export default PopularItem;
