import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const { restaurantName, menuItems } = useRestaurantMenu(restaurantId);

  return (
    <div className="menu">
      <h1>{restaurantName}</h1>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span> : Rs {item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
