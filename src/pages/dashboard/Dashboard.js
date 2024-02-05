import React from "react";
import Header from "../../components/header/Header";
import { BreadcrumbBox } from "../../inc/Breacrumb";
import Footer from "../../components/footer/Footer";
import { Styles } from "./styles/dashboardDetails";
import { useHistory, Link } from "react-router-dom";

export default function Dashboard() {
  let history = useHistory();
  if (!localStorage.getItem("access-token") && !localStorage.getItem("token")) {
    history.push("/");
  }

  var decodedString = atob(localStorage.getItem("token"));
  var welcomeMsg = "Hello " + decodedString;

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
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-12">
                <div className="project-info">
                  <ul className="list-unstyled">
                    <li className="info-item">
                      <i className="info-icon icofont-manage icon1"></i>
                      <p>Student</p>
                      <h5>
                        <a href="/addStudent">Add Student</a>
                      </h5>
                    </li>
                    <li className="info-item">
                      <i className="info-icon icofont-category"></i>
                      <p>List</p>
                      <h5>
                        <Link to="/listStudents">List Students</Link>
                      </h5>
                    </li>
                    <li className="info-item">
                      <i className="info-icon icofont-location"></i>
                      <p>Affiliations</p>
                      <h5>
                        {" "}
                        <Link to="/addUniversity">Add University</Link>
                      </h5>
                    </li>
                    <li className="info-item">
                      <i className="info-icon bi bi-search"></i>
                      <p>Search</p>
                      <h5>
                        <Link to="/searchStudents">Search Students</Link>
                      </h5>
                    </li>
                    <li className="info-item">
                      <i className="info-icon icofont-category"></i>
                      <p>Search</p>
                      <h5>
                        <Link to="/listUniversities">List Universities</Link>
                      </h5>
                    </li>
                    <li className="info-item">
                      <i className="info-icon las la-calendar"></i>
                      <p>Event</p>
                      <h5>Create Event</h5>
                    </li>
                    <li className="info-item">
                      <i className="info-icon icofont-link"></i>
                      <ul className="list-unstyled list-inline social">
                        <li className="list-inline-item">
                          <a href={process.env.PUBLIC_URL + "/"}>
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href={process.env.PUBLIC_URL + "/"}>
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href={process.env.PUBLIC_URL + "/"}>
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href={process.env.PUBLIC_URL + "/"}>
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href={process.env.PUBLIC_URL + "/"}>
                            <i className="fab fa-dribbble"></i>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8 col-md-0">
                <div className="project-image">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/images/project-details.jpg`
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Area */}
        <Footer />
      </div>
    </Styles>
  );
}
