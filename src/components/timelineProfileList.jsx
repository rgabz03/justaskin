import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Slider from "react-slick";
import { login, logout, getCurrentUser, getUserProfile, updateUserDescription } from '../custom/userFunctions';


export default class timelineProfileList extends Component {

    state = {
        display: true,
        width: 650,
      };


    componentDidMount(){
        Promise.all([getUserProfile()])
        .then(function (results) {
            var set_name = document.getElementById('UserName');
            set_name.innerHTML = (results[0]['first_name'] == null) ? '' : results[0]['first_name']+" "+results[0]['last_name'];
            
        });
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
                                    <div>
                                        <center>
                                        <img className="img-thumbnail rounded-circle timeline-profile-list-slider" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                                            data-holder-rendered="true"/>
                                        <p>Friend Name 1</p>
                                        </center>
                                    </div>
                                    <div>
                                        <center>
                                        <img className="img-thumbnail rounded-circle timeline-profile-list-slider" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                                            data-holder-rendered="true"/>
                                        <p>Friend Name 2</p>
                                        </center>
                                    </div>
                                    <div>
                                        <center>
                                        <img className="img-thumbnail rounded-circle timeline-profile-list-slider" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                                            data-holder-rendered="true"/>
                                        <p>Friend Name 3</p>
                                        </center>
                                    </div>

                                    
                                    <div>
                                        <center>
                                        <img className="img-thumbnail rounded-circle timeline-profile-list-slider" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                                            data-holder-rendered="true"/>
                                        <p>Friend Name 4</p>
                                        </center>
                                    </div>
                                        
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
            </div>
        );
    }
}
 