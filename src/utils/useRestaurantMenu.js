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

  return { menuItems, restaurantName };
};

export default useRestaurantMenu;
