import { CDN_URL } from "../utils/constant";

const RestaurentCard = (props) => {
  const { resData } = props;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="foodlogo"
        src={CDN_URL + resData.card.card.info.cloudinaryImageId}
      />
      <h3>{resData.card.card.info.name}</h3>
      <h4>{resData.card.card.info.cuisines.join(",")}</h4>
      <h4>{resData.card.card.info.avgRating}⭐</h4>
      <h5>{resData.card.card.info.costForTwo}</h5>
      <h5>{resData.card.card.info.sla.slaString}</h5>
    </div>
  );
};

export default RestaurentCard;
