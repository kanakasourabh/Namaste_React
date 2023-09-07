import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9063433&lng=77.5856825&collection=83646&isNewCollectionFlow=true&tags=layout_CCS_SouthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const json = await data.json();
    const restList = json.data?.cards?.splice(3);

    console.log(restList);

    setResList(restList);
    setFilterList(restList);
  };

  return filterList.length === 0 ? (
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
          <button
            onClick={() => {
              const filterText = resList.filter((res) =>
                res.card.card.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilterList(filterText);
              console.log(filterText);
              console.log(searchText);
            }}
          >
            🔍
          </button>
        </div>
        <button
          onClick={() => {
            const filteredList = filterList.filter(
              (res) => res.card?.card?.info?.avgRating > 4
            );
            setFilterList(filteredList);
            console.log(filteredList);
          }}
        >
          Top Restaurents
        </button>
      </div>
      <div className="res-container">
        {filterList.map((res) => (
          <Link
            key={res.card?.card?.info?.id}
            to={"/restaurents/" + res.card?.card?.info?.id}
          >
            <RestaurentCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
