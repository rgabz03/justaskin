import React, { Component, useState } from 'react';
import { Tab, Tabs , Button, Spinner} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { login, logout, getCurrentUser, getUserProfile, updateUserRecieveNotification } from '../../../custom/userFunctions';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from "../../../theme";
// import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";

let axiosConfig = {
    headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        'Authorization' : ( getCurrentUser() ) ? "bearer "+getCurrentUser().access.access_token+"" : "",
        'Access-Control-Allow-Origin': '*'
    },
  };


export default class ProfileSettingsTab extends Component {

    constructor(props) {
        super(props);
            this.state = {
                updateProfileClicked : false
            }
        }
    
    
    handleSubmit = async (event) => {


        var user_id = getCurrentUser().user_data.id;
        event.preventDefault();

        this.setState({
            updateProfileClicked: true
        });

        var username = event.target.email.value;
        var first_name = event.target.first_name.value;
        var last_name = event.target.last_name.value;
        var location = event.target.location.value;

        axios
        .put("/users/"+user_id+"/update/profile", {
            username,
            first_name,
            last_name,
            location
        }, axiosConfig)
        .then(response => {
            // if (response.data.data.access.access_token) {
            // localStorage.setItem("user", JSON.stringify(response.data.data));
            // }
            window.location = 'profile?setting=1';
            console.log(response.data.data);
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
                logout();
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }

            
            this.setState({
                updateProfileClicked: false
            });  

            window.alert('Incorrect User Credential');

        });
        
        
        return false;
    }
    
    
    logoutUser = () =>{
        logout();
        window.alert('logout');
        window.location = '/';
    }

    componentDidMount(){
        Promise.all([getCurrentUser()])
        .then(function (results) {
            var email_address = document.getElementById('emailAddress');
            email_address.defaultValue = (results[0]['user_data']['username'] == null) ? '' : results[0]['user_data']['username'];
        });

        Promise.all([getUserProfile()])
        .then(function (results) {
            var first_name = document.getElementById('firstName');
            var last_name = document.getElementById('lastName');
            var location = document.getElementById('location');
            first_name.defaultValue = (results[0]['first_name'] == null) ? '' : results[0]['first_name'];
            last_name.defaultValue = (results[0]['last_name'] == null) ? '' : results[0]['last_name'];
            location.defaultValue = (results[0]['location'] == null) ? '' : results[0]['location'];
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
        window.location.href = '/profile?setting=1';
    }



    receiveNotificationToggle = () => {
        
        const $ = window.$;
        var receiveNotification = document.getElementById('receiveNotification').checked;
        if(receiveNotification){
            window.localStorage.setItem('receiveNotification', 'on');
        }else{
            window.localStorage.setItem('receiveNotification', 'off');
        }

        updateUserRecieveNotification(window.localStorage.getItem('receiveNotification'));
        window.location.href = '/profile?setting=1';
    }


    render() { 


        const clickedUpdateProfile = this.state.updateProfileClicked;
        let button;
        if(clickedUpdateProfile)
        {
            console.log('click');
            button = <Button variant="btn btn-primary-new btn-md btn-block" disabled>
                        <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        />
                        <span className="">Updating...</span>
                    </Button>;
        }else{
            console.log('not click');
            button = <button type="submit" className="btn btn-primary-custom btn-lg btn-block">Update</button>;
        }



        return (
                <div className="col-md-12 col-sm-12">
                    <div className="">
                        <div className="">
                            <form onSubmit={this.handleSubmit}>
                            <div className="col-md-12">
                                <label>First Name</label>
                                <div className="input-group mb-1">
                                    <input id="firstName" type="text" className="form-control" placeholder="..." aria-label="First Name" aria-describedby="basic-addon2" name="first_name"/>
                                    {/* <div className="input-group-append">
                                        <button className="btn btn-primary-custom" type="button">Update</button>
                                    </div> */}
                                </div>
                            </div>

                            
                            <div className="col-md-12">
                                <label>Last Name</label>
                                <div className="input-group mb-1">
                                    <input id="lastName"  type="text" className="form-control" placeholder="..." aria-label="Last Name" aria-describedby="basic-addon2" name="last_name"/>
                                    {/* <div className="input-group-append">
                                        <button className="btn btn-primary-custom" type="button">Update</button>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-md-12">
                                <label>Email address</label>
                                <div className="input-group mb-1">
                                    <input id="emailAddress" type="text" className="form-control" placeholder="email@domain.com" aria-label="Email Address" aria-describedby="basic-addon2" name="email"/>
                                    {/* <div className="input-group-append">
                                        <button className="btn btn-primary-custom" type="button">Update</button>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-md-12">
                                <label>Address</label>
                                <div className="input-group mb-3">
                                    <input id="location"  type="text" className="form-control" placeholder="..." aria-label="Location" aria-describedby="basic-addon2" name="location"/>
                                    {/* <div className="input-group-append">
                                        <button className="btn btn-primary-custom" type="button">Update</button>
                                    </div> */}
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="input-group mb-3">
                                    {button}
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>     

                    <div className="row">    
                        <div className="col">
                            <label>Receive Notifications</label>
                            <div className="input-group mb-3">
                                
                                <label className="switch">
                                <input id="receiveNotification" type="checkbox" onChange={ this.receiveNotificationToggle } checked={  ( window.localStorage.getItem("receiveNotification")  !== null &&  window.localStorage.getItem("receiveNotification") == 'on') ? true : false }/>
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
 

