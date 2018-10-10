import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class CalCreate extends Component {
  render() {
    return (
      <div>
      <h3>Introduce los siguientes datos:</h3>
     
      <form onSubmit={this.handleFormSubmit}>
        <fieldset>
          <label>Nombre de tu ex-pareja:</label>
          <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
        </fieldset>
     
        <fieldset>
          <label>Correo electrónico:</label>
          <input type="email" name="email" value={this.state.email} onChange={ e => this.handleChange(e)} />
        </fieldset>
     
        <fieldset>
          <label>Teléfono:</label>
          <input type="phone" name="phone" value={this.state.phone} onChange={ e => this.handleChange(e)} />
        </fieldset>
        
        <input type="submit" value="Create" />
      </form>
     
     </div>
    );
  }
}

export default CalCreate;


