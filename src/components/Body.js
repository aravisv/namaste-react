import { useEffect, useState } from "react";
import RestaurantContainer, { withPromotedLabel } from "./RestaurantContainer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurants from "../utils/useRestaurants";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const { onlineStatus } = useOnlineStatus();
  const { filteredRestaurants, searchRestaurants, filterTopRatedRestaurants } =
    useRestaurants();

  if (!onlineStatus) {
    return <h1>You are offline. Please check internet connection</h1>;
  }

  const PromotedRestaurantContainer = withPromotedLabel(RestaurantContainer);

  return (
    <div className="body">
      <div className="flex m-2">
        <div className="search-box">
          <input
            className="border border-solid rounded"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value || "");
            }}
          />
          <button
            className="mx-4 px-4 border border-solid rounded hover:bg-gray-300 hover:cursor-pointer"
            onClick={() => searchRestaurants(searchText)}
          >
            Search
          </button>
        </div>
        <button
          className="px-4 border border-solid rounded hover:bg-gray-300 hover:cursor-pointer"
          onClick={() => {
            filterTopRatedRestaurants();
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      {/* choose every 3rd restaurant as promoted for learning purpose */}
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant, index) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {index % 3 === 0 ? (
              <PromotedRestaurantContainer resList={restaurant} />
            ) : (
              <RestaurantContainer resList={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
