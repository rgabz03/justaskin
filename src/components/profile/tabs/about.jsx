import React, { Component, useState } from 'react';
import { Tab, Tabs, Modal, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { login, logout, getCurrentUser, getUserProfile, updateUserDescription } from '../../../custom/userFunctions';
import Label from "../../../custom/label";
import Select from 'react-select';
import axios from "axios";

let axiosConfig = {
    headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        'Authorization' : ( getCurrentUser() ) ? "bearer "+getCurrentUser().access.access_token+"" : "",
        'Access-Control-Allow-Origin': '*'
    },
  };

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

export default class ProfileAboutTab extends Component {
    

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: null,
            html : ( getUserProfile() !== 'undefined' ) ? getUserProfile().description : '' ,
        };
    }



    handleUpdateDescription = async() =>{
    
        var user_session    = getCurrentUser();
        var description     = document.getElementById('descriptionContent').value;

        console.log("here");
        console.log(description);
    
        if(user_session != null) {
            var user_id         = user_session.user_data.id;
            var access_token    = user_session.access.access_token;
            var description    = description;
    
            let res = await axios.put("/users/"+user_id+"/update/description", { description },{
                    headers : {
                        'Authorization': `bearer ${access_token}`,
                        'Accept' : 'application/json',
                        'Content-Type' : 'application/json',
                    }
                })
                .then(response => {
                    // console.log(response.data.data)
                    document.getElementById('Description_Label').innerHTML = description;
                    this.handleClose('true');
                })
                .catch(error => {
    
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        // console.log(error.response.data);
                        logout();
                        console.log(error.response.status);
                        // console.log(error.response.headers);
                        return error.response.status;
                    } else if (error.request) {
                        // The request was made but no response was received
                        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                        // http.ClientRequest in node.js
                        console.log(error.request);
                        return error.request;
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        
                        console.log('Error', error.message);
                        return error.message;
                    }
    
                });
    
    
                return res;
        }

        
    
    }

    handleChange = (event) => {
        // this.setState({html: event.target.value}, ()=> {  console.log(this.state.html); });
        // updateUserDescription(this.state.html);
    };

    // handleUpdateDescription = () => {
    //     var description = document.getElementById('descriptionContent').value;
    //     console.log("inputted");
    //     this.updateUserDescription(description);
    //     document.getElementById('Description_Label').innerHTML = description;
    //     this.handleClose('true');
    // }

    TriggerEdit = () => {
        this.handleChange('test');
    }
    
    state = {
        isOpen: false
      };
    
    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });
    
    handleClose(id) {
        this.setState({show: id});
    }

    handleShow(id) {
    this.setState({show: id});
    }

    componentDidMount(){
        Promise.all([getUserProfile()])
        .then(function (results) {
            console.log('description');
            console.log(results[0]['description']);
            var set_description = document.getElementById('Description_Label');
            set_description.innerHTML = (results[0]['description'] == null) ? '' : results[0]['description'];
            
        });
    }
    
      
    render() { 
        return (
                <div className="col-md-12 col-sm-12 text-align-center">
                    <br/>
                    <div className="row">
                        <div className="col-md-12">
                            <h6 className="text-muted">Edit Description<span className="badge badge-secondary bg-primary-custom px-2 m-1" onClick={() => this.handleShow('description')}>update</span></h6>
                            {/* <Label html={this.state.html} onChange={this.handleChange} /> */}
                            <label id="Description_Label"></label>
                        </div>
                        
                        <div className="col-md-12">
                            <h6 className="text-muted">Manage your interests
                            <Button className="btn btn-sm" variant="btn btn-sm" onClick={() => this.handleShow('interest')}>
                            <i className="fa fa-plus"></i>
                            </Button>
                            </h6>
                            <span className="badge badge-secondary px-2 m-1">Web development</span>
                            <span className="badge badge-secondary px-2 m-1">Javascript</span>
                            <span className="badge badge-secondary px-2 m-1">Photo Editing</span>
                        </div>

                        <Modal show={this.state.show == 'interest'} onHide={() => this.handleClose('false')}>
                            <Modal.Header closeButton>
                                <Modal.Title>ADD SKILLS OR INTEREST</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <Select options={options} />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => this.handleClose('false')}>
                                Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <Modal show={this.state.show == 'description'} onHide={() => this.handleClose('false')}>
                            <Modal.Header closeButton>
                                <Modal.Title>EDIT DESCRIPTION</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                
                            <div className="col-md-12">
                                <label>Description</label>
                                <div className="input-group mb-3">
                                <textarea id="descriptionContent" className="form-control" rows="3"></textarea>
                                    <div className="input-group-append">
                                        <button className="btn btn-primary-custom" type="button" onClick={this.handleUpdateDescription}>Update</button>
                                    </div>
                                </div>
                            </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => this.handleClose('false')}>
                                Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                    
                </div>
        );
    }
    

}
 