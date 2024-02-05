import React from "react";
import Header from "./../../../components/header/Header";
import StudentSearchForm from "./StudentSearchForm";
import Footer from "../../../components/footer/Footer";
import { Styles } from "./styles/registration";

const StudentSearch = () => {
  return (
    <Styles>
      {/* Main Wrapper */}
      <div className="main-wrapper registration-page">
        {/* Header Area */}
        <Header />

        {/* Registration Area */}
        <section className="registration-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5 col-lg-8">
                <div className="sec-title text-center">
                  <h4>
                    <span>Search Student</span>
                  </h4>
                </div>
                <br />
                <StudentSearchForm />
              </div>
            </div>
          </div>
        </section>

        {/* Footer Area */}
        <Footer />
      </div>
    </Styles>
  );
};

export default StudentSearch;
