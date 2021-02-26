import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import LoginIndex from "./components/login/index";
import SignupIndex from "./components/signup/index";
import HomeIndex from "./components/home/index";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    
    <Router>
    <React.Fragment>
        {/* <Navbar/> */}
        <main className="container">
            <Route path="/" exact component={Login} />
            <Route path="/home" exact component={Home} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/search" exact component={Search} />
            <Route path="/message" exact component={Message} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/forgotpassword" exact component={ForgotPassword} />
            <Route path="/toc"  component={TOC} />
        </main>
    </React.Fragment>
    </Router>

  );

}


const Login = () => {

  return (
      <React.Fragment>
          <LoginIndex/>
      </React.Fragment>
  );
}



const Home = () => {

  return (
      <React.Fragment>
          <HomeIndex/>
          <Footer/>
      </React.Fragment>
  );
}



const Profile = () => {

  return (
      <React.Fragment>
          <h1>Profile</h1>
          <Footer/>
      </React.Fragment>
  );
}


const Message = () => {

  return (
      <React.Fragment>
          <h1>Message</h1>
          <Footer/>
      </React.Fragment>
  );
}



const Search = () => {

  return (
      <React.Fragment>
          <h1>Search</h1>
          <Footer/>
      </React.Fragment>
  );
}

const Signup = () => {

  return (
      <React.Fragment>
          <SignupIndex/>
      </React.Fragment>
  );
}


const ForgotPassword = () => {

  return (
      <React.Fragment>
          <h1>Forgot Password</h1>
      </React.Fragment>
  );
}

const TOC = () => {

  return (
      <React.Fragment>
          <h1>Terms and Conditions</h1>
      </React.Fragment>
  );
}

export default App;
