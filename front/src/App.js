import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import AuthService from './components/auth/AuthService';
import Profile from './components/contents/Profile'
import InvitationMail from './components/contents/InvitationMail';
import BasicCalendar from './components/contents/BasicCalendar';
import Events from './components/events/Events';
import Child from './components/childs/Child';
import ChildList from './components/childs/ChildList'
import ChildProfile from "./components/childs/ChildProfile"
// import Couple from '/components/couples/Couple';

class App extends Component {

  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  getTheUser= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  logout = () => {
    this.service.logout()
    .then(() => {
      this.setState({ loggedInUser: null });
    })
  }

  fetchUser(){
    if( this.state.loggedInUser === null ){
      this.service.loggedin()
      .then(response =>{
        this.setState({
          loggedInUser:  response
        }) 
      })
      .catch( err =>{
        this.setState({
          loggedInUser:  false
        }) 
      })
    }
  }

  render() {
    this.fetchUser()

    if(this.state.loggedInUser){
      return (
        <div className="App">

          <header className="App-header">
            <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
          </header>
          

          <div>
            <Switch>
               <Route exact path='/calendar/create' render={() => <InvitationMail userInSession={this.state.loggedInUser} getUser={this.getTheUser}/>}/>
               <Route exact path='/child/create' render={() => <Child userInSession={this.state.loggedInUser}/>}/>
               <Route exact path='/profile' render={() => <Profile userInSession={this.state.loggedInUser}/>}/>
               <Route exact path='/calendar' render={() => <BasicCalendar userInSession={this.state.loggedInUser}/>}/>
               <Route exact path='/events/create' render={() => <Events userInSession={this.state.loggedInUser}/>}/>
               <Route exact path='/child/list' render={() => <ChildList userInSession={this.state.loggedInUser}/>}/>
               <Route exact path='/child/:id' render={({match}) => <ChildProfile params={match.params} userInSession={this.state.loggedInUser}/>}/>

            </Switch>
          </div>

         

        </div>
      );
    }  else {
      const bodyStyle = {
        backgroundImage: `url(${"https://res.cloudinary.com/dtonq7ehf/image/upload/v1539943279/famcall/portada_famcall.jpg"})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '-140px',
    }
      const titleStyle = {
        paddingTop: '30px'
      }
      return (
        <div className="App">
          <header className="App-header">
            <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
            <Switch>
              <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/>
              <Route exact path='/login' render={() => <Login getUser={this.getTheUser}/>}/>
            </Switch>
          </header>
          <body style={bodyStyle}>
         
          <p className="title is-1" style={titleStyle}>FamCall</p>

          </body>



        </div>
      );
    }
  }
}

export default App;