import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TimelineProfileList from "../timelineProfileList";
import TimeLineQuestion from "../question/timeline";
import config from '../../Config';
import axios from "axios";

async function loginUser(username, password) {
    
    // return axios
    //   .post( config.API_URL+ "signin", {
    //     username,
    //     password
    //   })
    //   .then(response => {
    //     if (response.data.accessToken) {
    //       localStorage.setItem("user", JSON.stringify(response.data));
    //     }

    //     return response.data;
    //   });
}

export default class HomeIndex extends Component{

    handleSubmit = async (event) => {
        const username = event.target.email.value;
        const password = event.target.password.value;

        const token = await loginUser({
            username,
            password
        });
        // setToken(token);
    }
    
    render() { 

        
        
        return (
            <React.Fragment>
            <div className="col-md-12 col-sm-12">
                <TimelineProfileList/>
                <TimeLineQuestion/>
                <TimeLineQuestion/>
                <TimeLineQuestion/>
                <TimeLineQuestion/>
            </div>
            </React.Fragment>
        );
    }
    

}
 