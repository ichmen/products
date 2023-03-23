import React from "react";

export default function Products() {
  return (
    <table className="products-table">
      <thead className="products-table__head">
        <tr>
          <th className="products-table__head">Id</th>
          <th className="products-table__head">Name</th>
          <th className="products-table__head">Description</th>
          <th className="products-table__head">Price</th>
          <th className="products-table__head">Picture</th>
          <th className="products-table__head">Rating</th>
          <th className="products-table__head">Stock</th>
          <th className="products-table__head">Category</th>
        </tr>
      </thead>
    </table>
  );
}
