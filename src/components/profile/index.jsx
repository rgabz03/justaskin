import React, { Component, useState, useLayoutEffect, useCallback } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import AboutTab from "./tabs/about";
import SettingsTab from "./tabs/settings";
import SavedTab from "./tabs/saved";


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



export default class ProfileIndex extends Component {

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
                <div className="">
                                    <div className="row">
                                            <div className="card text-center col-md-6">
                                                <center>
                                                    <div className="col-5">
                                                        <br/>
                                                        <img className="card-img-top img-thumbnail rounded-circle" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg" alt="Card image cap"/>
                                                    </div>
                                                </center>
                                                <div className="card-body">
                                                    <h5 className="card-title">User Name</h5>
                                                    <p className="card-text">Senior Developer</p>
                                                    <a href="#" className="btn btn-primary-custom">Followers 169</a>
                                                </div>
                                            </div>

                                        </div>
                                        <Tabs defaultActiveKey="about" id="uncontrolled-tab-example">
                                            <Tab eventKey="about" title="About">
                                                <AboutTab/>
                                            </Tab>
                                            <Tab eventKey="settings" title="Settings">
                                                <SettingsTab/>
                                            </Tab>
                                            <Tab eventKey="saved" title="Saved">
                                                <SavedTab/>
                                            </Tab>
                                        </Tabs>
                                </div>
        );
    }
    

}
 