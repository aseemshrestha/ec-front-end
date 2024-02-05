import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import ApiService from "../../../service/ApiService";
import { useHistory } from "react-router-dom";
export default function StudentSearchForm() {
  const [message, setMessage] = useState(null);
  const [show, setShow] = useState(false);


  if (!localStorage.getItem("access-token") && !localStorage.getItem("token")) {
    history.push("/");
  }
  let history = useHistory();
  const [students, setStudents] = useState([]);
  const [count, setCount] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
   //  alert(JSON.stringify(data));
    ApiService.searchStudents(data, localStorage.getItem("access-token"))
      .then((response) => {
        console.log(response);
        setCount(response.data.length);
        setStudents(response.data);
      })
      .catch((error) => {
        // console.log(error);
        // setMessage(error.response.data.message);
      });

    setShow(true);
  };
  const handleDelete = (item) => {
    console.log("data Obj", item);
    ApiService.deleteStudent(item, localStorage.getItem("access-token"))
      .then((response) => {
        console.log(response.data);
      })
      .then(() => {
        ApiService.listStudents(localStorage.getItem("access-token"))
          .then((response) => {
            setCount(response.data.length);
            setStudents(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form className="registration_form" onSubmit={handleSubmit(onSubmit)}>
      <Link to="/dashboard">Back to Dashboard</Link> |{" "}
      <Link to="/listStudents">List Students</Link> |{" "}
      <Link to="/addStudents">Add Students</Link>
      <div className="text-left pt-4 text-danger">{message}</div>
      <div className="row">
        <div className="col-md-12">
          <p className="form-box">
            <input
              {...register("keyword", {
                required: true,
                maxLength: 40,
              })}
              type="text"
              placeholder="By First Name Email or Phone"
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
          </p>
        </div>
        
        <div className="col-md-12"><br />
        <button className="submit-btn btn btn-primary" type="submit">
          Search Student
        </button>
      </div>
      </div>
     
      <br />
      <div className="row">
              <h6>Total #of Students: {count}</h6> <br />
              <br />
              <div className="">
                <table
                  id="example"
                  className="table table-striped"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email/Phone</th>
                      <th>University</th>
                      <th>i20Status</th>
                      <th>InterviewDate</th>
                      <th>VisaStatus</th>
                      <th>Account Created ( EST )</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.firstName + " " + item.lastName}</td>
                          <td>{item.email + " " + item.phone}</td>
                          <td>{item.universityApplied}</td>
                          <td>{item.i20Status}</td>
                          <td>{item.visaInterviewDate == null ? null : item.visaInterviewDate.substring(0,10)}</td>
                          <td>{item.visaStatus}</td>
                          <td>{item.createdDate}</td>
                          <td>
                            <Link to={{
                              pathname: "/updateStudents",
                              state: item
                            }}>Update</Link>
                          </td>
                          <td>
                            <Link
                              to="#"
                              onClick={() => handleDelete(item, item.id)}
                            >
                              Delete
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
      {/* <p>{show ? <button>sdasdasda</button> : null}</p> */}
      
    </form>
  );
}
