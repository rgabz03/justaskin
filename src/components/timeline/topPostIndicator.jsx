import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class topPostIndicator extends Component {
    render() { 
        return ( 
            <div className="container">
                <div className="d-flex justify-content-between bd-highlight">
                    <div class="container">
                        <div class="row padding-top-4">
                            <div class="col-2 padding-bottom-top-2">
                                <img className="img-thumbnail rounded-circle timeline-question-profile-photo" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                                data-holder-rendered="true"/> 
                            </div>
                            <div class="col-4 padding-bottom-top-2">
                                <div className="row padding-top-4">
                                    <span className="sm-font-size">User Name</span>
                                </div> 
                                <div className="row">
                                    <span className="timeline-positing-time text-muted">16 min ago</span>
                                </div>         
                            </div>
                            <div class="col-6">
                                <div className="d-flex justify-content-end mb-3">
                                    <div className="p-2 bd-highlight link-primary">Following</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}
 