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

export default class ProfileAboutTab extends Component {
    

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: null,
            html : ( getUserProfile() !== 'undefined' ) ? getUserProfile().description : '' ,
            selectOptions : [],
            userInterest : [],
            value:[]
            // id: "",
            // name: ''
        };
    }


    async getOptions(){
        const res = await axios.get("/skills",axiosConfig)
        const data = res.data.data

        const options = data.map(d => ({
            "value" : d.id,
            "label" : d.name
        }))
        this.setState({selectOptions: options})

    }

    async getUserInterest(){
        var user_session    = getCurrentUser();

        if(user_session != null) {
            var user_id         = user_session.user_data.id;
            const res = await axios.get("/users/"+user_id+"/skills",axiosConfig)
            const data = res.data.data

            const options = data.map(d => ({
                "value" : d.id,
                "label" : d.name
            }))
            this.setState({userInterest: options})
        }

    }

    handleSelectionChange(e){
        this.setState({value:e})
    }


    handleUpdateDescription = async() =>{
    
        var user_session    = getCurrentUser();
        var description     = document.getElementById('descriptionContent').value;
    
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
                        // return error.response.status;
                    } else if (error.request) {
                        // The request was made but no response was received
                        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                        // http.ClientRequest in node.js
                        console.log(error.request);
                        // return error.request;
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        
                        console.log('Error', error.message);
                        // return error.message;
                    }
    
                });
                // return res;
        }

        
    
    }



    handleUpdateProfession = async() =>{
    
        var user_session    = getCurrentUser();
        var profession     = document.getElementById('professionContent').value;

        if(user_session != null) {
            var user_id         = user_session.user_data.id;
            var access_token    = user_session.access.access_token;
            var profession      = profession;
    
            let res = await axios.put("/users/"+user_id+"/update/profession", { profession },{
                    headers : {
                        'Authorization': `bearer ${access_token}`,
                        'Accept' : 'application/json',
                        'Content-Type' : 'application/json',
                    }
                })
                .then(response => {
                    // console.log(response.data.data)
                    document.getElementById('Profession_Label').innerHTML = profession;
                    document.getElementById('user-job-title').innerHTML = profession;

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
                        // return error.response.status;
                    } else if (error.request) {
                        // The request was made but no response was received
                        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                        // http.ClientRequest in node.js
                        console.log(error.request);
                        // return error.request;
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        
                        console.log('Error', error.message);
                        // return error.message;
                    }
    
                });
                // return res;
        }

        
    
    }

    handleSubmitSkillsInterest = async(event) => {
        
        var user_session    = getCurrentUser();

        if(user_session != null) {
            var user_id         = user_session.user_data.id;
            var interest        = this.state.value;


            if(interest.length <= 0){
                event.preventDefault();
            }
    
            let res = await axios.put("/users/"+user_id+"/skills/update", { interest },axiosConfig)
                .then(response => {
                    this.handleClose('true');
                    window.location.reload(false);
                })
                .catch(error => {
    
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        // console.log(error.response.data);
                        logout();
                        console.log(error.response.status);
                        // console.log(error.response.headers);
                        // return error.response.status;
                    } else if (error.request) {
                        // The request was made but no response was received
                        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                        // http.ClientRequest in node.js
                        console.log(error.request);
                        // return error.request;
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        
                        console.log('Error', error.message);
                        // return error.message;
                    }
    
                });
                // return res;
                event.preventDefault();
        }

    }


    handleDeleteInterest = async(id, interest) => {

        var user_session    = getCurrentUser();

        if(user_session != null) {
            var user_id         = user_session.user_data.id;

            if( id == ''){
                alert("Not Allowed");
                return false;
            }

            var answer = window.confirm("Do you want to delete "+interest+"?");

            if(answer){

                let res = await axios.delete("/users/"+user_id+"/skills/"+id+"/delete", axiosConfig)
                    .then(response => {
                        window.location.reload(false);
                    })
                    .catch(error => {
        
                        if (error.response) {
                            // The request was made and the server responded with a status code
                            // that falls out of the range of 2xx
                            // console.log(error.response.data);
                            logout();
                            console.log(error.response.status);
                            // console.log(error.response.headers);
                            // return error.response.status;
                        } else if (error.request) {
                            // The request was made but no response was received
                            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                            // http.ClientRequest in node.js
                            console.log(error.request);
                            // return error.request;
                        } else {
                            // Something happened in setting up the request that triggered an Error
                            
                            console.log('Error', error.message);
                            // return error.message;
                        }
        
                    });
                    
                    return false;
            }else{
                return false;   
            }

        }
    }

    

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
            var set_profession = document.getElementById('Profession_Label');
            set_description.innerHTML = (results[0]['description'] == null) ? '' : results[0]['description'];
            set_profession.innerHTML = (results[0]['job'] == null) ? '' : results[0]['job'];
        });

        this.getOptions();
        this.getUserInterest();
    }
    
      
    render() { 
        console.log(this.state.value);
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
                            <h6 className="text-muted">Edit Profession<span className="badge badge-secondary bg-primary-custom px-2 m-1" onClick={() => this.handleShow('profession')}>update</span></h6>
                            {/* <Label html={this.state.html} onChange={this.handleChange} /> */}
                            <label id="Profession_Label"></label>
                        </div>
                        
                        <div className="col-md-12">
                            <h6 className="text-muted">Manage your interest
                            <Button className="btn btn-sm" variant="btn btn-sm" onClick={() => this.handleShow('interest')}>
                            <i className="fa fa-plus"></i>
                            </Button>
                            </h6>
                            {this.state.userInterest.map(d => (<span className="badge badge-secondary px-2 m-1" key={d.value}>{d.label} <i className="fa fa-times-circle" onClick={() => this.handleDeleteInterest(d.value, d.label)}></i></span>))} 

                            {/* <span className="badge badge-secondary px-2 m-1">Web development</span>
                            <span className="badge badge-secondary px-2 m-1">Javascript</span>
                            <span className="badge badge-secondary px-2 m-1">Photo Editing</span> */}
                        </div>

                        <Modal show={this.state.show == 'interest'} onHide={() => this.handleClose('false')}>
                            {/* <form onSubmit={}> */}
                            <Modal.Header closeButton>
                                <Modal.Title>ADD SKILLS OR INTEREST</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            {/* <Select options={this.state.selectOptions} onChange={this.handleSelectionChange.bind(this)} /> */}
                            <div  className="col-md-12">
                            <Select options={this.state.selectOptions} onChange={this.handleSelectionChange.bind(this)} required isMulti />
                            </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={this.handleSubmitSkillsInterest}>
                                Update
                                </Button>
                                <Button variant="secondary" onClick={() => this.handleClose('false')}>
                                Close
                                </Button>
                            </Modal.Footer>
                            {/* </form> */}
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

                        <Modal show={this.state.show == 'profession'} onHide={() => this.handleClose('false')}>
                            <Modal.Header closeButton>
                                <Modal.Title>EDIT PROFESSION</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                
                            <div className="col-md-12">
                                <label>Profession</label>
                                <div className="input-group mb-3">
                                <textarea id="professionContent" className="form-control" rows="3"></textarea>
                                    <div className="input-group-append">
                                        <button className="btn btn-primary-custom" type="button" onClick={this.handleUpdateProfession}>Update</button>
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
 