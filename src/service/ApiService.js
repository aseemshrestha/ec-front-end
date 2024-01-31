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
    console.log(token);
    return axios.post(`${BASE_URL}/api/v1/secured/addStudent`, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
}

export default new ApiService();
