import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { setNewProductVisibility } from "../actions/newProduct.action";
import { newProductSelector } from "../actions/newProduct.selector";
import { connect } from "react-redux";

function NewProduct({ isVisible, setVisibility }) {
  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      year: "1900",
      rating: "1",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      setVisibility(false);
    },

    validationSchema: Yup.object({
      title: Yup.string()
        .max(15, "Must be 15 characters or less")
        .min(5, "Cant be less than 5")
        .required("Required"),
      author: Yup.string()
        .max(20, "Must be 20 characters or less")
        .min(5, "Cant be less than 5")
        .required("Required"),
      year: Yup.number()
        .min(1800, "Must be 1800 or higher")
        .max(2023, "Must be 2023 or less")
        .integer("Must be integer")
        .required("Required"),
      rating: Yup.number()
        .min(1, "Must be 1 or higher")
        .max(5, "Must be 5 or less")
        .required("Required"),
    }),
  });
  if (!isVisible) {
    return null;
  }
  return (
    <div className="new-product__container">
      <form onSubmit={formik.handleSubmit} className="new-product__form">
        <h3 className="new-product__title">New product</h3>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <div className="new-product__error">{formik.errors.title || null}</div>
        <label htmlFor="author">Author</label>
        <input
          id="author"
          name="author"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.author}
        />
        {
          <div className="new-product__error">
            {formik.errors.author || null}
          </div>
        }
        <label htmlFor="year">Year</label>
        <input
          id="year"
          name="year"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.year}
        />
        {<div className="new-product__error">{formik.errors.year || null}</div>}
        <label htmlFor="rating">Rating</label>
        <input
          id="rating"
          name="rating"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.rating}
        />
        {
          <div className="new-product__error">
            {formik.errors.rating || null}
          </div>
        }
        <div className="new-product__buttons-container">
          <button type="submit" className="new-product__button">
            Submit
          </button>
          <button
            className="new-product__button"
            onClick={() => setVisibility(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

const mapDispatch = { setVisibility: setNewProductVisibility };
const mapState = (state) => ({
  isVisible: newProductSelector(state),
});

export default connect(mapState, mapDispatch)(NewProduct);
