import React, { Component, useState, useLayoutEffect, useCallback } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { login, logout, getCurrentUser, getUserProfile } from '../../custom/userFunctions';
import AboutTab from "./tabs/about";
import SettingsTab from "./tabs/settings";
import WalletTab from "./tabs/wallet";
import SavedTab from "./tabs/saved";
import axios from "axios";


let axiosConfig = {
    headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        'Authorization' : 'bearer '+ ( getCurrentUser() !=='undefined' ) ? '' : getCurrentUser().user_data.access_token,
        'Access-Control-Allow-Origin': '*'
    },
  };

export default class ProfileIndex extends Component {

    
    componentDidMount(){
        Promise.all([getUserProfile()])
        .then(function (results) {
            console.log(results[0]);
            document.getElementById('user-full-name').innerHTML = ( results[0]['first_name'] != null ) ? results[0]['first_name'] : 'User';
            document.getElementById('user-job-title').innerHTML = ( results[0]['first_name'] != null ) ? results[0]['title'] : 'No Title';
        });
    }

    render() { 

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
                                                    <h5 className="card-title" id="user-full-name"></h5>
                                                    <p className="card-text" id="user-job-title"></p>
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
 