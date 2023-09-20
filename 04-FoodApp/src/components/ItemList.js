import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (items) => {
    //dispatch an action
    dispatch(addItem(items));
  };

  return (
    <div>
      {items.map((items) => (
        <div
          key={items.card.info.id}
          className="p-2 m-2 border-gray-500 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            {items.card?.info?.itemAttribute?.vegClassifier === "NONVEG" ? (
              <span>🔴</span>
            ) : (
              <span>✅</span>
            )}
            <div className="py-2">
              <span className="font-bold">{items.card.info.name}</span>
              <span> - ₹ {items.card.info.price / 100}</span>
            </div>
            <p className="text-xs">{items.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4 ">
            <div className="absolute border-black">
              <button
                className="p-2 mx-8 rounded-lg bg-white text-green-400 shadow-lg border-green-100 border-2"
                onClick={() => handleAddItem(items)}
              >
                Add
              </button>
            </div>
            {items.card.info.imageId && (
              <img src={CDN_URL + items.card.info.imageId} className="my-6" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
