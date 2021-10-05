import axios from "axios";

const API_URL = "https://localhost:44336/api/";

// const register = (username, email, password) => {
//   return axios.post(API_URL + "signup", {
//     username,
//     email,
//     password,
//   });
// };

const login = (username, password) => {
  //console.log(username + "-" + password);
  // var bodyFormData = new FormData();
  // var url = API_URL + "Login";
  // bodyFormData.append('iin', username);
  // bodyFormData.append('password', password);

  return axios
    .post(API_URL + "Login", {
      iin:username,
      password:password,
    })
    // ({
    //   method: "post",
    //   url: url,
    //   data: bodyFormData,
    //   headers: {"Access-Control-Allow-Origin": "*"},
    // })

    .then((response) => {
      console.log(response);
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  //register,
  login,
  logout,
  getCurrentUser,
};
