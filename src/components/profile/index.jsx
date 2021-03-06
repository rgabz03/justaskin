import React, { Component, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// let { Tab, Tabs } = ReactBootstrap;


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
                <div className="col-md-12 col-sm-12">
                    <div className="row">

                    </div>
                    <Tabs defaultActiveKey="about" id="uncontrolled-tab-example">
                        <Tab eventKey="about" title="About">
                            <h1>About</h1>
                        </Tab>
                        <Tab eventKey="settings" title="Settings">
                            <h1>Settings</h1>
                        </Tab>
                        <Tab eventKey="saved" title="Saved">
                            <h1>Saved</h1>
                        </Tab>
                    </Tabs>
                </div>
        );
    }
    

}
 