import React, { Component, useState, useLayoutEffect, useCallback } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { login, logout, getCurrentUser } from '../../custom/userFunctions';
import AboutTab from "./tabs/about";
import SettingsTab from "./tabs/settings";
import WalletTab from "./tabs/wallet";
import SavedTab from "./tabs/saved";
import axios from "axios";

let axiosConfig = {
    headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        'Authorization' : 'bearer '.getCurrentUser().user_data.access_token,
        'Access-Control-Allow-Origin': '*'
    },
  };

export default class ProfileIndex extends Component {

    // handleSubmit = async (event) => {
       
    // }

    getUserProfile = (id) => {
        axios
        .get("/users/profile/".id, '', axiosConfig)
        .then(response => {
            if (response.data.data.access.access_token) {
            localStorage.setItem("user", JSON.stringify(response.data.data));
            }
            
        })
        .catch(error => {
            console.log(error.response);
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                // console.log(error.response.data);
                console.log(error.response.status);
                // console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }

            this.setState({
                loginClicked: false
            });  
            // window.alert('Oops something went wrong!');

        });
    }

    render() { 

        // this.getUserProfile(getCurrentUser().user_data.id??0);

        return (
                <div className="">
                                    <div className="row">
                                            <div className="card text-center col-md-6">
                                                <center>
                                                    <div className="col-5">
                                                        <br/>
                                                        <img className="card-img-top img-thumbnail rounded-circle" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg" alt="Card image cap"/>
                                                    </div>
                                                </center>
                                                <div className="card-body">
                                                    <h5 className="card-title">User Name</h5>
                                                    <p className="card-text">Senior Developer</p>
                                                    <a href="#" className="btn btn-primary-custom">Followers 169</a>
                                                </div>
                                            </div>

                                        </div>
                                        <Tabs defaultActiveKey="about" id="uncontrolled-tab-example" fill>
                                            <Tab eventKey="about" title="About">
                                                <AboutTab/>
                                            </Tab>
                                            <Tab eventKey="settings" title="Settings">
                                                <SettingsTab/>
                                            </Tab>
                                            <Tab eventKey="wallet" title="Wallet">
                                                <WalletTab/>
                                            </Tab>
                                            <Tab eventKey="saved" title="Saved">
                                                <SavedTab/>
                                            </Tab>
                                        </Tabs>
                                </div>
        );
    }
    

}
 