import React, { Component, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { login, logout, getCurrentUser } from '../../../custom/userFunctions';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from "../../../theme";
import Spinner from 'react-bootstrap/Spinner'

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

export default class ProfileSettingsTab extends Component {
    
    
    handleSubmit = async (event) => {
        const username = event.target.email.value;
        const password = event.target.password.value;

        const token = await loginUser({
            username,
            password
        });
        // setToken(token);
    }
    
    
    logoutUser = () =>{
        logout();
        window.alert('logout');
        window.location = '/';
    }

    componentDidMount(){
        Promise.all([getCurrentUser()])
        .then(function (results) {
            console.log("here");
            console.log(results[0]['user_data']);
            var first_name = document.getElementById('firstName');
            var last_name = document.getElementById('lastName');
            var email_address = document.getElementById('emailAddress');
            var location = document.getElementById('location');
            first_name.defaultValue = (results[0]['user_data']['first_name'] == null) ? '' : results[0]['user_data']['first_name'];
            last_name.defaultValue = (results[0]['user_data']['last_name'] == null) ? '' : results[0]['user_data']['last_name'];
            email_address.defaultValue = (results[0]['user_data']['username'] == null) ? '' : results[0]['user_data']['username'];
            location.defaultValue = (results[0]['user_data']['location'] == null) ? '' : results[0]['user_data']['location'];
        });
    }

    
    
    darkModeToggle = () => {
        // const [ theme, setTheme ] = useState("light");
        const $ = window.$;
        var darkmode = document.getElementById('darkmode').checked;
        if(darkmode){
            window.localStorage.setItem('theme', 'dark');
        }else{
            window.localStorage.setItem('theme', 'light');
        }
        window.location.href = '/profile?darkmode=1';
    }

    render() { 

        
        return (
                <div className="col-md-12 col-sm-12">
                    <div className="row">

                    {/* <Spinner animation="grow" role="status">
                        <span className="visually-hidden"></span>
                    </Spinner> */}
                        
                        <div className="col-md-12">
                            <label>First Name</label>
                            <div className="input-group mb-1">
                                <input id="firstName" type="text" className="form-control" placeholder="..." aria-label="First Name" aria-describedby="basic-addon2"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary-custom" type="button">Update</button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-12">
                            <label>Last Name</label>
                            <div className="input-group mb-1">
                                <input id="lastName"  type="text" className="form-control" placeholder="..." aria-label="Last Name" aria-describedby="basic-addon2"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary-custom" type="button">Update</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <label>Email address</label>
                            <div className="input-group mb-1">
                                <input id="emailAddress" type="text" className="form-control" placeholder="email@domain.com" aria-label="Email Address" aria-describedby="basic-addon2"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary-custom" type="button">Update</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <label>Location</label>
                            <div className="input-group mb-3">
                                <input id="location"  type="text" className="form-control" placeholder="..." aria-label="Location" aria-describedby="basic-addon2"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary-custom" type="button">Update</button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <label>Receive Notifications</label>
                            <div className="input-group mb-3">
                                
                                <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                                </label>
                                
            
                            </div>
                        </div>

                        <div className="col">
                            <label>Dark Mode</label>
                            <div className="input-group mb-3">
                                
                                <label className="switch">
                                <input id="darkmode" type="checkbox" onChange={ this.darkModeToggle } checked={  ( window.localStorage.getItem("theme")  !== null &&  window.localStorage.getItem("theme") == 'dark') ? true : false }/>
                                <span className="slider round"></span>
                                </label>
                                
            
                            </div>
                        </div>
                        
                        <div className="col-md-12">
                            <div className="input-group mb-3">
                                <Link to="https://www.google.com" className="btn btn-primary-custom btn-lg btn-block">Become a verified Expert</Link>
                            </div>
                        </div>

                        
                        <div className="col-md-12">
                            <div className="input-group mb-3">
                                <Link to="#" className="btn btn-primary-custom btn-lg btn-block" onClick={this.logoutUser}>Logout</Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
        );
    }
    

}
 

