import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Signup.scss";
const Signup = () => {
  const intialValues = { email: "", password: "", username:""};

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    console.log(formValues);
  };
const navigate= useNavigate();
  //input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  //form validation handler
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = " e-mail Cannot be blank";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.username) {
      errors.username = " username Cannot be blank";
    } 

    if (!values.password) {
      errors.password = "Cannot be blank";
    } else if (values.password.length < 6) {
      errors.password = "Password must be more than 6 characters";
    }

    return errors;
  };


  return (
    <div className="container">
      <h1>Sign Up </h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formValues.email}
            onChange={handleChange}
            className={formErrors.email && "input-error"}
          />
          {formErrors.email && (
            <span className="error">{formErrors.email}</span>
          )}
        </div>
        <div className="form-row">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={formValues.username}
            onChange={handleChange}
            className={formErrors.username && "input-error"}
          />
          {formErrors.username && (
            <span className="error">{formErrors.username}</span>
          )}
        </div>

        <div className="form-row">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formValues.password}
            onChange={handleChange}
            className={formErrors.password && "input-error"}
          />
          {formErrors.password && (
            <span className="error">{formErrors.password}</span>
          )}
        </div>
        <div className="terms">
          <p> you agree to our <a href="#">Terms of Service</a>
          and <a href="#">Privacy Policy</a></p>
        </div>

        <button type="submit">Sign up</button>
        <hr className="divide"></hr>
        <button type="submit" onClick={()=>navigate('/')}>Sign up with existing account</button>
      </form>
    </div>
  );
};

export default Signup;
