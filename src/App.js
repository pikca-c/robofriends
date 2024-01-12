import React from "react";
import Cardlist from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";

const App = () => {
  <div id="app">
    <h1>RoboFriends</h1>
    <SearchBox />
    <Cardlist robots={robots} />
  </div>;
};

export default App;
