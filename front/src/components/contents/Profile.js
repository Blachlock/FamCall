import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
  render() {
    return (

      <div className="tabs">
        <ul>
          <li><Link to='/calendar/create'>Crear Pareja:</Link></li>
          <li><Link to='/child/list'>Hijos:</Link></li>
          <li><Link to='/child/create'>Añadir hijo:</Link></li>
        </ul>
      </div>

    );
  }
}

export default Profile;