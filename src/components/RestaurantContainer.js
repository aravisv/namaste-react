import { BASE_IMG_URL } from "../utils/constants";

const RestaurantContainer = (props) => {
  const { resList } = props;
  const { id, name, cloudinaryImageId, avgRating, cuisines, costForTwo } =
    resList?.info || {};

  return (
    <div
      data-testid="restaurantCard"
      className="w-[250px] h-120 m-2 px-4 py-6 rounded-2xl bg-gray-300 hover:bg-gray-200"
    >
      <h3 className="font-bold mb-3">{name}</h3>
      <div className="h-[270px] inline-block">
        <img
          className="rounded-2xl shadow-2xl hover:shadow-white shadow-gray-300"
          src={BASE_IMG_URL + cloudinaryImageId}
          alt={name + "image"}
        ></img>
      </div>
      <h4 className="font-semibold">{avgRating} ⭐️</h4>
      <h4 className="font-semibold">{cuisines?.join(", ")}</h4>
      <h4 className="italic">{costForTwo}</h4>
    </div>
  );
};

export default RestaurantContainer;

const withPromotedLabel = (RestaurantContainer) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-0.5 rounded-lg text-[12px]">
          Promoted
        </label>
        <RestaurantContainer {...props} />
      </div>
    );
  };
};

export { withPromotedLabel };
