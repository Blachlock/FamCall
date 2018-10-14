import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
  render() {
    return (
      <div>
        <Link to='/calendar/create'>Crear calendario familiar</Link>
        <p>Contenido bla bla</p>
        <Link to='/events/create'>Crear Evento</Link><br></br>
        <Link to='/child/create'>Crear niño</Link>
      </div>
    );
  }
}

export default Profile;