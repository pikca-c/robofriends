import React from "react";

class SearchBox extends React.Component {
  render() {
    return (
      <div id="searchbox" className="pa2">
        <input
          className="pa2 ba b--green bg-lightest-blue"
          type="search"
          placeholder="search robots"
        />
      </div>
    );
  }
}

export default SearchBox;
