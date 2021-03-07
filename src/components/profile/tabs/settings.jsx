import React, { Component, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
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

export default class ProfileSettingsTab extends Component {
    
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
                    <div className="row">
                        
                        <div className="col-md-12">
                            <label>Name</label>
                            <div className="input-group mb-1">
                                <input type="text" className="form-control" placeholder="Fullname" aria-label="Fullname" aria-describedby="basic-addon2"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary-custom" type="button">Edit</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <label>Email address</label>
                            <div className="input-group mb-1">
                                <input type="text" className="form-control" placeholder="Email Address" aria-label="Email Address" aria-describedby="basic-addon2"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary-custom" type="button">Edit</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <label>Location</label>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Location" aria-label="Location" aria-describedby="basic-addon2"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary-custom" type="button">Edit</button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <label>Receive Notifications</label>
                            <div className="input-group mb-3">
                                
                                <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                                </label>
                                
            
                            </div>
                        </div>
                        
                    </div>
                </div>
        );
    }
    

}
 