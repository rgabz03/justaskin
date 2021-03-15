import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MessageList from "./messageUserList";
import MessageSender from "./messageSender";

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

export default class View extends Component {

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
            <div className="col-md-12 col-sm-12">
                <div className="fixed-top">
                    <div className="row shadow-lg p-3 bg-white">
                        <div className="col-2">
                            <Link to="/message" className="link-primary"><i className="fa fa-chevron-left fa-3x"></i></Link>
                        </div>
                        <div className="col-10">
                                <div className="d-flex bd-highlight">
                                    <div className="float-left">
                                        <img className="img-thumbnail rounded-circle timeline-question-profile-photo float-left" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                                    data-holder-rendered="true"/>
                                    </div>
                                    <div className="col-8 float-right">
                                        <span className="text-muted">Active 5 minutes ago</span>
                                        <div>User name</div>
                                    </div>
                                </div>  
                        </div>
                    </div>
                </div>
                <MessageList/>
                <MessageSender/>
            </div>
            
        );
    }

}
 