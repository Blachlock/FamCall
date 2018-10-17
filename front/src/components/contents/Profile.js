import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
  render() {
    return (
      <div>
        <Link to='/calendar/create'>Crear Pareja:</Link>
        <Link to='/events/create'>Crear Evento:</Link><br></br>
        <Link to='/child/create'>Añadir hijo:</Link>
      </div>
    );
  }
}

export default Profile;