import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

class ApiService {
  registerUser(data) {
    return axios.post(`${BASE_URL}/api/v1/public/create-user`, data);
  }

  login(data) {
    return axios.post(`${BASE_URL}/api/v1/public/login`, data);
  }
  fetchBabyInfo(data, headerToken) {
    return axios.get(
      `${BASE_URL}/api/v1/secured/get-baby-by-username/${data}`,
      {
        headers: headerToken,
      }
    );
  }

  submitPost(formData, token, options) {
    return axios.post(`${BASE_URL}/api/v1/secured/submit-post`, formData, {
      headers: {
        Authorization: token,
      },
      options,
    });
  }
  fetchPost(token) {
    return axios.get(`${BASE_URL}/api/v1/secured/fetch-post`, {
      headers: {
        Authorization: token,
      },
    });
  }
}

export default new ApiService();
