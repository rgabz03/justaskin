import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TimelineProfileList from "../timelineProfileList";
import TimeLineQuestion from "../question/timeline";

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

export default class HomeIndex extends Component {

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
            <div className="col-md-6 col-sm-12">
                <TimelineProfileList/>
                <br/>
                <TimeLineQuestion/>
                <TimeLineQuestion/>
                <TimeLineQuestion/>
                <TimeLineQuestion/>
            </div>
            </React.Fragment>
        );
    }

}
 