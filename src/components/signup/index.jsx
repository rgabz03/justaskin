import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class SignupIndex extends Component {

    
    handleSubmit = (event) => {
        alert('A name was submitted: ');
        event.preventDefault();
        console.log(event.target.email.value);
    }
    
    render() { 
        
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
                                <select class="form-control" aria-label="Default select example">
                                    <option selected>Select Account Type</option>
                                    <option value="ordinary">Ordinary</option>
                                    <option value="expert">Expert</option>
                                </select>
                            </div>
                        </div>

                        
                        <button type="submit" className="btn btn-primary-new btn-md btn-block">Sign up</button>             
                    </form>
                    <br/>
                    <center>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                            <label className="form-check-label">I agree with Private Policy</label>
                        </div>
                        <br/>
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
 