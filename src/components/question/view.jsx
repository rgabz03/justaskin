import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import QuestionsList from "./questionUserList";
import QuestionSender from "./questionSender";
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

  

export default class View extends Component {

    constructor(props, context) {
        super(props, context);
  
        this.state = {
            userMessages:[],
            me: '',
            friend_data : [] ,
        };
    }

    
    async getUserMessages(){
        var user_session    = getCurrentUser();              
        var url = window.location.pathname;
        var arr = url.split("/");
        var friend_id = arr[3];


        if(user_session != null) {
            var user_id         = user_session.user_data.id;
            const res = await axios.get("/users/"+user_id+"/messages/"+friend_id,axiosConfig)
            const data = res.data.data

            const options = data.map(d => ({
                // "profile_picture" : d.picture_path,
                "content" : d.content,
                "message_count" : d.message_count,
                "created_date" : d.created_date,
                "id"        : d.id,
                "user_id"        : d.user_id
            }))

            this.setState({userMessages: options})
            this.setState({me: user_id})
        }

    }


    async getFriendName(){
        var user_session    = getCurrentUser();              
        var url = window.location.pathname;
        var arr = url.split("/");
        var friend_id = arr[3];


        if(user_session != null) {
            var user_id         = user_session.user_data.id;
            const res = await axios.get("/users/"+user_id+"/messages/"+friend_id+"/name",axiosConfig)
            const data = res.data.data;
            console.log(data);

            const options = data.map(d => ({
                "profile_picture" : d.picture_path,
                "login_date" : d.login_date,
                "first_name" : ( typeof d.first_name !=='undefined' ) ? d.first_name : "???",
                "id"         : d.id
            }))

            this.setState({friend_data: options});
        
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

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

      }
    componentDidMount(){
        this.getUserMessages();
        this.getFriendName();
        // this.scrollToBottom();
    }
    
    

    render() { 
        console.log("name : " + this.state.first_name);
        
        return (
            <div className="col-md-12 col-sm-12">
                <div className="fixed-top">
                    <div className="row shadow-lg p-3 bg-white">
                        <div className="col-2">
                            <Link to="/session/questions" className="link-primary"><i className="fa fa-chevron-left fa-3x"></i></Link>
                        </div>
                        <div className="col-10">
                                <div className="d-flex bd-highlight">
                                    <div className="float-left">
                                        <img className="img-thumbnail rounded-circle timeline-question-profile-photo float-left" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                                    data-holder-rendered="true"/>
                                    </div>
                                    {this.state.friend_data.map(d => (
                                        <div className="col-10 float-right">
                                            <span className="text-muted" id="loginAttempt">Active { this.handletimeSince(new Date( Date.parse(d.login_date)  - 24 * 60 * 60 * 1000)) } ago</span> <Link to="#" className="float-right"><span className="sm-font-size text-danger"><i className="fa fa-exclamation-circle"></i></span></Link>
                                            <div id="user-full-name">{(d.first_name == '') ? "???": d.first_name}</div>
                                        </div>
                                    ))} 
                                </div>  
                        </div>
                    </div>
                </div>
                {/* <QuestionsList/> */}

                <div className="col-md-12 col-sm-12 messageList">
                    <div className="timeline-top-blank-space"></div>

                    <div className="card shadow p-3 mb-5 bg-white rounded">
                        <img className="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_178daa17be3%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_178daa17be3%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1875%22%20y%3D%2296.24375%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Question</h5>
                            <p className="card-text">The content of the question</p>
                        </div>
                    </div>

                    {this.state.userMessages.map(d => (
                        <div className={(this.state.me == d.user_id) ? "card bg-primary-custom shadow mb-5 text-white rounded col-10 float-right" : "card bg-white shadow mb-5 text-dark rounded col-10 float-left"} >
                            <div className="card-body">
                                <div className="card-title sm-font-size float-right"><i className="fa fa-clock-o"></i> { this.handletimeSince(new Date( Date.parse(d.created_date)  - 24 * 60 * 60 * 1000)) } ago</div>
                                <br />
                                <p className="card-text float-left">{d.content}</p>
                            </div>
                        </div>
                    ))} 

                    <div className="ask-user-question-bottom-space"></div>
                    <div className="allowance-bottom-space" ref={(el) => { this.messagesEnd = el; }}></div>
                </div>

                <QuestionSender/>
            </div>
            
        );
    }

}
 