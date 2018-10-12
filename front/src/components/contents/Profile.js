import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Calendars from './Calendars';

class Profile extends Component {
  render() {
    return (
      <div>
        <Link to='/calendar/create'>Crear calendario familiar</Link>
        <p>Contenido bla bla</p>
        
      </div>
    );
  }
}

export default Profile;