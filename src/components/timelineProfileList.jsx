import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Slider from "react-slick";
import { Tab, Tabs, Modal, Button } from 'react-bootstrap';
import { login, logout, getCurrentUser, getUserProfile, updateUserDescription } from '../custom/userFunctions';
import axios from "axios";

let axiosConfig = {
    headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        'Authorization' : ( getCurrentUser() ) ? "bearer "+getCurrentUser().access.access_token+"" : "",
        'Access-Control-Allow-Origin': '*'
    },
  };


export default class timelineProfileList extends Component {

      constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

  
        this.state = {
            followedList:[],
            display: true,
            width: 650,
            show: null,
        };
    }

    async getFollowedUserList(){
        var user_session    = getCurrentUser(); 

        if(user_session != null) {
            var user_id         = user_session.user_data.id;
            
            const res = await axios.get("/users/"+user_id+"/following",axiosConfig)
            const data = res.data.data;

            const options = data.map(d => ({
                "follower_name"     : d.follower_name,
                "picture_path"      : d.picture_path,
                "follower_id"       : d.follower_id,
                "id"       : d.id,
            }));
            this.setState({followedList: options});
            
        
        }

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
            var set_name = document.getElementById('UserName');
            set_name.innerHTML = (results[0]['first_name'] == null) ? '' : results[0]['first_name']+" "+results[0]['last_name'];
            
        });

        this.getFollowedUserList();
    }

    render() { 

        const settings = {
            // dots: true,
            // infinite: true,
            // speed: 500,
            // slidesToShow: 3,
            // slidesToScroll: 1

            // dots: true,
            // lazyLoad: true,
            // infinite: true,
            // speed: 500,
            // slidesToShow: 1,
            // slidesToScroll: 1,
            // initialSlide: 2

            className: "col-6",
            dots: false,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            adaptiveHeight: true,
            initialSlide: 2,
            width : 120
            
          };
        return ( 
            <div className="fixed-top bg-white">
                <div className="container-fluid border-top padding-top-10">
                        <div className="row text-center border-bottom shadow-sm">


                            <div className="col-4 mb-4 border-right float-left">
                            <img className="img-thumbnail rounded-circle timeline-profile-list" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                                data-holder-rendered="true"/>
                                <p id="UserName">Your Name</p>
                            </div>
                            <div className="col-8 mb-4 float-right">

                                <div
                                style={{
                                    width: this.state.width + "px",
                                    display: this.state.display ? "block" : "none"
                                }}
                                >
                                    <Slider {...settings}>
                                    {this.state.followedList.map(d => (
                                        <div>
                                            <center>
                                            <img className="img-thumbnail rounded-circle timeline-profile-list-slider" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                                                data-holder-rendered="true"/>
                                            <p>{d.follower_name}</p>
                                            </center>
                                        </div>
                                    ))}
                                    
                                    {/* <div>
                                        <center>
                                        <img className="img-thumbnail rounded-circle timeline-profile-list-slider" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                                            data-holder-rendered="true"/>
                                        <p>Friend Name 1</p>
                                        </center>
                                    </div> */}
                                    {/* <div>
                                        <center>
                                        <img className="img-thumbnail rounded-circle timeline-profile-list-slider" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                                            data-holder-rendered="true"/>
                                        <p>Friend Name 2</p>
                                        </center>
                                    </div> */}
                                    {/* <div className="hide"> 
                                        <center>
                                        <img className="img-thumbnail rounded-circle timeline-profile-list-slider" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                                            data-holder-rendered="true"/>
                                        <p>Friend Name 3</p>
                                        </center>
                                    </div> */}

                                    
                                    {/* <div>
                                        <center>
                                        <img className="img-thumbnail rounded-circle timeline-profile-list-slider" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                                            data-holder-rendered="true"/>
                                        <p>Friend Name 4</p>
                                        </center>
                                    </div> */}
                                        
                                    </Slider>
                                </div>
                            </div>



                            

                            {/* For lazy load
                            <div>
                                <img src={baseUrl + "/abstract01.jpg"} />
                            </div>
                            <div>
                                <img src={baseUrl + "/abstract02.jpg"} />
                            </div>
                            <div>
                                <img src={baseUrl + "/abstract03.jpg"} />
                            </div>
                            <div>
                                <img src={baseUrl + "/abstract04.jpg"} />
                            </div>
                            End */}

            
                            {/* <div className="col-4 mb-4">
                                <img className="img-thumbnail rounded-circle z-depth-2 timeline-profile-list" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                                data-holder-rendered="true"/>
                                <p>Friend Name</p>
                            </div>


                            
                            <div className="col-4 mb-4">
                                <img className="img-thumbnail rounded-circle z-depth-2 timeline-profile-list" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                                data-holder-rendered="true"/>
                                <p>Friend Name</p>
                            </div> */}

                            
                        </div>
                </div>
                

                <div className="container-fluid border-top padding-top-10">
                    <div className="">

                        <div className="row text-center border-bottom shadow-sm">
                            <div className="col-md-12">
                                {/* <form className="form-inline" role="form">            */}
                                        <div className="form-group">
                                            {/* <input type="email" className="form-control" id="postQuestion" aria-describedby="postQuestion" placeholder="What's your Question?" onChange={() => this.handleShow('postQuestion')} disabled/> */}
                                            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                            <button type="button" className="btn btn-light btn-outline-secondary btn-block"><span className="text-muted"  onClick={() => this.handleShow('postQuestion')}>Post your own Question</span></button>
                                        
                                        </div>
                                {/* </form> */}
                            </div>
                        </div>
                    </div>
                </div>

                        <Modal show={this.state.show == 'postQuestion'} onHide={() => this.handleClose('false')}>
                            <Modal.Header closeButton>
                                <Modal.Title></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                
                            <div className="col-md-12">
                                <div className="input-group mb-3">
                                <input id="postTitle" className="form-control" rows="3" type="text" placeholder="Your Question"/>
                                    {/* <div className="input-group-append">
                                        <button className="btn btn-primary-custom" type="button" onClick={this.handleUpdateDescription}>Update</button>
                                    </div> */}
                                </div>
                                <div className="input-group mb-3">
                                <textarea id="postContent" className="form-control" rows="3">Write your content here...</textarea>
                                    {/* <div className="input-group-append">
                                        <button className="btn btn-primary-custom" type="button" onClick={this.handleUpdateDescription}>Update</button>
                                    </div> */}
                                </div>
                                <div className="input-group mb-3">
                                <input type="file" id="postFile" className="form-control" rows="3" placeholder="upload videos/images"/>
                                    {/* <div className="input-group-append">
                                        <button className="btn btn-primary-custom" type="button" onClick={this.handleUpdateDescription}>Update</button>
                                    </div> */}
                                </div>
                            </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={() => this.handleClose('false')}>
                                Submit
                                </Button>
                                <Button variant="secondary" onClick={() => this.handleClose('false')}>
                                Close
                                </Button>
                            </Modal.Footer>
                        </Modal>

            </div>
        );
    }
}
 