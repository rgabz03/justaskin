import React, { Component, useEffect, useState } from 'react';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import LoginIndex from "./components/login/index";
import SignupIndex from "./components/signup/index";
import HomeIndex from "./components/home/index";
import MessageIndex from "./components/message/index";
import SearchList from "./components/profile/search/list";
import ProfileIndex from "./components/profile/index";
import { BrowserRouter as Router, Route, Link , useLocation} from "react-router-dom";
import './App.css';


function App() {

  const search_box_element = document.getElementById('search-container');

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);
  // console.log(window.location.pathname);
  // console.log(offset); 


  if(window.location.pathname == '/search' && offset >= 1)
  { 
    search_box_element.className = 'remove-fixed-top';
  }
  if(window.location.pathname == '/search' && offset >= 80)
  {
    search_box_element.className = "fixed-top-custom";
  }


  return (
    
    <Router>
    <React.Fragment>
        {/* <Navbar/> */}
        <main className="">
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
          <div className="timeline-top-blank-space"></div>
          <HomeIndex/>
          <div className="timeline-bottom-space"></div>
          <Footer/>
      </React.Fragment>
  );
}



const Profile = () => {

  return (
      <React.Fragment>
          <ProfileIndex/>
          <div className="timeline-bottom-space"></div>
          <Footer/>
      </React.Fragment>
  );
}


const Message = () => {

  return (
      <React.Fragment>
          <MessageIndex/>
          <div className="timeline-bottom-space"></div>
          <Footer/>
      </React.Fragment>
  );
}



const Search = () => {

  return (
      <React.Fragment>
          <SearchList/>
          <div className="timeline-bottom-space"></div>
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
