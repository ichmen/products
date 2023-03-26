import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { productsSelector } from "../actions/products.selector";
import { getProducts } from "../actions/products.actions";
import { searchSelector } from "../actions/search.selector";

function Products({ getProducts, products, searchString }) {
  useEffect(() => getProducts(), []);
  const [sortString, setSortString] = useState("id");
  if (!products) {
    return null;
  }

  function sortHandler(sort) {
    setSortString(sort);
  }
  return (
    <table className="products-table">
      <thead className="products-table__head">
        <tr>
          <th className="products-table__head">
            Id <button onClick={() => sortHandler("id")}>↑</button>
          </th>
          <th className="products-table__head">
            <button onClick={() => sortHandler("title")}>Name</button>
          </th>
          <th className="products-table__head">
            <button onClick={() => sortHandler("description")}>
              Description
            </button>
          </th>
          <th className="products-table__head">
            <button onClick={() => sortHandler("price")}>Price</button>
          </th>
          <th className="products-table__head">Picture</th>
          <th className="products-table__head">
            <button onClick={() => sortHandler("rating")}>Rating</button>
          </th>
          <th className="products-table__head">
            <button onClick={() => sortHandler("stock")}>Stock</button>
          </th>
          <th className="products-table__head">
            <button onClick={() => sortHandler("category")}>Category</button>
          </th>
        </tr>
      </thead>
      <tbody>
        {products
          .slice()
          .filter(
            (el) =>
              el.title.includes(searchString) ||
              el.category.includes(searchString)
          )
          .sort((prod1, prod2) => {
            const [firstElem, secondElem] = [
              prod1[sortString],
              prod2[sortString],
            ];
            if (
              typeof firstElem === "number" &&
              typeof secondElem === "number"
            ) {
              return firstElem - secondElem;
            }
            return firstElem.toString().localeCompare(secondElem.toString());
          })
          .map((product) => {
            return (
              <tr key={product.id}>
                <th className="products-table__item">{product.id}</th>
                <th className="products-table__item">{product.title}</th>
                <th className="products-table__item">{product.description}</th>
                <th className="products-table__item">{product.price}</th>
                <th className="products-table__item">
                  <img
                    src={product.thumbnail}
                    alt="logo"
                    className="products-table__image"
                  />
                </th>
                <th className="products-table__item">{product.rating}</th>
                <th className="products-table__item">{product.stock}</th>
                <th className="products-table__item">{product.category}</th>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

const mapState = (state) => ({
  products: productsSelector(state),
  searchString: searchSelector(state),
});

const mapDispatch = { getProducts };

export default connect(mapState, mapDispatch)(Products);
