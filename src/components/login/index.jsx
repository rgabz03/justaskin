import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { login, logout, getCurrentUser } from '../../custom/userFunctions';
import { Button,Spinner } from 'react-bootstrap';

export default class LoginIndex extends Component {

    handleSubmit = async (event) => {

        event.preventDefault();
        var username = event.target.email.value;
        var password = event.target.password.value;

        login(username, password);
        
        return false;
    }
    
    render() { 
        console.log(getCurrentUser());
        return (
            <div className="col-md-12 col-sm-12">
                <div className="login-form">

                    <div className="imgcontainer">
                        <img src="/logo.png" alt="" className="m-4" width="320"/>
                    </div>
                    <h3>Login</h3>
                    <h5>Please login to your account</h5>
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
                        <Button variant="btn btn-primary-new btn-md btn-block" disabled>
                            <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                            />
                            <span className="">Logging in...</span>
                        </Button>
                        <button type="submit" className="btn btn-primary-new btn-md btn-block">Login</button>             
                        {/* <Link to="/home"  className="btn btn-primary-new btn-md btn-block">Login</Link> */}
                    </form>
                    <br/>
                    <div>
                        <Link to="/forgotpassword" className="float-right link-primary">Forgot Password</Link><br/><br/>
                    </div>
                    <center>
                        <div>
                            <div className="">or login with</div>
                            <br/>
                            <div className="panel-body">
                                <button type="button" className="btn btn-default btn-circle"><i className="fa fa-google"></i></button>
                                <button type="button" className="btn btn-primary btn-circle"><i className="fa fa-facebook"></i></button>
                            </div>
                        </div>
                    </center>
                    <br/>
                    <div className="span4 offset4 centered"><p>Don't have Account? <Link to="/signup" className="link-primary">Sign up now!</Link></p></div>
                    <div className="span4 offset4 centered">By signing up, you agree with our <Link to="/toc" className="link-primary">Terms & Conditions</Link></div>
                </div>
            </div>
            
        );
    }

}
 