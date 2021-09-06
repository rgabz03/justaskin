import React, { Component, useState } from 'react';
import { Tab, Tabs, Modal, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Label from "../../../custom/label";
import Select from 'react-select';

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
            show: null
        };
    }
    
    handleChange = (event) => {
        this.setState({html: event.target.value}, ()=> {  console.log(this.state.html); });
    };

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
    
      
    render() { 
        
        return (
                <div className="col-md-12 col-sm-12 text-align-center">
                    <br/>
                    <div className="row">
                        <div className="col-md-12">
                            <h6 className="text-muted">Edit Description<span className="badge badge-secondary bg-primary-custom px-2 m-1" onClick={() => this.handleShow('description')}>update</span></h6>
                            <Label html={this.state.html} onChange={this.handleChange} />
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
                                <textarea className="form-control" id="description" rows="3"></textarea>
                                    <div className="input-group-append">
                                        <button className="btn btn-primary-custom" type="button">Update</button>
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
 