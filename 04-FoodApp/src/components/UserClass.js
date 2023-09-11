import React from "react";
import User from "./User";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    console.log("Child Constructor called");
  }

  async componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Namaste React Interval!");
    }, 1000);

    const data = fetch("https://api.github.com/users/kanakasourabh");

    const json = await (await data).json();

    this.setState({
      userInfo: json,
    });
    console.log(json);

    console.log(this.props.name + "Child Did mount");
  }

  componentDidUpdate() {
    console.log("Component Did update!!!");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component Will Unmount");
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    console.log(this.props.name + "Child render called");
    return (
      <div className="user-card">
        <img src={avatar_url} alt="image" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @sourabhkanaka</h4>
      </div>
    );
  }
}

export default UserClass;
