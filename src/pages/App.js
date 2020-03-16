import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "components/Navigation";
import StyleGuide from "./StyleGuide/StyleGuide";
import "./App.scss";

export default class App extends React.Component {
  displayName = App.name;

  render() {
    return (
      <HashRouter>
        <Navigation>
          <Route path="/" component={StyleGuide} />
        </Navigation>
      </HashRouter>
    );
  }
}
