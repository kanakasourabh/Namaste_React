const RestaurentCard = (props) => {
    const {resData} = props;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="foodlogo"
        src={resData.data.img}
      />
      <h3>{resData.data.Name}</h3>
      <h4>{resData.data.cuisines.join(",")}</h4>
      <h4>{resData.data.avgrating} stars </h4>
      <h5>💰{resData.data.costForTwo / 100} FOR TWO</h5>
      <h5>{resData.data.avgdeltime} mins</h5>
    </div>
  );
};


export default RestaurentCard;