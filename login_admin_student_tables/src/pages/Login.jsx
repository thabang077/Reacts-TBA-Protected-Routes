import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //Use State
  const [values, setvalues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChanges = (e) => {
    setvalues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        values
      );
      if (response.status === 200) {
        setvalues({
          email: "",
          password: "",
        });
        localStorage.setItem("token", response.data.token);
        navigate("/");
        console.log(response);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data.message); // Show server error message
      } else {
        alert("An unexpected error occurred.");
      }
    }
  };
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div
        className="card shadow-lg p-4"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <h3 className="text-center mb-4 text-primary">
          <i className="bi bi-person-fill me-2"></i>Login Account
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <i className="bi bi-envelope-at-fill me-2 text-secondary"></i>
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="idEmail"
              placeholder="Enter email"
              name="email"
              onChange={handleChanges}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label">
              <i className="bi bi-lock-fill me-2 text-secondary"></i>Password
            </label>
            <input
              type="password"
              className="form-control"
              id="idPassword"
              placeholder="Enter password"
              name="password"
              onChange={handleChanges}
            />
          </div>
          <button className="btn btn-primary w-100">
            <i className="bi bi-person-check-fill me-2"></i>Login
          </button>
        </form>
        <div className="text-center mt-3">
          <p className="mb-1">Don't have an account?</p>
          <a href="/registration" className="text-decoration-none text-primary">
            <i className="bi bi-box-arrow-in-right me-1"></i>Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
