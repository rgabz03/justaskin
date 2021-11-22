import React, { Component, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SavedQuestions from "../../question/saved";
import { login, logout, getCurrentUser, getUserProfile, updateUserDescription } from '../../../custom/userFunctions';
import axios from "axios";

let axiosConfig = {
    headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        'Authorization' : ( getCurrentUser() ) ? "bearer "+getCurrentUser().access.access_token+"" : "",
        'Access-Control-Allow-Origin': '*'
    },
  };

export default class ProfileSavedTab extends Component {
    
    constructor(props, context) {
        super(props, context);
  
        this.state = {
            userSavedPost:[],
        };
    }


    async getUserSavedPost(){
        var user_session    = getCurrentUser(); 

        if(user_session != null) {
            var user_id         = user_session.user_data.id;
            
            const res = await axios.get("/users/"+user_id+"/posts/saved",axiosConfig)
            const data = res.data.data;

            const options = data.map(d => ({
                "title"         : d.title,
                "content"       : d.content,
                "media"         : d.media,
                "id"            : d.id,
                "created_date"  : d.created_date,
            }));

            console.log(options);
            this.setState({userSavedPost: options});
        
        }

    }


    componentDidMount(){
        this.getUserSavedPost();
    }
    
    render() { 
        
        return (
            <React.Fragment>
                <br/>
                {this.state.userSavedPost.map(d => (
                <div className="shadow p-3 mb-5 bg-white">
                    <div className="row text-center text-dark">
                        <div className="col-12"><h5>Question: </h5></div>
                        <div className="col-12"><p className="sm-font-size">{ d.title }</p></div>
                        <button type="button" className="btn p-4 position-absolute float-right">
                            <i className="fa fa-close "></i>
                        </button>
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
                    </div>
                    {/* <CommentStatus/> */}
                </div>
            ))}
            </React.Fragment>
        );
    }
    

}
 