import RestaurentCard, { withPromoted } from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import { UserContext } from "../utils/UserContext";

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

    // console.log(restList);

    setResList(restList);
    setFilterList(restList);
  };

  const RestaurentPromoted = withPromoted(RestaurentCard);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === "false")
    return (
      <h1>
        Oh!! sorry looks like you are offline!!! Please check your Internet
        Connection..
      </h1>
    );

  const { setUserName, LoggedUser } = useContext(UserContext);

  return filterList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
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
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
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
        <div className="m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input
            className="border border-black p-2 m-2"
            value={LoggedUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterList.map((res) => (
          <Link
            key={res.card?.card?.info?.id}
            to={"/restaurents/" + res.card?.card?.info?.id}
          >
            {res.card?.card?.info?.promoted ? (
              <RestaurentPromoted resData={res} />
            ) : (
              <RestaurentCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
