import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";

function Login() {
  const [showPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      axios
        .post(`${process.env.REACT_APP_BASEURL}/api/v1/login`, values, {
          headers: {
            apiKey: `${process.env.REACT_APP_APIKEY}`,
          },
          data: {
            email: values.email,
            password: values.password,
          },
        })
        .then((res) => {
          const token = res.data.token;
          console.log(token);
          localStorage.setItem("token", token);

          window.location.href = "/";
        })
        .catch((err) => {
          const showError = err.response.data.status_message;
          alert(showError);
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="text"
        autoComplete="current-email"
        placeholder="Type your email"
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
        autoComplete="current-password"
        placeholder="Type your password"
        type={showPassword ? "text" : "password"}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}
      <br />
      <button type="submit" value="Login">
        Log In
      </button>
    </form>
  );
}

export default Login;
