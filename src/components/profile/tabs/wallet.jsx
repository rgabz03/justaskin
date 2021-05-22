import React, { Component, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { login, logout, getCurrentUser, getCoinBalance } from '../../../custom/userFunctions';
import axios from "axios";
 
// let coins = () => {
//     Promise.all([getCoinBalance()])
//     .then(function (results) {
//         return results[0];
//     });

// };


    
export default class ProfileSettingsTab extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            coins : []
        }
    }


    componentDidMount(){
        Promise.all([getCoinBalance()])
        .then(function (results) {
            console.log(results[0]['coin']);
            var coin_balance = document.getElementById('coin-balance');
            coin_balance.innerHTML = results[0]['coin'];
        });
    }
    
    render() { 

        // console.log(this.state.coins);

        return (
                <div className="col-md-12 col-sm-12">
                    <div className="row">
                        
                        <div className="col-md-12">
                            <br/>
                            <center>
                                <h1><b id="coin-balance"></b></h1>
                                <span className="sm-font-size text-muted">BALANCE</span>
                            </center>
                            <br/>
                            <div className="input-group mb-1">
                                <input type="number" className="form-control" placeholder="Input Coins" aria-label="Input Coins" aria-describedby="basic-addon2" required/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary-custom" type="button">REQUEST</button>
                                </div>
                            </div>
                        </div>
                        
                        {/* <div className="col-md-12">
                            <div className="input-group mb-3">
                                <Link to="https://www.google.com" className="btn btn-primary-custom">Become a verified Expert</Link>
                            </div>
                        </div> */}
                        
                    </div>
                </div>
        );
    }
    

}
 