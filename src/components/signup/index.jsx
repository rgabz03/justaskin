import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button,Spinner } from 'react-bootstrap';
import axios from "axios";

let axiosConfig = {
    headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
  };


export default class SignupIndex extends Component {

    constructor(props) {
    super(props);
        this.state = {
            loginClicked : false
        };
    }

    handleSubmit = (event) => {

        event.preventDefault();
        
        this.setState({
            loginClicked: true
        });
        var username            = event.target.email.value;
        var password            = event.target.password.value;
        var confirm_password    = event.target.confirm_password.value;
        var agree               = event.target.agree.checked;

        if(agree == false){
            window.alert('Click to Agree');
            this.setState({
                loginClicked: false
            });  

            return false;
        }

        if(password != confirm_password){
            window.alert('Password not match');
            this.setState({
                loginClicked: false
            });  

            return false;
        }

        var data = axios
        .post("/users/register", {
            username,
            password
        }, axiosConfig)
        .then(response => {
            window.alert('Account Successfully Registered, Redirecting to Login Page');
            window.location = '/';
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

            window.alert("Something went wrong!");

        });
        
        
        return false;
    }
    
    render() { 
        
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
                        <span className="">Signing up...</span>
                    </Button>;
        }else{
            console.log('not click');
            button = <button type="submit" className="btn btn-primary-new btn-md btn-block">Sign up</button>;
        }

        return (
            <div className="col-md-6 col-sm-12">
                <div className="login-form">

                    <div className="imgcontainer">
                        <img src="/logo.png" alt="" className="m-4" width="320"/>
                    </div>
                    <h3>Sign Up</h3>
                    <h5>Please sign up to ask questions.</h5>
                    <br/>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Email Address" aria-label="User Email" aria-describedby="basic-addon2" name="email" required/>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button"><i className="fa fa-envelope"></i></button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Password" aria-label="User Password" aria-describedby="basic-addon2" name="password" required/>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button"><i className="fa fa-lock"></i></button>
                                </div>
                            </div>
                        </div>

                        
                        <div className="form-group">
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Confirm Password" aria-label="User Password" aria-describedby="basic-addon2" name="confirm_password" required/>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button"><i className="fa fa-lock"></i></button>
                                </div>
                            </div>
                        </div>

                        {/* <div className="form-group">
                            <div className="input-group mb-3">
                                <select class="form-control" aria-label="Default select example">
                                    <option selected>Select Account Type</option>
                                    <option value="ordinary">Ordinary</option>
                                    <option value="expert">Expert</option>
                                </select>
                            </div>
                        </div> */}
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="agree" id="agreeCheckBox"/>
                                {/* <input className="form-check-input" type="radio" name="agree" id="flexRadioDefault2"/> */}
                                <label className="form-check-label">I agree with <Link to="privacy" className="link-primary">Privacy Policy</Link></label>
                            </div>
                        </div>
                        {button}
                        {/* <button type="submit" className="btn btn-primary-new btn-md btn-block">Sign up</button>              */}
                    </form>
                    <br/>
                    <center>
                        <div>
                            <div className="">or login with</div>
                            <br/>
                            <div className="panel-body">
                                <button type="button" className="btn btn-default btn-circle"><i className="fa fa-google"></i></button>
                                <button type="button" className="btn btn-primary btn-circle"><i className="fa fa-facebook"></i></button>
                            </div>
                        </div>
                    <br/>
                        <div className="span4 offset4 centered"><p>Already have an Account? <Link to="/" className="link-primary">Login now!</Link></p></div>
                        <div className="span4 offset4 centered">By signing up, you agree with our <Link to="/toc" className="link-primary">Terms & Conditions</Link></div>
                
                    </center>
                </div>
            </div>
            
        );
    }

}
 