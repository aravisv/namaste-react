import { useEffect, useState } from "react";
import RestaurantContainer from "./RestaurantContainer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { onlineStatus } = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  if (!onlineStatus) {
    return <h1>You are offline. Please check internet connection</h1>;
  }

  return (
    <div className="body">
      <div className="filters">
        <div className="search-box">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value || "");
            }}
          />
          <button
            onClick={() => {
              setFilteredRestaurants(
                listOfRestaurants.filter((res) =>
                  res?.info?.name
                    ?.toLowerCase()
                    .includes(searchText?.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantContainer resList={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
