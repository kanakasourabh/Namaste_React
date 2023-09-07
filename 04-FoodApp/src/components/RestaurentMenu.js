import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurentMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API +
        resId +
        "&catalog_qa=undefined&query=South%20Indian&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json.data);
    console.log(resInfo);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{resInfo?.cards[0]?.card?.card?.info.name}</h1>
      <p>{resInfo?.cards[0]?.card?.card?.info.cuisines.join(",")}</p>
      <h3>{resInfo?.cards[0]?.card?.card?.info.costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs. {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
