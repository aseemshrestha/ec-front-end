import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import ApiService from "../../../service/ApiService";
import { useHistory } from "react-router-dom";
export default function UniversityRegistrationForm() {
  const [message, setMessage] = useState(null);

  let history = useHistory();
  if (!localStorage.getItem("access-token") && !localStorage.getItem("token")) {
    history.push("/");
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
   // alert(JSON.stringify(data));
    var token = localStorage.getItem("access-token");
    ApiService.addUniversity(data, token)
      .then((response) => {
        console.log(response);
        e.target.reset();
        history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        setMessage(error.response.data.message);
      });
  };

  return (
    <form className="registration_form" onSubmit={handleSubmit(onSubmit)}>
      <Link to="/dashboard">Back to Dashboard</Link>
      <div className="text-left pt-4 text-danger">
        {message} <br />
      </div>
      <div className="row">
        <div className="col-md-12">
          <p className="form-box">
            <input
              {...register("universityName", {
                required: true,
                maxLength: 100,
                pattern: /^[A-Za-z ]*$/i,
              })}
              type="text"
              placeholder="University Name"
              className="form-control"
            />
            {errors?.universityName?.type === "required" && (
              <label className="error">This field is required</label>
            )}
            {errors?.universityName?.type === "maxLength" && (
              <label className="error">
                University Name cannot exceed 100 characters
              </label>
            )}
            {errors?.universityName?.type === "pattern" && (
              <label className="error">Alphabetical characters only</label>
            )}
          </p>
        </div>
        <div className="col-md-12">
          <p className="form-box">
            <input
              {...register("universityAddress", {
                required: true,
                maxLength: 100,
              })}
              type="text"
              placeholder="University Address"
              className="form-control"
            />
            {errors?.universityAddress?.type === "required" && (
              <label className="error">This field is required</label>
            )}
            {errors?.universityAddress?.type === "maxLength" && (
              <label className="error">
                University Address cannot exceed 100 characters
              </label>
            )}
          </p>
        </div>
        <div className="col-md-12">
          <p className="form-box">
            <input
              {...register("universityAddress1", {
                required: false,
                maxLength: 100,
              })}
              type="text"
              placeholder="University Address contd"
              className="form-control"
            />
            {errors?.text?.type === "required" && (
              <label className="error">This field is required</label>
            )}
            {errors?.lastName?.type === "maxLength" && (
              <label className="error">
                University Address cannot exceed 100 characters
              </label>
            )}
          </p>
        </div>
        <div className="col-md-12">
          <p className="form-box">
            <input
              {...register("contactPerson", {
                required: true,
                maxLength: 120,
                pattern: /^[A-Za-z ]+$/i,
              })}
              type="text"
              placeholder="Contact person"
              className="form-control"
            />
            {errors?.contactPerson?.type === "required" && (
              <label className="error">This field is required</label>
            )}
            {errors?.contactPerson?.type === "maxLength" && (
              <label className="error">
                Conatct name cannot exceed 120 characters
              </label>
            )}
            {errors?.contactPerson?.type === "pattern" && (
              <label className="error">Alphabetical characters only</label>
            )}
          </p>
        </div>
        <div className="col-md-12">
          <p className="form-box">
            <input
              {...register("phone", {
                required: true,
                pattern: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/i,
              })}
              type="text"
              placeholder="Phone number ( format : 111-111-1111) "
              className="form-control"
            />
            {errors?.phone?.type === "required" && (
              <label className="error">This field is required</label>
            )}
            {errors?.phone?.type === "pattern" && (
              <label className="error">Incorrect phone number</label>
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
            <select
              {...register("service", { required: true })}
              defaultValue=""
              className="form-select"
            >
              <option value="">Application Status</option>
              <option value="notapplied">Not Applied</option>
              <option value="applied">Applied</option>
              <option value="approved">Approved</option>
              <option value="denied">Denied</option>
            </select>
            {errors?.service?.value == "" && (
              <label className="error">Select an option</label>
            )}
          </p>
        </div>
        <div className="col-lg-30">
          <p className="form-box">
            <textarea
              {...register("additionalComments", {
                required: false,
                minLength: 10,
                maxLength: 300,
              })}
              placeholder="Additional Comments ( min 10 chars, max 300 chars )"
              className="form-control"
            />

            {errors?.additionalComments?.type === "minLength" && (
              <label className="error">
                Message should be atleast 10 characters long
              </label>
            )}
            {errors?.additionalComments?.type === "maxLength" && (
              <label className="error">
                AdditionalComments cannot exceed 300 characters
              </label>
            )}
          </p>
        </div>
      </div>
      <div className="col-md-12">
        <button className="submit-btn btn btn-primary" type="submit">
          Add New University
        </button>
      </div>
    </form>
  );
}
