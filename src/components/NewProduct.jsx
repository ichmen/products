import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { StyledForm } from "./NewProductStyled";

export default function NewProduct() {
  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      year: "1900",
      rating: "1",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
  return (
    <StyledForm>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <div className="error">{formik.errors.title || null}</div>
        <label htmlFor="author">Author</label>
        <input
          id="author"
          name="author"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.author}
        />
        {<div className="error">{formik.errors.author || null}</div>}
        <label htmlFor="year">Year</label>
        <input
          id="year"
          name="year"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.year}
        />
        {<div className="error">{formik.errors.year || null}</div>}
        <label htmlFor="rating">Rating</label>
        <input
          id="rating"
          name="rating"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.rating}
        />

        {<div className="error">{formik.errors.rating || null}</div>}
        <button type="submit">Submit</button>
        <button>Cancel</button>
      </form>
    </StyledForm>
  );
}

// Назва, Автор, Рік видання, Рейтинг.
