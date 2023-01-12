import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Register() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordRepeat: "",
      role: "",
      profilePictureUrl: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(8, "Must be 8 characters or more")
        .max(15, "Must be less than 15 characters")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .max(15, "Must be less than 15 characters")
        .matches(
          /^.*(?=.*\d)((?=.*[a-zA-Z]){1}).*$/,
          "Password must contain atleast one letter and one number"
        )
        .required("Required"),
      passwordRepeat: Yup.string()
        .oneOf([Yup.ref("password")], "Password does not match")
        .required("Required"),
      profilePictureUrl: Yup.string().required("Required"),
      phoneNumber: Yup.string()
        .min(10, "Must be 10 characters or more")
        .max(12, "Must be 12 characters or less")
        .matches(/^[0-9]{10,12}$/, "Must be in digit")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      axios
        .post(`${process.env.REACT_APP_BASEURL}/api/v1/register`, values, {
          headers: {
            apiKey: `${process.env.REACT_APP_APIKEY}`,
          },
          data: {
            name: values.name,
            email: values.email,
            password: values.password,
            passwordRepeat: values.passwordRepeat,
            role: values.role,
            profilePictureUrl: values.profilePictureUrl,
            phoneNumber: values.phoneNumber,
          },
        })
        .then((res) => {
          console.log(res);
          formik.resetForm({ values: "" });
          alert("Your account is registered. Log in to access your website!");
          window.location.href = "/";
        })
        .catch((error) => {
          console.log(error);
          alert("Registration failed. Please try again!");
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}
      <br />
      <label htmlFor="lastName">email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <br />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}
      <br />
      <label htmlFor="passwordRepeat">Confirm Password</label>
      <input
        id="passwordRepeat"
        name="passwordRepeat"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.passwordRepeat}
      />
      {formik.touched.passwordRepeat && formik.errors.passwordRepeat ? (
        <div>{formik.errors.passwordRepeat}</div>
      ) : null}
      <br />
      <label htmlFor="role">Role</label>
      <select
        className="register-input"
        id="role"
        name="role"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.role}
      >
        <option value="">Select Role</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
      {formik.touched.role && formik.errors.role ? (
        <div>{formik.errors.role}</div>
      ) : null}
      <br />

      <label htmlFor="profilePictureUrl">Profile Picture URL</label>
      <input
        className="register-input"
        id="profilePictureUrl"
        name="profilePictureUrl"
        type="url"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.profilePictureUrl}
      />
      {formik.touched.profilePictureUrl && formik.errors.profilePictureUrl ? (
        <div>{formik.errors.profilePictureUrl}</div>
      ) : null}
      <br />
      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        className="register-input"
        id="phoneNumber"
        name="phoneNumber"
        type="string"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.phoneNumber}
      />
      {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
        <div>{formik.errors.phoneNumber}</div>
      ) : null}
      <br />
      <button type="submit" value="Register">
        Submit
      </button>
    </form>
  );
}

export default Register;
