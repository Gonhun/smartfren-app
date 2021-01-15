import React, { Component } from "react";
import NavbarComp from "./components/NavbarComp";
import { BrowserRouter, Route } from "react-router-dom";
import HomeContainer from "./container/HomeContainer";
import DetailContainer from "./container/DetailContainer";

export default class App extends Component {
  state = {
    title: "Table React.js",
  };

  render() {
    return (
      <div>
        <NavbarComp title={this.state.title} />
        <BrowserRouter>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/detail/:id" exact component={DetailContainer} />
        </BrowserRouter>
      </div>
    );
  }
}
