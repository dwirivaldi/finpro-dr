import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import { Container } from "react-bootstrap";
import "../Styles/Login.css";

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

          const role = res.data.user.role;
          localStorage.setItem("role", role);

          const name = res.data.user.name;
          localStorage.setItem("name", name);
          window.location.href = "/home";
        })
        .catch((err) => {
          const showError = err.response.data.status_message;
          alert(showError);
        });
    },
  });

  return (
    <>
      <Container className="login">
        <div className="login-box">
          <h1>Login</h1>
          <br />
          <Container className="input-login">
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="email">Email Address</label>
              <br />
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
              <br />
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
              <br />
              <button className="btn-login" type="submit" value="Login">
                LOGIN
              </button>
            </form>
          </Container>
          <div>
            <p>
              Not a member?{" "}
              <span>
                <a href="/register">Sign up now</a>
              </span>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Login;
