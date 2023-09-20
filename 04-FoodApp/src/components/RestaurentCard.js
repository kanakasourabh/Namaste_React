import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import { UserContext } from "../utils/UserContext";
import User from "./User";

const RestaurentCard = (props) => {
  const { resData } = props;
  const { LoggedUser } = useContext(UserContext);

  return (
    <div className="m-4 p-4 w-[300px] bg-gray-100 rounded-lg hover:bg-gray-200 ">
      <img
        className="bg-cover bg-center"
        alt="foodlogo"
        src={CDN_URL + resData.card?.card?.info?.cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">
        {resData.card?.card?.info?.name}
      </h3>
      <h4 className="flex flex-wrap">
        {resData.card?.card?.info?.cuisines.join(",")}
      </h4>
      <h4>{resData.card?.card?.info?.avgRating}⭐</h4>
      <h5>{resData.card?.card?.info?.costForTwo}</h5>
      <h5>{resData.card?.card?.info?.sla?.slaString}</h5>
      <h5>User: {LoggedUser}</h5>
    </div>
  );
};

export const withPromoted = (RestaurentCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};

export default RestaurentCard;
