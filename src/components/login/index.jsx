import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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

export default class LoginIndex extends Component {

    handleSubmit = async (event) => {
        const username = event.target.email.value;
        const password = event.target.password.value;

        const token = await loginUser({
            username,
            password
        });
        // setToken(token);
    }
    
    render() { 
        
        return (
            <div className="col-md-6 col-sm-12">
                <div className="login-form">

                    <div className="imgcontainer">
                        <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="" className="avatar"/>
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
                                <input type="password" className="form-control" placeholder="Password" aria-label="User Password" aria-describedby="basic-addon2" required/>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button"><i className="fa fa-lock"></i></button>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary-new btn-md btn-block">Login</button>             
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
 