import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import ApiService from "../../../service/ApiService";
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function UniversityUpdateForm(props) {
  //console.log(props);
  let history = useHistory();
  if (!localStorage.getItem("access-token") && !localStorage.getItem("token")) {
    history.push("/");
  }

  const [message, setMessage] = useState(null);
  const [date, setDate] = useState(new Date(props.data.approvalDate));

  //console.log(new Date(props.data.visaInterviewDate) + "  " + Date.now().toString());

  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  const handleChange = (dateChange) => {
    setValue("approvalDate", dateChange, {
      shouldDirty: true,
    });
    setDate(dateChange);
  };

  const onSubmit = (data, e) => {
    e.preventDefault();
    // alert(JSON.stringify(data));
    var token = localStorage.getItem("access-token");
    ApiService.updateUniversity(data, token)
      .then((response) => {
        console.log(response);
        e.target.reset();
        history.push("/listUniversities");
      })
      .catch((error) => {
        console.log(error);
        setMessage(error.response.data.message);
      });
  };

  return (
    <form className="registration_form" onSubmit={handleSubmit(onSubmit)}>
      <Link to="/dashboard">Back to Dashboard</Link> |{" "}
      <Link to="/listStudents">List Students</Link> |{" "}
      <Link to="/addStudent">Add Student</Link>
      <div className="text-left pt-4 text-danger">
        {message} <br />
      </div>
      <div className="row">
        <div className="col-md-12">
          <p className="form-box">
            <input
              {...register("id", {
                required: true,
              })}
              type="hidden"
              defaultValue={props.data.id}
              className="form-control"
            />
          </p>
        </div>
        <div className="col-md-12">
          <p className="form-box">
            <label>
              <label style={{ color: "#808080" }}>University Name</label>
            </label>
            <input
              {...register("universityName", {
                required: true,
                maxLength: 200,
                pattern: /^[A-Za-z ,]+$/i,
              })}
              type="text"
              defaultValue={props.data.universityName}
              className="form-control"
            />
            {errors?.universityName?.type === "required" && (
              <label className="error">This field is required</label>
            )}
            {errors?.universityName?.type === "maxLength" && (
              <label className="error">
                University name cannot exceed 200 characters
              </label>
            )}
            {errors?.universityName?.type === "pattern" && (
              <label className="error">Alphabetical characters only</label>
            )}
          </p>
        </div>
        <div className="col-md-12">
          <p className="form-box">
            <label style={{ color: "#808080" }}>University Address </label>
            <input
              {...register("universityAddress", {
                required: true,
                maxLength: 100,
                pattern: /^[A-Za-z, ]+$/i,
              })}
              type="text"
              className="form-control"
              defaultValue={props.data.universityAddress}
            />
            {errors?.universityAddress?.type === "required" && (
              <label className="error">This field is required</label>
            )}
            {errors?.universityAddress?.type === "maxLength" && (
              <label className="error">
                University Address cannot exceed 200 chars.
              </label>
            )}
            {errors?.universityAddress?.type === "pattern" && (
              <label className="error">Alphabetical characters only</label>
            )}
          </p>
        </div>

        <div className="col-md-12">
          <p className="form-box">
            <label style={{ color: "#808080" }}>
              University Address contd..{" "}
            </label>
            <input
              {...register("universityAddress1", {
                required: false,
                maxLength: 200,
                pattern: /^[A-Za-z ]+$/i,
              })}
              type="text"
              className="form-control"
              defaultValue={props.data.universityAddress1}
            />
            {errors?.universityAddress?.type === "required" && (
              <label className="error">This field is required</label>
            )}
            {errors?.universityAddress?.type === "maxLength" && (
              <label className="error">
                University Address cannot exceed 200 chars.
              </label>
            )}
            {errors?.universityAddress?.type === "pattern" && (
              <label className="error">Alphabetical characters only</label>
            )}
          </p>
        </div>

        <div className="col-md-12">
          <p className="form-box">
            <label style={{ color: "#808080" }}>Email</label>
            <input
              {...register("email", {
                required: true,
                pattern: /^[^ ]+@[^ ]+\.[a-z]{2,6}$/i,
              })}
              type="email"
              defaultValue={props.data.email}
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
            <label style={{ color: "#808080" }}>Contact Person</label>
            <input
              {...register("contactPerson", {
                required: true,
                maxLength: 120,
                pattern: /^[A-Za-z ]+$/i,
              })}
              type="text"
              defaultValue={props.data.contactPerson}
              className="form-control"
            />
            {errors?.contactPerson?.type === "required" && (
              <label className="error">This field is required</label>
            )}
            {errors?.contactPerson?.type === "maxLength" && (
              <label className="error">Name cannot exceed 120 characters</label>
            )}
            {errors?.uniName?.type === "pattern" && (
              <label className="error">Alphabetical characters only</label>
            )}
          </p>
        </div>

        <div className="col-md-12">
          <p className="form-box">
            <label style={{ color: "#808080" }}>Phone</label>
            <input
              {...register("phone", {
                required: true,
                pattern: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/i,
              })}
              type="text"
              defaultValue={props.data.phone}
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
            <label style={{ color: "#808080" }}>Application Status</label>
            <select
              {...register("status", { required: true })}
              defaultValue={props.data.status}
              className="form-select"
            >
              <option value="">Application Status</option>
              <option value="notapplied">Not Applied</option>
              <option value="applied">Applied</option>
              <option value="approved">Approved</option>
              <option value="denied">Denied</option>
            </select>
            {errors?.i20Status?.value == "" && (
              <label className="error">Select an option</label>
            )}
          </p>
        </div>

        <div className="col-md-12">
          <p className="form-box">
            <label style={{ color: "#808080" }}>Approval Date</label>

            <br />
            <Controller
              name="approvalDate"
              control={control}
              defaultValue={props.data.approvalDate}
              render={() => (
                <DatePicker selected={date} onChange={handleChange} maxDate={new Date()} />
              )}
            />
          </p>
        </div>

        <div className="col-lg-30">
          <p className="form-box">
            <label style={{ color: "#808080" }}>Additional Comments</label>
            <textarea
              {...register("additionalComments", {
                required: false,
                minLength: 10,
                maxLength: 300,
              })}
              // placeholder="Additional Comments ( min 10 chars, max 300 chars )"
              defaultValue={props.data.additionalComments}
              className="form-control"
            />

            {errors?.message?.type === "minLength" && (
              <label className="error">
                Message should be atleast 10 characters long
              </label>
            )}
            {errors?.message?.type === "maxLength" && (
              <label className="error">
                Message cannot exceed 300 characters
              </label>
            )}
          </p>
        </div>
      </div>
      <div className="col-md-12">
        <button className="submit-btn btn btn-primary" type="submit">
          Update University
        </button>
      </div>
    </form>
  );
}
