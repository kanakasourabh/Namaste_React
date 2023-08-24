import RestaurentCard from "./RestaurentCard";
import restoList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList] = useState(restoList);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9063433&lng=77.5856825&collection=83645&isNewCollectionFlow=true&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const json = await data.json();

    console.log(json.data.cards[2]);
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
              console.log(searchText);
            }}
          />
          <button
            onClick={() => {
              const filterrest = resList.filter((res) => {
                res.data.Name.toLowerCase().includes(searchText.toLowerCase());
              });
              console.log(searchText);
              console.log(filterrest);
              setResList(filterrest);
              console.log(resList);
            }}
          >
            🔍
          </button>
        </div>
        <button
          onClick={() => {
            const UpdateList = resList.filter((res) => res.data.avgrating > 4);
            setResList(UpdateList);
          }}
        >
          Top Restaurents
        </button>
      </div>
      <div className="res-container">
        {resList.map((res) => (
          <RestaurentCard key={res.data.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
