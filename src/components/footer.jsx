import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Footer extends Component {
    render() { 
        return ( 
            <div className="fixed-bottom bg-white">
                <div className="container-fluid border-top p-3">
                    <center>
                        <div class="d-flex bd-highlight">
                            <div class="p-2 flex-fill bd-highlight"><Link to="/home" className="link-primary"><i className="fa fa-home fa-2x"></i></Link></div>
                            <div class="p-2 flex-fill bd-highlight"><Link to="/search" className="link-primary"><i className="fa fa-search fa-2x"></i></Link></div>
                            <div class="p-2 flex-fill bd-highlight"><Link to="/message" className="link-primary"><i className="fa fa-send-o fa-2x"></i></Link></div>
                            <div class="p-2 flex-fill bd-highlight"><Link to="/profile" className="link-primary"><i className="fa fa-user fa-2x"></i></Link></div>
                        </div>
                    </center>
                </div>
            </div>
        );
    }
}
 