import React from "react";
import { useState } from "react";

const SearchBox = () => {
  const [seacrchText, setSearchText] = useState();
  return (
    <div id="searchbox" className="pa2">
      <input
        className="pa2 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div>
        <p>{seacrchText}</p>
      </div>
    </div>
  );
};

export default SearchBox;
