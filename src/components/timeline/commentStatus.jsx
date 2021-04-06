import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class comments extends Component {
    render() { 
        return ( 
            <div className="row">
                <div className="container">
                    <Link to="timeline/questions/view/1"><span className="sm-font-size text-muted">See all 73 comments</span></Link>
                </div>
            </div>
        );
    }
}
 