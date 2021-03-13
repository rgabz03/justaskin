import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Footer extends Component {

    constructor() {
        super();
        this.state = {
        showFooterMenu: (window.location.pathname.match("message/view")) ? true: false
        };
    }

    render() { 

        return ( 
            <div id="footer-menu" className="fixed-bottom bg-white" style={{ display: this.state.showFooterMenu ? "none" : "block" }}>
                <div className="container-fluid border-top p-3">
                    <center>
                        <div className="d-flex bd-highlight">
                            <div className="p-2 flex-fill bd-highlight"><Link to="/home" className="link-primary"><i className="fa fa-home fa-2x"></i></Link></div>
                            <div className="p-2 flex-fill bd-highlight"><Link to="/search" className="link-primary"><i className="fa fa-search fa-2x"></i></Link></div>
                            <div className="p-2 flex-fill bd-highlight"><Link to="/message" className="link-primary"><i className="fa fa-send-o fa-2x"></i></Link></div>
                            <div className="p-2 flex-fill bd-highlight"><Link to="/profile" className="link-primary"><i className="fa fa-user fa-2x"></i></Link></div>
                        </div>
                    </center>
                </div>
            </div>
        );
    }
}
 