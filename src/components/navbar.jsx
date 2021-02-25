import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-light bg-light justify-content-between">
            <a className="navbar-brand">Navbar</a>
                <form className="form-inline">
                    <input type="search" className="form-control mr-sm-2" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        );
    }
}
 
export default NavBar;