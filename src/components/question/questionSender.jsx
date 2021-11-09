import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { getCurrentUser, sendMessage} from '../../custom/userFunctions';
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

export default class View extends Component {

    
    constructor(){
        super()
        this.state = {
            animate : true,
        }

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

    async handleSendMessage() {
        var message = document.getElementById("messageContent").value;
        var user_session    = getCurrentUser();              
        var url = window.location.pathname;
        var arr = url.split("/");
        var friend_id = arr[3];


        if(user_session != null) {
            var user_id         = user_session.user_data.id;

            sendMessage(friend_id, message);

            window.location.reload(true);
        
        }
    }
    
    render() { 
        
        return (
            <div className="col-md-12 col-sm-12 fixed-bottom">
                <div className="row shadow-lg p-3 bg-white">
                    <div className="container">
                        <div className="input-group mb-3">
                            <span className={this.state.animate ? "fade-in-btn btn btn-primary-custom" : "btn-primary-custom"}>Ask Another</span>
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Type Message.." aria-label="Type Message.." aria-describedby="basic-addon2" id="messageContent"/>
                            <div className="input-group-append">
                                <button className="btn btn-primary-custom" type="button" onClick={ this.handleSendMessage }><i className="fa fa-send"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }

}
 