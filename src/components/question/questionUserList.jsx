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
                <div className="timeline-top-blank-space"></div>

                <div className="card shadow p-3 mb-5 bg-white rounded">
                    <img className="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_178daa17be3%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_178daa17be3%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1875%22%20y%3D%2296.24375%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Question</h5>
                        <p className="card-text">The content of the question</p>
                    </div>
                </div>

                <div className="card bg-primary-custom shadow mb-5 text-white rounded">
                    <div className="card-body">
                        <div className="card-title sm-font-size float-right"><i className="fa fa-clock-o"></i> 5 minutes ago</div>
                        <br/>
                        <p className="card-text">Your message here</p>
                    </div>
                </div>

                <div className="card bg-white shadow mb-5 rounded">
                    <div className="card-body">
                        <div className="card-title sm-font-size float-left"><i className="fa fa-clock-o"></i> 5 minutes ago</div>
                        <br/>
                        <p className="card-text">Response of the expert</p>
                    </div>
                </div>

                

            </div>
            
        );
    }

}
 