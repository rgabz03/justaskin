import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TimelineProfileList from "../timelineProfileList";
import TimeLineQuestion from "../question/timeline";

export default class AskUserHelp extends Component {

    render() { 

        return (
            <React.Fragment>
            <div className="col-md-12 col-sm-12">
                <br/>
                <div className="card text-justify col-md-6 shadow p-3 mb-5 bg-white rounded">
                    <div className="card-body">
                        <h5 className="card-title">Important Notice</h5>
                        <p className="card-text sm-font-size">You need to pay so you can ask a question. If your question is not answered, your coins will not be deducted</p>
                    </div>
                </div>
                
                <div className="card text-justify col-md-6 shadow  mb-5 bg-primary-custom rounded">
                    <div className="card-body">
                        <h5 className="card-title">Coins Balance : 0</h5>
                        <Link to="#" className="float-right text-white"><i className="fa fa-plus"></i> ADD COINS</Link>
                    </div>
                </div>
                <form>
                    <div className="card text-justify col-md-6 shadow p-3 bg-white rounded">
                        

                        <div className="row padding-top-4">
                            <div className="col-2 padding-bottom-top-2">
                                <Link to="/profile/view/123"><img className="img-thumbnail rounded-circle timeline-question-profile-photo" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                                data-holder-rendered="true"/> </Link>
                            </div>
                            <div className="col-4 padding-bottom-top-2">
                                <div className="row padding-top-4">
                                    <span className="sm-font-size">User Name</span>
                                </div> 
                                <div className="row">
                                    <span className="timeline-positing-time text-muted">Expert</span>
                                </div>         
                            </div>
                            <div className="col-6">
                                <div className="d-flex justify-content-end mb-3">
                                    <div className="p-2 bd-highlight link-primary">Following</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Type your question / message here..."></textarea>
                        </div>
                        <button className="btn btn-primary-custom">Ask</button>
                    </div>
                </form>
            </div>
            </React.Fragment>
        );
    }

}
 