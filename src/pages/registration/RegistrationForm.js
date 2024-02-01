import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import ApiService from "../../service/ApiService";

export default function RegistrationForm() {
  const [message, setMessage] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    ApiService.registerUser(data)
      .then((response) => {
        setMessage(response.data);
        e.target.reset();
      })
      .catch((error) => {
        setMessage(error.response.data.message);
      });
  };

  return (
    <form className="registration_form" onSubmit={handleSubmit(onSubmit)}>
      <div className="text-left pt-4 text-danger">{message} <br /></div>
      <div className="row">
        <div className="col-md-12">
          <p className="form-box">
            <input
              {...register("firstName", {
                required: true,
                maxLength: 12,
                pattern: /^[A-Za-z]+$/i,
              })}
              type="text"
              placeholder="First Name"
              className="form-control"
            />
            {errors?.firstName?.type === "required" && (
              <label className="error">This field is required</label>
            )}
            {errors?.firstName?.type === "maxLength" && (
              <label className="error">
                First name cannot exceed 12 characters
              </label>
            )}
            {errors?.firstName?.type === "pattern" && (
              <label className="error">Alphabetical characters only</label>
            )}
          </p>
        </div>
        <div className="col-md-12">
          <p className="form-box">
            <input
              {...register("lastName", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
              type="text"
              placeholder="Last Name"
              className="form-control"
            />
            {errors?.lastName?.type === "required" && (
              <label className="error">This field is required</label>
            )}
            {errors?.lastName?.type === "maxLength" && (
              <label className="error">
                First name cannot exceed 20 characters
              </label>
            )}
            {errors?.lastName?.type === "pattern" && (
              <label className="error">Alphabetical characters only</label>
            )}
          </p>
        </div>
        <div className="col-md-12">
          <p className="form-box">
            <input
              {...register("email", {
                required: true,
                pattern: /^[^ ]+@[^ ]+\.[a-z]{2,6}$/i,
              })}
              type="email"
              placeholder="Email Address"
              className="form-control"
            />
            {errors?.email?.type === "required" && (
              <label className="error">This field is required</label>
            )}
            {errors?.email?.type === "pattern" && (
              <label className="error">Incorrect email address</label>
            )}
          </p>
        </div>
        <div className="col-md-12">
          <p className="form-box">
            <input
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 12,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/i,
              })}
              type="password"
              placeholder="Password"
              className="form-control"
            />
            {errors?.password?.type === "required" && (
              <label className="error">This field is required</label>
            )}
            {errors?.password?.type === "minLength" && (
              <label className="error">
                Password should be 8 characters long
              </label>
            )}
            {errors?.password?.type === "maxLength" && (
              <label className="error">
                Password cannot exceed 12 characters
              </label>
            )}
            {errors?.password?.type === "pattern" && (
              <label className="error">
                Password must contain atleast 1 speacial character and digit and
                alphabet
              </label>
            )}
          </p>
        </div>
        <div className="col-md-12">
          <button className="submit-btn btn btn-primary" type="submit">
            Register
          </button>
        </div>
        <div className="col-md-12">
          <div className="signin-btn text-center">
            <p>
              Already in Afily?{" "}
              <Link to={process.env.PUBLIC_URL + "/login"}>Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
