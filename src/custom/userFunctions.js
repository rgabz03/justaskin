import React from 'react';
import axios from "axios";
import Config from '../Config';

let axiosConfig = {
  headers: {
      'Accept' : 'application/json',
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*'
  },
};


const login = function(username, password) {
  
    return axios
    .post("/auth/users", {
        username,
        password
    }, axiosConfig)
    .then(response => {
        if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    })
    .catch(error => {
        // console.log('test')
        // console.log(error.response.data.error)
        // return 'test';
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // console.log(error.response.data);
          //  console.log(error.response.status);
          // console.log(error.response.headers);
      } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
      } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
      }
      
      return JSON.stringify(error.response.status);
    })
};

const logout = function() {
    localStorage.removeItem("user");
};


const getCurrentUser = function() {
    return JSON.parse(localStorage.getItem('user'));
};

export { login, logout, getCurrentUser };

  

