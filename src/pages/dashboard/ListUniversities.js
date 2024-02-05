import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { BreadcrumbBox } from "../../inc/Breacrumb";
import ApiService from "../../service/ApiService";
import { Styles } from "./styles/dashboardDetails";
import { useHistory, Link } from "react-router-dom";

export default function ListUniversities() {
  let history = useHistory();
  const [university, setUniversities] = useState([]);
  const [count, setCount] = useState(0);

  if (!localStorage.getItem("access-token") && !localStorage.getItem("token")) {
    history.push("/");
  }

  var decodedString = atob(localStorage.getItem("token"));
  var welcomeMsg = "Hello " + decodedString;

  const accessToken = localStorage.getItem("access-token");

  useEffect(() => {
    ApiService.listUniversities(accessToken)
      .then((response) => {
        console.log(response.data);
        setCount(response.data.length);
        setUniversities(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (dataObj) => {
   // console.log("data Obj", dataObj);
   /*  ApiService.deleteStudent(dataObj, accessToken)
      .then((response) => {
        console.log(response.data);
      })
      .then(() => {
        ApiService.listStudents(accessToken)
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
      }); */
  };

  return (
    <Styles>
      {/* Main Wrapper */}
      <div className="main-wrapper project-details-page">
        {/* Header Area */}
        <Header />

        {/* Breadcroumb */}
        <BreadcrumbBox title="Education Consultancy" welcome={welcomeMsg} />

        {/* Service Details */}
        <section className="project-details-area">
          <div className="container">
            <Link to="/dashboard">Back to Dashboard </Link> |{" "}
            <Link to="/addStudent">Add New Student </Link> <br />
            <br />
            <div className="row">
              <h6>Total #of Universities: {count}</h6> <br />
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
                      <th>Address</th>
                      <th>Application Status</th>
                      <th>Last updated ( EST )</th>
                    </tr>
                  </thead>
                  <tbody>
                    {university.map((dataObj, index) => {
                      return (
                        <tr key={index}>
                          <td>{dataObj.universityName}</td>
                          <td>{dataObj.email + " " + dataObj.phone}</td>
                          <td>{dataObj.universityAddress + " " + dataObj.universityAddress1}</td>
                          <td>{dataObj.status}</td>
                          <td>{dataObj.lastUpdated}</td>
                          <td>
                            <Link to={{
                              pathname: "/",
                              state: dataObj
                            }}>Update</Link>
                          </td>
                          <td>
                            <Link
                              to="#"
                              onClick={() => handleDelete(dataObj, dataObj.id)}
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
          </div>
        </section>
      </div>
    </Styles>
  );
}
