import React from "react";
//import { useState } from "react";

const SearchBox = ({ searchChange }) => {
  //const [seacrchText, setSearchText] = useState();
  return (
    <div id="searchbox" className="pa2">
      <input
        className="pa2 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
        //onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
