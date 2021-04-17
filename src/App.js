import React, { Component, useEffect, useState } from 'react';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import LoginIndex from "./components/login/index";
import SignupIndex from "./components/signup/index";
import HomeIndex from "./components/home/index";
import MessageIndex from "./components/message/index";
import UserMessageView from "./components/message/view";
import SearchList from "./components/profile/search/list";
import ProfileIndex from "./components/profile/index";
import UserProfileView from "./components/profile/view";
import QuestionSessionIndex from "./components/question/sessionIndex";
import UserQuestionView from "./components/question/view";
import AskUserHelp from "./components/help/askUser";
import TimelineQuestionViewDetail from "./components/question/timelineQuestionView";
import { BrowserRouter as Router, Route, Link , useLocation} from "react-router-dom";
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {

  const search_box_element = document.getElementById('search-container');
  const footer_menu_element = document.getElementById('footer-menu');

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);
  
  // console.log(window.location.pathname);
  // console.log(offset); 

  if(window.location.pathname == '/search' && offset >= 1){ search_box_element.className = 'remove-fixed-top'; }
  if(window.location.pathname == '/search' && offset >= 80){ search_box_element.className = "fixed-top-custom"; }
  

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
            <Route path="/session/questions" exact component={SessionQuestions} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/forgotpassword" exact component={ForgotPassword} />
            <Route path="/toc"  component={TOC} />
            <Route path="/privacy"  component={PrivacyPolicy} />
            <Route path="/profile/view"  component={ProfileView} />
            <Route path="/message/view"  component={MessageView} />
            <Route path="/questions/view"  component={QuestionView} />
            <Route path="/timeline/questions/view"  component={TimelineQuestionView} />
            <Route path="/ask/user"  component={AskUserForHelp} />
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





const ProfileView = () => {

  return (
      <React.Fragment>
          <UserProfileView/>
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




const SessionQuestions = () => {

  return (
      <React.Fragment>
          <QuestionSessionIndex/>
          <div className="timeline-bottom-space"></div>
          <Footer/>
      </React.Fragment>
  );
}




const MessageView = () => {

  return (
      <React.Fragment>
          <UserMessageView/>
          <div className="timeline-bottom-space"></div>
          <Footer/>
      </React.Fragment>
  );
}



const QuestionView = () => {

  return (
      <React.Fragment>
          <UserQuestionView/>
          <div className="timeline-bottom-space"></div>
          <Footer/>
      </React.Fragment>
  );
}


const TimelineQuestionView = () => {

  return (
      <React.Fragment>
          <TimelineQuestionViewDetail/>
          <div className="timeline-bottom-space"></div>
          <Footer/>
      </React.Fragment>
  );
}



const AskUserForHelp = () => {

  return (
      <React.Fragment>
          <AskUserHelp/>
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
        <div className="col-md-12 col-sm-12">
            <div className="">
                <div className="row shadow-lg p-3 bg-white">
                    <div className="col-2">
                        <Link to="/" className="link-primary"><i className="fa fa-chevron-left fa-2x"></i></Link>
                    </div>
                    <div className="col-10"><span>Terms and Condtions</span></div>
                </div>
            </div>
        </div>
          <h1>Terms and Conditions</h1>
      </React.Fragment>
  );
}



const PrivacyPolicy = () => {

  return (
      <React.Fragment>
        <div className="col-md-12 col-sm-12">
            <div className="">
                <div className="row shadow-lg p-3 bg-white">
                    <div className="col-2">
                        <Link to="/signup" className="link-primary"><i className="fa fa-chevron-left fa-2x"></i></Link>
                    </div>
                    <div className="col-10"><span>Privacy Policy</span></div>
                </div>
            </div>
        </div>
          <h1>Privacy Policy</h1>
      </React.Fragment>
  );
}

export default App;
