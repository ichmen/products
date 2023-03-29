import React from "react";
import { connect } from "react-redux";
import { setNewProductVisibility } from "../actions/newProduct.action";

function AddButton({ setNewProductVisibility }) {
  return (
    <button
      className="add-button"
      onClick={() => setNewProductVisibility(true)}
    >
      Add new product
    </button>
  );
}

const mapDispatch = { setNewProductVisibility };

export default connect(null, mapDispatch)(AddButton);
