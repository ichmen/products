import React from "react";
import AddButton from "./AddButton";
import Search from "./Search";
// import Products from "./Products";

export default function Header() {
  return (
    <div className="header">
      <h2>Products list</h2>
      <div className="header__menu">
        <Search />
        <AddButton />
      </div>
    </div>
  );
}
