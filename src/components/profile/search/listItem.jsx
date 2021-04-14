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

export default class ListItem extends Component {

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
            <Link to="/profile/view/123" className="text-secondary">
                <div className="justify-content-center">
                    <div className="card p-3">
                        <div className="d-flex align-items-center">
                            <div className="image"> <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" className="rounded" width="155"/> </div>
                            <div className="ml-3 w-100">
                                <h5 className="mb-0 mt-0">Rodolfo</h5> <span>Web Developer</span>
                                <div className="p-2 mt-2 bg-primary-custom d-flex justify-content-between rounded text-white stats">
                                    <div className="d-flex flex-column"> <span className="articles">Post</span> <span className="number1">38</span> </div>
                                    <div className="d-flex flex-column"> <span className="followers">Followers</span> <span className="number2">980</span> </div>
                                </div>
                                <div className="button mt-2 d-flex flex-row align-items-center"> <button className="btn btn-sm btn-outline-primary-custom w-100">Ask</button> <button className="btn btn-sm btn-primary-custom w-100 ml-2">Follow</button> </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                </div>
            </Link>
        );
    }

}
 