import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ApiService from "../../service/ApiService";
import { useHistory } from "react-router-dom";
export default function LoginForm() {
  const [message, setMessage] = useState(null);
  let history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    ApiService.login(data)
      .then((response) => {
        if (
          response.data.accessToken != null &&
          response.data.refreshToken != null
        ) {
          localStorage.setItem("access-token", response.data.accessToken);
          localStorage.setItem("refresh-token", response.data.refreshToken);
          localStorage.setItem("token", response.data.firstName);
          history.push("/dashboard");
        }
      })
      .catch((error) => {
        console.log(error);
        if (error !== undefined && error.response.status === 403) {
          setMessage("Username or Password is invalid.");
        }
      });
  };

  return (
    <form className="login_form" onSubmit={handleSubmit(onSubmit)}>
      <div className="text-left pt-4 text-danger">
        {message} <br />
      </div>
      <div className="row">
        <div className="col-md-20">
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
        <div className="col-md-20">
          <p className="form-box">
            <input
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 20,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,20}$/i,
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
                Password cannot exceed 20 characters
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
        <div className="col-md-20">
          <button className="submit-btn btn btn-primary" type="submit">
            LOGIN
          </button>
        </div>
      </div>
    </form>
  );
}
