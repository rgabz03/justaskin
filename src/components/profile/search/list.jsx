import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProfileSearchList  from "./listItem";

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

export default class List extends Component {

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
                <div className="col-md-12 col-sm-12 search-input-container">
                    <div id="search-container">
                        <div className="form-group has-search">
                            <span className="fa fa-search form-control-feedback"></span>
                            <input type="text" className="form-control" placeholder="Search"/>
                        </div>
                    </div>


                    <ProfileSearchList/>
                    <ProfileSearchList/>                        

                        
                    <div className="contianer">
                        
                        <div className="row border-bottom shadow-sm p-2 bg-white">
                            <div className="col-4">
                                <img className="timeline-profile-list" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                                    data-holder-rendered="true"/>
                            </div>
                            <div className="col-8">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">User Name</h5>
                                    <small>Followers 13</small>
                                </div>
                                <p className="mb-1"><span className="badge badge-secondary">Website Developer</span></p>

                                <div className="d-flex justify-content-between bd-highlight float-right">
                                    <div className="d-flex justify-content-start mb-2">
                                        <div className="p-1 bd-highlight"><i className="fa fa-comment-o"></i></div>
                                        <div className="p-1 bd-highlight"><i className="fa fa-heart-o"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        
                        <div className="row border-bottom shadow-sm p-2 bg-white">
                            <div className="col-4">
                                <img className="timeline-profile-list" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                                    data-holder-rendered="true"/>
                            </div>
                            <div className="col-8">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">User Name</h5>
                                    <small>Followers 13</small>
                                </div>
                                <p className="mb-1"><span className="badge badge-secondary">Website Developer</span></p>

                                <div className="d-flex justify-content-between bd-highlight float-right">
                                    <div className="d-flex justify-content-start mb-2">
                                        <div className="p-1 bd-highlight"><i className="fa fa-comment-o"></i></div>
                                        <div className="p-1 bd-highlight"><i className="fa fa-heart-o"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        
                    </div>
                </div>
        );
    }

}
 