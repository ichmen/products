import React from "react";
import { connect } from "react-redux";
import { searchStringChange } from "../actions/search.actions";
import { searchSelector } from "../actions/search.selector";
import { setNewProductVisibility } from "../actions/newProduct.action";

function Search({ searchString, searchStringChange, setNewProductVisibility }) {
  function handleChange(value) {
    searchStringChange(value);
  }
  return (
    <div className="search">
      <span className="search__text">Input search</span>
      <input
        value={searchString}
        type="text"
        className="serch-text"
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

const mapDispatch = { searchStringChange, setNewProductVisibility };
const mapState = (state) => ({
  searchString: searchSelector(state),
});

export default connect(mapState, mapDispatch)(Search);
