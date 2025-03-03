import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_BASE_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");
  const { restaurantId } = useParams();

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    const items = await fetch(MENU_BASE_URL + restaurantId);
    const data = await items.json();
    setRestaurantName(data?.data?.cards[0]?.card?.card?.text);
    setMenuItems(
      data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
        (menuCard) => {
          return {
            id: menuCard?.card?.info?.id,
            name: menuCard?.card?.info?.name,
            price: menuCard?.card?.info?.defaultPrice / 100,
          };
        }
      )
    );
  };

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
