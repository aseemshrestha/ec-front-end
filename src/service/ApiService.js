import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

class ApiService {
  registerUser(data) {
    return axios.post(`${BASE_URL}/api/v1/public/create-user`, data);
  }

  login(data) {
    return axios.post(`${BASE_URL}/api/v1/public/login`, data);
  }

  addStudent(data, token) {
    // console.log(token);
    console.log(data);
    return axios.post(`${BASE_URL}/api/v1/secured/addStudent`, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
  addUniversity(data, token) {
    // console.log(token);
    return axios.post(`${BASE_URL}/api/v1/secured/addUniversity`, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
  listStudents(token) {
    // console.log(token);
    return axios.get(`${BASE_URL}/api/v1/secured/showAll`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
  listUniversities(token) {
    // console.log(token);
    return axios.get(`${BASE_URL}/api/v1/secured/showUniversities`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
  searchStudents(data, token) {
    console.log(data + " " + token);
    return axios.post(`${BASE_URL}/api/v1/secured/searchStudent`, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
  deleteStudent(data, token) {
    // console.log(token);
    return axios.post(`${BASE_URL}/api/v1/secured/deleteStudent`, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
  deleteUniversity(data, token) {
    // console.log(token);
    return axios.post(`${BASE_URL}/api/v1/secured/deleteUniversity`, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
  updateStudent(data, token) {
    return axios.put(`${BASE_URL}/api/v1/secured/updateStudent`, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
  updateUniversity(data, token) {
    return axios.put(`${BASE_URL}/api/v1/secured/updateUniversity`, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
}

export default new ApiService();
