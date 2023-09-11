import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer called");
    }, 1000);
    console.log("Use effect");

    return () => {
      clearInterval(timer);
    };
  }, []);

  console.log("render");

  return (
    <div className="user-card">
      <h2>Count: {count}</h2>
      <h2>Count2 : {count2}</h2>
      <h2>Name : {name}</h2>
      <h3>Location : Bengaluru</h3>
      <h4>Contact : @sourabhkanaka</h4>
    </div>
  );
};

export default User;
