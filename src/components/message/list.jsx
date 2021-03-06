import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default class List extends Component {

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
            <div className="list-group message-list">
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start custom-active">
                    <div className="row">
                        <div className="col-4">
                            <img className="img-thumbnail rounded-circle timeline-profile-list" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                                data-holder-rendered="true"/>
                        </div>
                        <div className="col-8">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">User Name</h5>
                                <small>3 days ago</small>
                            </div>
                            <p className="mb-1">This is the content of the user message...</p>
                            <span className="badge badge-danger badge-pill position-relative float-right">14</span>
                        </div>
                    </div>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="row">
                        <div className="col-4">
                            <img className="img-thumbnail rounded-circle timeline-profile-list" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                                data-holder-rendered="true"/>
                        </div>
                        <div className="col-8">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">User Name</h5>
                                <small>3 days ago</small>
                            </div>
                            <p className="mb-1">This is the content of the user message...</p>
                        </div>
                    </div>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="row">
                        <div className="col-4">
                            <img className="img-thumbnail rounded-circle timeline-profile-list" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                                data-holder-rendered="true"/>
                        </div>
                        <div className="col-8">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">User Name</h5>
                                <small>3 days ago</small>
                            </div>
                            <p className="mb-1">This is the content of the user message...</p>
                        </div>
                    </div>
                </a>
            </div>
            
        );
    }

}
 