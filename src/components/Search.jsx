import React from "react";

export default function Search() {
  function handleClick() {}
  return (
    <div className="search">
      <input type="text" className="serch-text" />
      <button className="search-button" onClick={handleClick}>
        HIT ME
      </button>
    </div>
  );
}
