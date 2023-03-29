import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { productsSelector } from "../actions/products.selector";
import { getProducts } from "../actions/products.actions";
import { searchSelector } from "../actions/search.selector";
import { deleteProduct } from "../actions/products.actions";

function Products({ getProducts, products, searchString, deleteProduct }) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <thead>
        <tr>
          <th className="products-table__head ">
            <button
              onClick={() => sortHandler("id")}
              className="products-table__button"
            >
              Id
            </button>
          </th>
          <th className="products-table__head">
            <button
              onClick={() => sortHandler("title")}
              className="products-table__button"
            >
              Name
            </button>
          </th>
          <th className="products-table__head">
            <button
              onClick={() => sortHandler("description")}
              className="products-table__button"
            >
              Description
            </button>
          </th>
          <th className="products-table__head">
            <button
              onClick={() => sortHandler("price")}
              className="products-table__button"
            >
              Price
            </button>
          </th>
          <th className="products-table__head">Picture</th>
          <th className="products-table__head">
            <button
              onClick={() => sortHandler("rating")}
              className="products-table__button"
            >
              Rating
            </button>
          </th>
          <th className="products-table__head">
            <button
              onClick={() => sortHandler("stock")}
              className="products-table__button"
            >
              Stock
            </button>
          </th>
          <th className="products-table__head">
            <button
              onClick={() => sortHandler("category")}
              className="products-table__button"
            >
              Category
            </button>
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
              <tr
                key={product.id}
                className="products-table__item"
                onClick={() => deleteProduct(product.id)}
              >
                <th>{product.id}</th>
                <th>{product.title}</th>
                <th>{product.description}</th>
                <th>{product.price}</th>
                <th>
                  <img
                    src={product.thumbnail}
                    alt="logo"
                    className="products-table__image"
                  />
                </th>
                <th>{product.rating}</th>
                <th>{product.stock}</th>
                <th>{product.category}</th>
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

const mapDispatch = { getProducts, deleteProduct };

export default connect(mapState, mapDispatch)(Products);
