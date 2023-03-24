import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { productsSelector } from "../actions/products.selector";
import { getProducts } from "../actions/products.actions";

function Products({ getProducts, products }) {
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
            <button onClick={() => sortHandler("price")}>Name</button>
          </th>
          <th className="products-table__head">
            {" "}
            <button>Description</button>
          </th>
          <th className="products-table__head">
            <button>Price</button>
          </th>
          <th className="products-table__head">Picture</th>
          <th className="products-table__head">Rating</th>
          <th className="products-table__head">Stock</th>
          <th className="products-table__head">Category</th>
        </tr>
      </thead>
      <tbody>
        {products
          .slice()
          .sort((prod1, prod2) =>
          
          if(typeof )
            prod1[sortString]
              .toString()
              .localeCompare(prod2[sortString].toString())
          )

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

const mapState = (state) => ({ products: productsSelector(state) });

const mapDispatch = { getProducts };

export default connect(mapState, mapDispatch)(Products);
