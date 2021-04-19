import React from 'react';
import axios from "axios";
import Config from '../Config';


const login = function(username, password) {
    return axios
      .post(Config.API_URL + "auth/applicants", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
};

const logout = function() {
    localStorage.removeItem("user");
};


const getCurrentUser = function() {
    return JSON.parse(localStorage.getItem('user'));
};

export { login, logout, getCurrentUser };

  

