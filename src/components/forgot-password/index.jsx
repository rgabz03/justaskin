import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Link , Redirect} from "react-router-dom";
import { login, logout, getCurrentUser } from '../../custom/userFunctions';
import { Button,Spinner } from 'react-bootstrap';
import axios from "axios";

let axiosConfig = {
    headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
  };
  
export default class ForgotPasswordIndex extends Component {

    constructor(props) {
    super(props);
        this.state = {
            loginClicked : false
        }
    }

    handleSubmit = async (event) => {

        event.preventDefault();

        this.setState({
            loginClicked: true
        });
        var username = event.target.email.value;
      
        axios
        .post("/users/forgot-password", {
            username
        }, axiosConfig)
        .then(response => {
            if (response.data.data.access.access_token) {
            localStorage.setItem("user", JSON.stringify(response.data.data));
            }
            window.location = 'home';
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
                loginClicked: false
            });  
            window.alert('Something went wrong!');

        });
        
        
        return false;
    }
    
    render() { 

        if(getCurrentUser()){
            return <Redirect to='/home' />
        }
        const clickedLogin = this.state.loginClicked;
        let button;
        if(clickedLogin)
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
                        <span className="">Submitting...</span>
                    </Button>;
        }else{
            console.log('not click');
            button = <button type="submit" className="btn btn-primary-new btn-md btn-block">Submit</button>;
        }

        return (
            <div className="col-md-12 col-sm-12">
                <div className="login-form">

                    <br/>
                    <h1>Forgot Password</h1>
                    <br/>
                    <form onSubmit={ this.handleSubmit }>
                        <div className="form-group">
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Email Address" aria-label="User Email" aria-describedby="basic-addon2" name="email" required/>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button"><i className="fa fa-envelope"></i></button>
                                </div>
                            </div>
                        </div>
                        {button}
                    </form>
                </div>
            </div>
            
        );
    }

}
 