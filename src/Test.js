import React, { Component } from "react";
import Test1 from "./Test1";
export default class Test extends Component {
  state = {
    date: new Date(),
    showing: "Yes",
  };
  // Add your methods in here.
  render() {
    const changeText = () => {
      if (this.state.showing === "Yes") {
        this.setState({ showing: "No" });
      } else {
        this.setState({ showing: "Yes" });
      }
    };
    return (
      <div style={{ border: "1px solid red" }}>
        <p>This is Test Component</p>
        <p>Clock - {this.state.date.toLocaleString()}</p>
        <p>Showing = {this.state.showing}</p>
        <button onClick={changeText}>Change</button>
        <Test1 />
      </div>
    );
  }
  componentDidMount() {
    const timer = 1000;
    this.intervalid = setInterval(() => {
      this.setState({ date: new Date() });
    }, timer);
  }
  componentWillUnmount() {
    clearInterval(this.intervalid);
  }
  componentDidUpdate(prevProp, prevState) {
    if (prevState.date !== this.state.date) {
      console.log("I got updated that is SHowing State got updated");
    }
  }
}

Test.defaultProps = { name: "Durgesh" };
