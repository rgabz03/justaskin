import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProfileSearchList  from "./listItem";
import { login, logout, getCurrentUser, getUserProfile, updateUserDescription } from '../../../custom/userFunctions';
import axios from "axios";

let axiosConfig = {
    headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        'Authorization' : ( getCurrentUser() ) ? "bearer "+getCurrentUser().access.access_token+"" : "",
        'Access-Control-Allow-Origin': '*'
    },
  };


export default class List extends Component {

    constructor(props, context) {
        super(props, context);
  
        this.state = {
            userList:[],
            searchKeyword : '',
            followed: '',
        };
    }
    

    async getUsersList(search = ''){
        var user_session    = getCurrentUser(); 

        if(user_session != null) {
            var user_id         = user_session.user_data.id;
            
            const res = await axios.get("/users/list?keyword="+search ,axiosConfig)
            const data = res.data.data;

            const options = data.map(d => ({
                "first_name"        : d.first_name,
                "title"             : d.job,
                "posts_count"       : d.posts_count,
                "followers_count"   : d.followers_count,
                "followed"          : d.followed,
                "id"                : d.id
            }));

            console.log(options);
            this.setState({userList: options});
        
        }

    }

    handleSearchChange = (event) => {
        var input_value = document.getElementById('searchKeyword').value;
        this.setState({
            searchKeyword: event.target.value
        });

        this.getUsersList(( input_value == '' ) ? '' : this.state.searchKeyword);

    }
    
    componentDidMount(){
        this.getUsersList();
    }


    render() { 
        
        return (
                <div className="col-md-12 col-sm-12 search-input-container">
                    <div id="search-container">
                        <div className="form-group has-search">
                            <span className="fa fa-search form-control-feedback"></span>
                            <input type="text" className="form-control" value={this.state.searchKeyword} onChange={evt => this.handleSearchChange(evt)} id="searchKeyword" placeholder="Search"/>
                        </div>
                    </div>

                    {this.state.userList.map(d => (
                        
                        <div className="justify-content-center">
                            <div className="card p-3">
                                <div className="d-flex align-items-center">
                                    <div className="image"> <Link to={"profile/view/"+d.id} className="text-secondary"><img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" className="rounded" width="155"/></Link> </div>
                                    <div className="ml-3 w-100">
                                        <h5 className="mb-0 mt-0">{d.first_name}</h5> <span>{ d.title }r</span>
                                        <div className="p-2 mt-2 bg-primary-custom d-flex justify-content-between rounded text-white stats">
                                            <div className="d-flex flex-column"> <span className="articles">Post</span> <span className="number1">{d.posts_count}</span> </div>
                                            <div className="d-flex flex-column"> <span className="followers">Followers</span> <span className="number2">{ d.followers_count }</span> </div>
                                        </div>
                                        <div className="button mt-2 d-flex flex-row align-items-center"> <Link to={"ask/user/" + d.id} className="btn btn-sm btn-outline-primary-custom w-100">Ask</Link> <button className="btn btn-sm btn-primary-custom w-100 ml-2"> { (d.followed) ? "Followed" : "Follow" }  </button> </div>
                                    </div>
                                </div>
                            </div>
                            <br/>
                        </div>
                        
                    ))} 

                    {/* <ProfileSearchList/>
                    <ProfileSearchList/>    

                    <ProfileSearchList/>
                    <ProfileSearchList/>                         */}

                        
                </div>
        );
    }

}
 