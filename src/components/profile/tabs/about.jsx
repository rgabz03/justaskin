import React, { Component, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Label from "../../../custom/label";

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


export default class ProfileAboutTab extends Component {
    

    constructor() {
        super();
        this.state = {
        html: "This is just an example of Description"
        };
    }
    
    handleChange = (event) => {
        this.setState({html: event.target.value}, ()=> {  console.log(this.state.html); });
    };

    TriggerEdit = () => {
        this.handleChange('test');
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
    
    
      
    render() { 
        
        return (
                <div className="col-md-12 col-sm-12 text-align-center">
                    <br/>
                    <div className="row">
                        <div className="col-md-12">
                            <h6 className="text-muted">Edit Description<span className="badge badge-secondary bg-primary-custom px-2 m-1">update</span></h6>
                            <Label html={this.state.html} onChange={this.handleChange} />
                        </div>
                        
                        <div className="col-md-12">
                            <h6 className="text-muted">Manage your interests<button className="btn btn-sm"><i className="fa fa-plus"></i></button></h6>
                            <span className="badge badge-secondary px-2 m-1">Web development</span>
                            <span className="badge badge-secondary px-2 m-1">Javascript</span>
                            <span className="badge badge-secondary px-2 m-1">Photo Editing</span>
                        </div>
                    </div>
                </div>
        );
    }
    

}
 