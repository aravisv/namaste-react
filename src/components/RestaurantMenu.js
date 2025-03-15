import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCategory from "./MenuCategory";

const RestaurantMenu = () => {
  const [showCategoryItemsIndex, setShowCategoryItemsIndex] = useState(0);

  const { restaurantId } = useParams();
  const { restaurantName, menuItems } = useRestaurantMenu(restaurantId);
  return (
    <div className="w-6/12 mx-auto p-5 rounded-lg ">
      <h1 className="font-bold text-3xl mb-2">{restaurantName}</h1>
      {menuItems?.map((menuItem, index) => {
        return (
          <MenuCategory
            key={menuItem.category}
            menuCategory={menuItem}
            onCategoryClick={() => {
              setShowCategoryItemsIndex((prev) =>
                prev === index ? -1 : index
              );
            }}
            showCategoryItems={showCategoryItemsIndex === index}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
