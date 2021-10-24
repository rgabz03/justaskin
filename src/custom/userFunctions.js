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
      
    })
};

const logout = function() {
    localStorage.removeItem("user");
};


const getCurrentUser = function() {

    if(localStorage.length > 0){
        return JSON.parse(localStorage.getItem('user'));
    }
    
    return false;

};

const getCoinBalance = async() =>{
    var user_session    = getCurrentUser();

    if(user_session != null) {
        var user_id         = user_session.user_data.id;
        var access_token    = user_session.access.access_token;

        let res = await axios.get("/users/coins/balance/"+user_id, {
                headers : {
                    'Authorization': `bearer ${access_token}`,
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json',
                }
            })
            .then(response => {
                // console.log(response.data.data);
                return response.data.data;
            })
            .catch(error => {

                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    // console.log(error.response.data);
                    logout();
                    console.log(error.response.status);
                    // console.log(error.response.headers);
                    return error.response.status;
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                    return error.request;
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                    return error.message;
                }

            });


            return res;
    }

}



const getUserProfile = async() =>{
    
    var user_session    = getCurrentUser();

    if(user_session == 'false'){
        logout();
    }
    
    if(user_session != null) {
        var user_id         = user_session.user_data.id;
        var access_token    = user_session.access.access_token;

        let res = await axios.get("/users/profile/"+user_id, {
                headers : {
                    'Authorization': `bearer ${access_token}`,
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json',
                }
            })
            .then(response => {
                // console.log(response.data.data)
                return response.data.data;
            })
            .catch(error => {

                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    // console.log(error.response.data);
                    logout();
                    console.log(error.response.status);
                    // console.log(error.response.headers);
                    return error.response.status;
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                    return error.request;
                } else {
                    // Something happened in setting up the request that triggered an Error
                    
                    console.log('Error', error.message);
                    return error.message;
                }

            });


            return res;
    }

}



const updateUserRecieveNotification = async(notification_status) =>{
    
    var user_session    = getCurrentUser();
    console.log('update notification');
    console.log(user_session);

    if(user_session != null) {
        var user_id         = user_session.user_data.id;
        var access_token    = user_session.access.access_token;
        var notification    = ( notification_status == 'on' ) ? 1 : 0;

        let res = await axios.put("/users/"+user_id+"/update/receive-notification", { notification },{
                headers : {
                    'Authorization': `bearer ${access_token}`,
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json',
                }
            })
            .then(response => {
                // console.log(response.data.data)
                return response.data.data;
            })
            .catch(error => {

                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    // console.log(error.response.data);
                    logout();
                    console.log(error.response.status);
                    // console.log(error.response.headers);
                    return error.response.status;
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                    return error.request;
                } else {
                    // Something happened in setting up the request that triggered an Error
                    
                    console.log('Error', error.message);
                    return error.message;
                }

            });


            return res;
    }

}


const getUserFollowerCount = async() =>{
    
    var user_session    = getCurrentUser();

    if(user_session != null) {
        var user_id         = user_session.user_data.id;
        var access_token    = user_session.access.access_token;

        let res = await axios.get("/users/followers/"+user_id+"/count", {
                headers : {
                    'Authorization': `bearer ${access_token}`,
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json',
                }
            })
            .then(response => {
                // console.log(response.data.data)
                return response.data.data;
            })
            .catch(error => {

                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    // console.log(error.response.data);
                    logout();
                    console.log(error.response.status);
                    // console.log(error.response.headers);
                    return error.response.status;
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                    return error.request;
                } else {
                    // Something happened in setting up the request that triggered an Error
                    
                    console.log('Error', error.message);
                    return error.message;
                }

            });


            return res;
    }

}



const handleForgotPasswordSubmit = function (email) {
alert("Heres");
    return axios
    .post("/users/forgot-password", {
        email
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
      
    })
}

export { login, logout, getCurrentUser , getCoinBalance, getUserProfile, getUserFollowerCount, handleForgotPasswordSubmit, updateUserRecieveNotification };

  

