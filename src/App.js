import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./inc/globalStyle";
import ScrollToTop from "./inc/ScrollToTop";

import HomeOne from "./HomeOne";
import About from "./pages/about/About";
import Services from "./pages/service/Services";
import ServiceDetails from "./pages/service/ServiceDetails";
import Project from "./pages/dashboard/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import TeamMember from "./pages/team/Team";
import Testimonials from "./pages/testimony/Testimonials";
import PriceTable from "./pages/price-table/Price";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import StudentRegistration from "./pages/dashboard/student-registration/StudentRegistration";
import ListStudents from "./pages/dashboard/ListStudents";
import Faq from "./pages/faq/Faq";
import Blog from "./pages/blog/Blog";
import BlogDetails from "./pages/blog/BlogDetails";
import Contact from "./pages/contact/Contact";

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 100);
  }
  return (
    !loading && (
      <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/"}`}
            component={HomeOne}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/about"}`}
            component={About}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/service"}`}
            component={Services}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/service-details"}`}
            component={ServiceDetails}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/project"}`}
            component={Project}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/dashboard"}`}
            component={Dashboard}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/team"}`}
            component={TeamMember}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/testimonial"}`}
            component={Testimonials}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/price"}`}
            component={PriceTable}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/logmein"}`}
            component={Login}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/register-me"}`}
            component={Registration}
          />
          <Route path={`${process.env.PUBLIC_URL + "/faq"}`} component={Faq} />
          <Route
            path={`${process.env.PUBLIC_URL + "/blog"}`}
            component={Blog}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/blog-details"}`}
            component={BlogDetails}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/contact"}`}
            component={Contact}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/addStudent"}`}
            component={StudentRegistration}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/listStudents"}`}
            component={ListStudents}
          />
        </Switch>
      </Router>
    )
  );
}

export default App;
