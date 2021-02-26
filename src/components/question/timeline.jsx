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

export default class LoginIndex extends Component {

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
            <div className="container-fluid">  
                <div className="row">
                    <div className="timeline-top-blank-space"></div>
                </div>
                <div className="row text-center">
                    <div className="card">
                        <div className="d-flex justify-content-between bd-highlight border-bottom">
                            
                            {/* <div className="d-flex justify-content-end mb-3">
                                <div className="p-2 bd-highlight link-primary"><label className="sm-font-size">Following</label></div>
                            </div>
                            <div className="d-flex justify-content-start mb-3">
                                <div className="p-2 bd-highlight">
                                    <img className="img-thumbnail rounded-circle timeline-question-profile-photo" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                                        data-holder-rendered="true"/>
                                </div>
                                <div className="p-2 bd-highlight">Your Name</div>
                                <div className="p-2 bd-highlight">TEst</div>
                            </div> */}
                            <div className="d-flex justify-content-start mb-3">
                                <div className="p-2 bd-highlight">
                                    <img className="img-thumbnail rounded-circle timeline-question-profile-photo" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                                        data-holder-rendered="true"/>
                                </div>
                                <div className="p-2 bd-highlight"></div>
                                <div className="p-2 bd-highlight"></div>
                            </div>
                            
                            <div className="d-flex justify-content-end mb-3">
                                <div className="p-2 bd-highlight link-primary">Following</div>
                            </div>
                            
                        </div>
                        <br/>
                        <h5>Question:</h5>
                        <p className="sm-font-size">What would the government look like on Mars?</p>
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                        </div>
                        <div className="card-body">

                            <div className="d-flex justify-content-between bd-highlight">
                                <div className="d-flex justify-content-start mb-3">
                                    <div className="p-2 bd-highlight"><i className="fa fa-heart"></i></div>
                                    <div className="p-2 bd-highlight"><i className="fa fa-comment"></i></div>
                                    <div className="p-2 bd-highlight"><i className="fa fa-send"></i></div>
                                </div>
                                
                                <div className="d-flex justify-content-end mb-3">
                                    <div className="p-2 bd-highlight"><i className="fa fa-share-square"></i></div>
                                </div>
                            </div>
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
 