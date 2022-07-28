import { Component, Fragment } from "react";

import ManagedContest from "./Components/ManagedContest";
import Slider from "./Components/Slider";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        {/* <ManagedContest/> */}
        <Slider />
      </>
    );
  }
}
