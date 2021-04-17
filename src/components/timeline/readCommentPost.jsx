import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class readCommentPost extends Component {
    render() { 
        return ( 
            <div className="panel-body">
                <ul className="list-group">
                    <li className="list-group-item">
                        <div className="row">
                            <div className="col-xs-2 col-md-1">
                                <img src="http://placehold.it/80" className="img-thumbnail rounded-circle timeline-question-profile-photo-comment p-1" alt="" />
                                <span className="p-1">
                                <Link to="/ask/user/12" className="btn btn-primary-custom">Ask Help</Link>
                                </span>
                                <span className="float-right sm-font-size text-muted">5 minutes ago</span>
                            </div>
                            <div className="col-xs-10 col-md-11">
                                <div className="comment-text">
                                    This is a comment
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="row">
                            <div className="col-xs-2 col-md-1">
                                <img src="http://placehold.it/80" className="img-thumbnail rounded-circle timeline-question-profile-photo-comment p-1" alt="" />
                                {/* <span className="p-1">
                                <Link to="#" className="btn btn-primary-custom">Ask Help</Link>
                                </span> */}
                                <span className="float-right sm-font-size text-muted">5 minutes ago</span>
                            </div>
                            <div className="col-xs-10 col-md-11">
                                <div className="comment-text">
                                    Awesome design
                                </div>
                            </div>
                        </div>
                    </li>
                    
                    
                </ul>
            </div>
        );
    }
}
 