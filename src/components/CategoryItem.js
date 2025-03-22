import React from "react";
import { BASE_IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const CategoryItems = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem(item));
  };

  return (
    <div key={item.id} className="p-2">
      <h2 className="font-bold ">{item.name}</h2>
      <div className="flex justify-between ">
        <div className="font-medium mt-4">
          <div>₹{(item.price || item.defaultPrice) / 100}</div>
          <div>
            ⭐️
            <span className="mr-1">{item.ratings.aggregatedRating.rating}</span>
            <div>
              ({item.ratings.aggregatedRating.ratingCount || "No Rating"})
            </div>
          </div>
        </div>
        <div>
          {typeof item.imageId === "string" ? (
            <img
              className="w-30 rounded-2xl"
              src={BASE_IMG_URL + item.imageId}
              alt={item.name}
            />
          ) : (
            <img className="w-30 h-30 rounded-2xl" alt={item.name} />
          )}
          <button
            className="p-1 border solid border-gray-300 rounded-lg text-sm w-[80px] relative left-4 bottom-2 cursor-pointer bg-gray-300"
            onClick={handleAddItem}
          >
            + Add
          </button>
        </div>
      </div>
      <div className="font-light tracking-tight text-sm">
        {item.description}
      </div>
    </div>
  );
};

export default CategoryItems;
