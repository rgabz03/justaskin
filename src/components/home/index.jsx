import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TimelineProfileList from "../timelineProfileList";
import TimeLineQuestion from "../question/timeline";
import config from '../../Config';
import axios from "axios";
import { login, logout, getCurrentUser, getUserProfile, updateUserDescription } from '../../custom/userFunctions';

let axiosConfig = {
    headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        'Authorization' : ( getCurrentUser() ) ? "bearer "+getCurrentUser().access.access_token+"" : "",
        'Access-Control-Allow-Origin': '*'
    },
  };


export default class HomeIndex extends Component{

    constructor(props, context) {
        super(props, context);
  
        this.state = {
            posts:[],
        };
    }


    async getPosts(){
        var user_session    = getCurrentUser(); 

        if(user_session != null) {
            var user_id         = user_session.user_data.id;
            
            const res = await axios.get("/posts/",axiosConfig)
            const data = res.data.data;

            const options = data.map(d => ({
                "title"         : d.title,
                "content"       : d.content,
                "media"         : d.media,
                "id"            : d.id,
                "created_date"  : d.created_date,
                "followed"      : d.followed,
                "likes"         : d.likes,
                "comments_count"  : d.comment_count,
                "user_id"         : d.user_id,
            }));

            console.log(options);
            this.setState({posts: options});
            
        
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


    componentDidMount(){
        this.getPosts();
    }
    
    
    render() { 

        
        
        return (
            <React.Fragment>
            <div className="col-md-12 col-sm-12">
                <TimelineProfileList/>
                
                { this.state.posts.length ?
                this.state.posts.map(d => (
                        
                   
                    <div className="">
                    <br/>
                    <div className="row custom-box-shadow border-bottom">
                       {/* <TimelinePostTopIndicator/> */}
                       

                       <div className="container">
                            <div className="d-flex justify-content-between bd-highlight">
                                <div className="container">
                                    <div className="row padding-top-4">
                                        <div className="col-2 padding-bottom-top-2">
                                            <Link to={ "/profile/view/"+d.user_id }><img className="img-thumbnail rounded-circle timeline-question-profile-photo" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                                            data-holder-rendered="true"/> </Link>
                                        </div>
                                        <div className="col-4 padding-bottom-top-2">
                                            <div className="row padding-top-4">
                                                <span className="sm-font-size">{ d.first_name }</span>
                                            </div> 
                                            <div className="row">
                                                <span className="timeline-positing-time text-muted">{this.handletimeSince(new Date( Date.parse(d.created_date)  - 24 * 60 * 60 * 1000))} ago</span>
                                            </div>         
                                        </div>
                                        <div className="col-6">
                                            <div className="d-flex justify-content-end mb-3">
                                                <div className="p-2 bd-highlight link-primary">{ ( d.followed ) ? "Following":"" }</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                    <br/>
                    <div className="row text-center">
                        <div className="col-12"><h5>Question: </h5></div>
                        <div className="col-12"><p className="sm-font-size">{d.title}</p></div>
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
                        {/* <LikeStatus/> */}
                        <div className="container">
                            <span className="float-left text-left"><b>{d.likes}</b> like this</span>
                        </div>
                    </div>
                    {/* <CommentStatus/> */}
                    <div className="row">
                        <div className="container">
                            <Link to="timeline/questions/view/1"><span className="sm-font-size text-muted">See all {d.comments_count} comments</span></Link>
                        </div>
                    </div>
                </div>
                ))
            : 
            
            <div className="">
                    <br/>
                    <div className="timeline-top-blank-space"></div>
                    <center><h1 className="text-muted">No Posting</h1></center>
            </div>
            }
                {/* // <TimeLineQuestion/>
                // <TimeLineQuestion/>
                // <TimeLineQuestion/>
                // <TimeLineQuestion/> */}
            </div>
            </React.Fragment>
        );
    }
    

}
 