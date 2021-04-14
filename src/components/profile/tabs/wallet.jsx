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
                            <br/>
                            <center>
                                <h1><b>82</b></h1>
                                <span className="sm-font-size text-muted">BALANCE</span>
                            </center>
                            <br/>
                            <div className="input-group mb-1">
                                <input type="number" className="form-control" placeholder="Input Coins" aria-label="Input Coins" aria-describedby="basic-addon2" required/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary-custom" type="button">REQUEST</button>
                                </div>
                            </div>
                        </div>
                        
                        {/* <div className="col-md-12">
                            <div className="input-group mb-3">
                                <Link to="https://www.google.com" className="btn btn-primary-custom">Become a verified Expert</Link>
                            </div>
                        </div> */}
                        
                    </div>
                </div>
        );
    }
    

}
 