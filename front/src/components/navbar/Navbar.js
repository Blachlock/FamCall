// navbar/Navbar.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/AuthService';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] })
  }

  handleLogout = (e) => {
    this.props.logout()
  }

  render() {
    if (this.state.loggedInUser) {
      return (
        <nav className="nav-style">
          <ul>
            <li><Link to="/profile" >My Profile</Link></li>
            <li><Link to="/calendar">My Calendar</Link></li>
            <li><a className="button is-link is-active is-small" onClick={this.handleLogout}>Cerrar sesión</a></li>
          </ul>

          <h2>Bienvenid@, {this.state.loggedInUser.username}</h2>
        </nav>
      )
    } else {
      return (
        <div>
          <nav className="nav-style">
            <ul>
            <li><Link to='/signup'>Registrarse</Link></li>
            <li><Link to='/login'>Iniciar sesión</Link></li>
            </ul>
          </nav>
        </div>
      )
    }
  }
}

export default Navbar;