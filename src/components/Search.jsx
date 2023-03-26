import React from "react";
import { connect } from "react-redux";
import { searchStringChange } from "../actions/search.actions";
import { searchSelector } from "../actions/search.selector";

function Search({ searchString, searchStringChange }) {
  function handleChange(value) {
    searchStringChange(value);
  }
  return (
    <div className="search">
      <input
        value={searchString}
        type="text"
        className="serch-text"
        onChange={(e) => handleChange(e.target.value)}
      />
      <button className="search-button">HIT ME</button>
    </div>
  );
}

const mapDispatch = { searchStringChange };
const mapState = (state) => ({
  searchString: searchSelector(state),
});

export default connect(mapState, mapDispatch)(Search);
