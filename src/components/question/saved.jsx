import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TimelinePostTopIndicator from "../timeline/topPostIndicator";
import CommentStatus from "../timeline/commentStatus";
import LikeStatus from "../timeline/likesStatus";

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

export default class Saved extends Component {

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
            <div className="shadow p-3 mb-5 bg-white">
                <div className="row text-center">
                    <div className="col-12"><h5>Question: </h5></div>
                    <div className="col-12"><p className="sm-font-size">What would the government look like on Mars?</p></div>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
                    </div>
                </div>
                <div className="row">
                    <div className="container">
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
                    </div>
                    <LikeStatus/>
                </div>
                <CommentStatus/>
            </div>
        );
    }

}
 