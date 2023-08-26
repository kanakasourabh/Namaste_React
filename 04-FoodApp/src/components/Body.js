import RestaurentCard from "./RestaurentCard";
import restoList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9063433&lng=77.5856825&collection=83646&isNewCollectionFlow=true&tags=layout_CCS_SouthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const json = await data.json();
    const restList = json.data.cards.splice(3);

    console.log(restList[0].card.card);
    setResList(restList);
  };

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button>🔍</button>
        </div>
        <button
          onClick={() => {
            const filteredList = resList.map(
              (res) => res.card.card.info.avgRating > 4
            );
            setResList(filteredList);
          }}
        >
          Top Restaurents
        </button>
      </div>
      <div className="res-container">
        {resList.map((res) => (
          <RestaurentCard key={res.card.card.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
