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

export default class CommentSender extends Component {

    constructor(){
        super()
        this.state = {
            animate : true,
        }

    }

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
            <div className="col-md-12 col-sm-12 fixed-bottom">
                <div className="row shadow-lg p-3 bg-white">
                    <div className="container">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Type comment.." aria-label="Type comment.." aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button className="btn btn-primary-custom" type="button"><i className="fa fa-send"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }

}
 