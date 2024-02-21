import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import ApiService from "../../../service/ApiService";
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";

registerPlugin(FilePondPluginFileValidateType, FilePondPluginFileValidateSize);

export default function StudentUpdateForm(props) {
  let history = useHistory();
  if (!localStorage.getItem("access-token") && !localStorage.getItem("token")) {
    history.push("/");
  }

  const [message, setMessage] = useState(null);
  const [date, setDate] = useState(new Date(props.data.visaInterviewDate));
  const [files, setFiles] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  const handleChange = (dateChange) => {
    setValue("visaInterviewDate", dateChange, {
      shouldDirty: true,
    });
    setDate(dateChange);
  };
  const onFileUpload = (fileItems) => {
    const fileMetaDta = fileItems.map((fileItem) => fileItem.file);
    setValue("files", fileMetaDta, {
      shouldDirty: true,
    });
    // setFiles(files);
    setFiles(fileMetaDta);
  };

  const onSubmit = (data, e) => {
    e.preventDefault();
    var token = localStorage.getItem("access-token");
    const formData = new FormData();

    if (files.length > 0) {
      for (var i = 0; i < files.length; i++) {
        formData.append("file", files[i]);
      }
    }
    formData.append("id", data.id);
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("i20Status", data.i20Status);
    formData.append("phone", data.phone);
    formData.append("universityApplied", data.universityApplied);
    formData.append("visaStatus", data.visaStatus);
    formData.append("additionalComments", data.additionalComments);
    formData.append("visaInterviewDate", data.visaInterviewDate);

    ApiService.updateStudent(formData, token)
      .then((response) => {
        console.log(response);
        e.target.reset();
        history.push("/listStudents");
      })
      .catch((error) => {
        console.log(error);
        setMessage(error);
      });
  };

  return (
    <form
      className="registration_form"
      onSubmit={handleSubmit(onSubmit)}
      encType="multipart/form-data"
    >
      <Link to="/dashboard">Back to Dashboard </Link> |{" "}
      <Link to="/listStudents">List Students</Link>
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
              <label style={{ color: "#808080" }}>First Name</label>
            </label>
            <input
              {...register("firstName", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
              type="text"
              defaultValue={props.data.firstName}
              className="form-control"
            />
            {errors?.firstName?.type === "required" && (
              <label className="error">This field is required</label>
            )}
            {errors?.firstName?.type === "maxLength" && (
              <label className="error">
                First name cannot exceed 20 characters
              </label>
            )}
            {errors?.firstName?.type === "pattern" && (
              <label className="error">Alphabetical characters only</label>
            )}
          </p>
        </div>
        <div className="col-md-12">
          <p className="form-box">
            <label style={{ color: "#808080" }}>Last Name</label>
            <input
              {...register("lastName", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
              type="text"
              className="form-control"
              defaultValue={props.data.lastName}
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
            <label style={{ color: "#808080" }}>University</label>
            <input
              {...register("universityApplied", {
                required: true,
                maxLength: 120,
                // pattern: /^[A-Za-z]+$/i,
              })}
              type="text"
              defaultValue={props.data.universityApplied}
              className="form-control"
            />
            {errors?.uniName?.type === "required" && (
              <label className="error">This field is required</label>
            )}
            {errors?.uniName?.type === "maxLength" && (
              <label className="error">
                First name cannot exceed 120 characters
              </label>
            )}
            {/* {errors?.uniName?.type === "pattern" && (
              <label className="error">Alphabetical characters only</label>
            )} */}
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
            <label style={{ color: "#808080" }}>i20 Status</label>
            <select
              {...register("i20Status", { required: true })}
              defaultValue={props.data.i20Status}
              className="form-select"
            >
              <option value="">i20 Status</option>
              <option value="notapplied">Not Applied</option>
              <option value="applied">Applied</option>
              <option value="received">Received</option>
              <option value="denied">Denied</option>
            </select>
            {errors?.i20Status?.value == "" && (
              <label className="error">Select an option</label>
            )}
          </p>
        </div>
        <div className="col-md-12">
          <label style={{ color: "#808080" }}>Visa Interview Date</label>

          <p className="form-box">
            <Controller
              name="visaInterviewDate"
              control={control}
              defaultValue={props.data.visaInterviewDate}
              render={() => (
                <DatePicker
                  selected={date}
                  onChange={handleChange}
                  minDate={new Date()}
                />
              )}
            />
          </p>
        </div>
        <div className="col-md-12">
          <p className="form-box">
            <label style={{ color: "#808080" }}>Visa Status</label>
            <select
              {...register("visaStatus", { required: true })}
              defaultValue={props.data.visaStatus}
              className="form-select"
            >
              <option value="">i20 Status</option>
              <option value="notapplied">Not Applied</option>
              <option value="applied">Applied</option>
              <option value="received">Received</option>
              <option value="denied">Denied</option>
            </select>
            {errors?.visaStatus?.value == "" && (
              <label className="error">Select an option</label>
            )}
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
        <div className="col-lg-30">
          <span className="form-box">
            <label style={{ color: "#808080" }}>
              Upload files ( if any, maxSize:5mb, maxfiles:10 )
            </label>
            <Controller
              name="files"
              control={control}
              render={() => (
                <FilePond
                  control={control}
                  files={files}
                  allowMultiple={true}
                  acceptedFileTypes={[
                    "image/*",
                    "application/pdf",
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                  ]}
                  maxFileSize={"5MB"}
                  maxFiles={10}
                  credits={false}
                  onupdatefiles={onFileUpload}
                />
              )}
            />

            {/* <FilePond
              name="files"
              control={control}
              files={files}
              allowMultiple={true}
              maxFiles={10}
              credits={false}
              acceptedFileTypes={[
                "image/*",
                "application/pdf",
                ".docx",
                "text/plain",
              ]}
              maxFileSize={"5MB"}
              //  onupdatefiles={setFiles}
              onupdatefiles={test}
            ></FilePond> */}
          </span>
        </div>
      </div>
      <div className="col-md-12">
        <button className="submit-btn btn btn-primary" type="submit">
          Update Student
        </button>
      </div>
    </form>
  );
}
