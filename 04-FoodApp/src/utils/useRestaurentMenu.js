import { useEffect, useState } from "react";
import { MENU_API } from "./constant";

const useRestaurentMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      MENU_API +
        resId +
        "&catalog_qa=undefined&query=South%20Indian&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurentMenu;
