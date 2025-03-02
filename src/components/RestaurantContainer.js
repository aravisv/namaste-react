import { BASE_IMG_URL } from "../utils/constants";

const RestaurantContainer = (props) => {
  const { resList } = props;
  const { id, name, cloudinaryImageId, avgRating, cuisines, costForTwo } =
    resList?.info;

  return (
    <div className="res-card">
      <h3>{name}</h3>
      <img src={BASE_IMG_URL + cloudinaryImageId} alt={name + "image"}></img>
      <h4>{avgRating}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantContainer;
