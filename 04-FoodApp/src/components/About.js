import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("parent Did Mount");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>Welcome to about page</h1>
        <UserClass name={"First"} />
      </div>
    );
  }
}

export default About;
