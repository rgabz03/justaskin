import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { login, logout, getCurrentUser, getUserProfile, updateUserDescription } from '../../custom/userFunctions';
import axios from "axios";

let axiosConfig = {
    headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        'Authorization' : ( getCurrentUser() ) ? "bearer "+getCurrentUser().access.access_token+"" : "",
        'Access-Control-Allow-Origin': '*'
    },
  };

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

export default class SessionList extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            userMessages:[],
            searchKeyword : '',
        };
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


    async getMyMessages(search = ''){
        var user_session    = getCurrentUser();

        if(user_session != null) {
            var user_id         = user_session.user_data.id;
            const res = await axios.get("/users/"+user_id+"/messages?search_name="+search,axiosConfig)
            const data = res.data.data

            const options = data.map(d => ({
                "profile_picture" : d.picture_path,
                "content" : d.content,
                "message_count" : d.message_count,
                "created_date" : d.created_date,
                "id"        : d.id,
                "user_id"        : d.user_id,
                "status"        : d.status,
                "first_name"        : d.first_name,
                "last_name"        : d.last_name,
                "post_title"        : d.title,
            }))
            this.setState({userMessages: options})

            console.log(options);
        }

    }


     handletimeSince = (date) => {

        var seconds = Math.floor((new Date() - date) / 1000);
    
        var interval = seconds / 31536000;
    
        if (interval > 1) {
        return Math.floor(interval) + " years";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
        return Math.floor(interval) + " months";
        }
        interval = seconds / 86400;
        if (interval > 1) {
        return Math.floor(interval) + " days";
        }
        interval = seconds / 3600;
        if (interval > 1) {
        return Math.floor(interval) + " hours";
        }
        interval = seconds / 60;
        if (interval > 1) {
        return Math.floor(interval) + " minutes";
        }
        return Math.floor(seconds) + " seconds";
    }


    handleSearchChange = (event) => {
        var input_value = document.getElementById('searchKeyword').value;
        this.setState({
            searchKeyword: event.target.value
        });

        this.getMyMessages(( input_value == '' ) ? '' : this.state.searchKeyword);

    }

    componentDidMount(){
        this.getMyMessages();
    }
    
    render() { 
        
        return (
            <div className="col-md-12 col-sm-12 search-input-container">
                 <div className="form-group has-search">
                    <span className="fa fa-search form-control-feedback"></span>
                    <input type="text" className="form-control" value={this.state.searchKeyword} onChange={evt => this.handleSearchChange(evt)} id="searchKeyword" placeholder="Search"/>
                </div>
                <div className="row">
                    <div className="container">
                        
                        

                    <div className="list-group message-list">
                
                            {this.state.userMessages.map(d => (
                            <Link to={"/questions/view/"+d.user_id}  className={( d.message_count > 0 && d.status == "unread") ? "list-group-item list-group-item-action flex-column align-items-start custom-active": "list-group-item list-group-item-action flex-column align-items-start"  }>
                                <div className="row">
                                    <div className="col-4">
                                        <img className="img-thumbnail rounded-circle timeline-profile-list" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                                            data-holder-rendered="true"/>
                                    </div>
                                    <div className="col-8">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">{d.first_name != null ? d.first_name: "User"}</h5>
                                            <small>{ this.handletimeSince(new Date( Date.parse(d.created_date)  - 24 * 60 * 60 * 1000)) } ago</small>
                                        </div>
                                        
                                        <p className="mb-1 hide-some-text">{d.post_title != null ? d.post_title: "..."}</p>
                                        { (d.message_count > 0 && d.status == "unread" ) ? (<span className="badge badge-danger badge-pill position-relative float-right">{d.message_count}</span>) : "" }
                                    </div>
                                </div>
                            </Link>
                            ))} 

                            {/* <Link to="/questions/view/1" className="list-group-item list-group-item-action flex-column align-items-start custom-active">
                                <div className="row">
                                    <div className="col-4">
                                        <img className="img-thumbnail rounded-circle timeline-profile-list" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                                            data-holder-rendered="true"/>
                                    </div>
                                    <div className="col-8">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Question ...</h5>
                                            <small>3 days ago</small>
                                        </div>
                                        <p className="mb-1">This is the content of the user message...</p>
                                        <span className="badge badge-danger badge-pill position-relative float-right">14</span>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/questions/view/2" className="list-group-item list-group-item-action flex-column align-items-start">
                                <div className="row">
                                    <div className="col-4">
                                        <img className="img-thumbnail rounded-circle timeline-profile-list" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                                            data-holder-rendered="true"/>
                                    </div>
                                    <div className="col-8">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Question ...</h5>
                                            <small>3 days ago</small>
                                        </div>
                                        <p className="mb-1">This is the content of the user message...</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/questions/view/1" className="list-group-item list-group-item-action flex-column align-items-start">
                                <div className="row">
                                    <div className="col-4">
                                        <img className="img-thumbnail rounded-circle timeline-profile-list" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                                            data-holder-rendered="true"/>
                                    </div>
                                    <div className="col-8">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Question ...</h5>
                                            <small>3 days ago</small>
                                        </div>
                                        <p className="mb-1">This is the content of the user message...</p>
                                    </div>
                                </div>
                            </Link> */}
                        </div>


                        

                    </div>
                </div>
            </div>
            
        );
    }

}
 