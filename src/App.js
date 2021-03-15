import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import AddDataContainer from "./containers/AddDataContainer";
import DetailDataContainer from "./containers/DetailDataContainer";
import EditDataContainer from "./containers/EditDataContainer";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <BrowserRouter>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/add" exact component={AddDataContainer} />
          <Route path="/detail/:id" exact component={DetailDataContainer} />
          <Route path="/edit/:id" exact component={EditDataContainer} />
        </BrowserRouter>
      </div>
    );
  }
}
