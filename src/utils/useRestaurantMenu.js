import { useEffect, useState } from "react";
import { MENU_BASE_URL } from "../utils/constants";

const useRestaurantMenu = (restaurantId) => {
  const [menuItems, setMenuItems] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    const items = await fetch(MENU_BASE_URL + restaurantId);
    const data = await items.json();
    setRestaurantName(data?.data?.cards[0]?.card?.card?.text);
    const cards =
      data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (card) => {
          return (
            card?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          );
        }
      );
    setMenuItems(
      cards?.map((itemCard) => {
        const { title, itemCards } = itemCard?.card?.card;
        return {
          category: title || "",
          items: itemCards.map((items) => {
            return {
              ...items.card.info,
            };
          }),
        };
      })
    );
  };

  return { menuItems, restaurantName };
};

export default useRestaurantMenu;
