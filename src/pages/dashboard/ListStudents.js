import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { BreadcrumbBox } from "../../inc/Breacrumb";
import ApiService from "../../service/ApiService";
import { Styles } from "./styles/dashboardDetails";
import { useHistory, Link } from "react-router-dom";

export default function ListStudents() {
  let history = useHistory();
  const [students, setStudents] = useState([]);
  const [count, setCount] = useState(0);

  if (!localStorage.getItem("access-token") && !localStorage.getItem("token")) {
    history.push("/");
  }

  var decodedString = atob(localStorage.getItem("token"));
  var welcomeMsg = "Hello " + decodedString;

  useEffect(() => {
    ApiService.listStudents(localStorage.getItem("access-token"))
      .then((response) => {
        console.log(response.data);
        setCount(response.data.length);
        setStudents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (dataObj) => {
    console.log("data Obj", dataObj);
    ApiService.deleteStudent(dataObj, localStorage.getItem("access-token"))
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
            <Link to="/addStudent">Add New Student </Link> |{" "}
            <Link to="/searchStudents">Search Student </Link> |{" "}
            <Link to="/addUniversity">Add New University</Link> |{" "}
            <Link to="/listUniversities">List University</Link>
            <br />
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
                    {students.map((dataObj, index) => {
                      return (
                        <tr key={index}>
                          <td>{dataObj.firstName + " " + dataObj.lastName}</td>
                          <td>{dataObj.email + " " + dataObj.phone}</td>
                          <td>{dataObj.universityApplied}</td>
                          <td>{dataObj.i20Status}</td>
                          <td>
                            {dataObj.visaInterviewDate == null
                              ? null
                              : dataObj.visaInterviewDate.substring(0, 10)}
                          </td>
                          <td>{dataObj.visaStatus}</td>
                          <td>{dataObj.createdDate}</td>
                          <td>
                            <Link
                              to={{
                                pathname: "/updateStudents",
                                state: dataObj,
                              }}
                            >
                              Update
                            </Link>
                            cd ~

                          </td>
                          <td>
                            <Link
                              to="#"
                              onClick={() => handleDelete(dataObj, dataObj.id)}
                            >
                              Delete
                            </Link>
                          </td>
                        
                          <td>{dataObj.docs.map(d => (<li key ={index}><Link to ={{pathname: d}} target='_blank'>{d.substring(d.indexOf(".com/") + 5)}</Link></li>))}</td>
                       
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
