import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class timelineProfileList extends Component {
    render() { 
        return ( 
            <div className="fixed-top bg-white">
                <div className="container-fluid border-top p-3">
                        <div className="row text-center border-bottom">
                            <div class="col-4 mb-4 border-right">
                                <img class="img-thumbnail rounded-circle timeline-profile-list" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                                data-holder-rendered="true"/>
                                <p>Your Name</p>
                            </div>

                            <div class="col-4 mb-4">
                                <img class="img-thumbnail rounded-circle z-depth-2 timeline-profile-list" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                                data-holder-rendered="true"/>
                                <p>Friend Name</p>
                            </div>


                            
                            <div class="col-4 mb-4">
                                <img class="img-thumbnail rounded-circle z-depth-2 timeline-profile-list" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                                data-holder-rendered="true"/>
                                <p>Friend Name</p>
                            </div>
    
                        </div>
                </div>
            </div>
        );
    }
}
 