import { useState, useEffect } from "react";
import { RESTAURANTS_API_URL } from "./constants";

const useRestaurants = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_API_URL);
    const json = await data.json();
    setListOfRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const searchRestaurants = (searchText) => {
    setFilteredRestaurants(
      listOfRestaurants.filter((res) =>
        res?.info?.name?.toLowerCase().includes(searchText?.toLowerCase())
      )
    );
  };

  const filterTopRatedRestaurants = () => {
    const filteredList = listOfRestaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4.5
    );
    setFilteredRestaurants(filteredList);
  };

  return { filteredRestaurants, searchRestaurants, filterTopRatedRestaurants };
};

export default useRestaurants;
