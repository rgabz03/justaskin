import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import QuestionList from "./sessionList";

// async function loginUser(credentials) {
//     return fetch('http://localhost:8080/login', {
//         method: 'POST',
//         headers: {
//         'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(credentials)
//     })
//         .then(data => data.json())
// }

export default class SessionIndex extends Component {

    // handleSubmit = async (event) => {
    //     const username = event.target.email.value;
    //     const password = event.target.password.value;

    //     const token = await loginUser({
    //         username,
    //         password
    //     });
    //     // setToken(token);
    // }
    
    render() { 
        
        return (
            <div className="col-md-12 col-sm-12 search-input-container">
                 <div className="form-group has-search">
                    <span className="fa fa-search form-control-feedback"></span>
                    <input type="text" className="form-control" placeholder="Search"/>
                </div>
                <div className="row">
                    <div className="container">
                        <QuestionList/>
                    </div>
                </div>
            </div>
            
        );
    }

}
 