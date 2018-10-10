// auth/Signup.js
import React, { Component } from 'react';
import AuthService from './AuthService'

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '', email: '', name: '', phone: '' };
    this.service = new AuthService();
  }
    
  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const email = this.state.email;
    const name = this.state.name;
    const phone = this.state.phone;

    this.service.signup(username, password, email, name, phone)
    .then( response => {
        this.setState({
            username: "", 
            password: "",
            email: "",
            name: "",
            phone: ""
        });
        this.props.getUser(response.user)
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
      

  render() {
    return(
      <div>
        <h3>Crea tu cuenta con nosotros:</h3>

        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <label>Nombre de usuario:</label>
            <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          </fieldset>
          
          <fieldset>
            <label>Contraseña:</label>
            <input type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          </fieldset>

          <fieldset>
            <label>Correo electrónico:</label>
            <input type="email" name="email" value={this.state.email} onChange={ e => this.handleChange(e)} />
          </fieldset>

          <fieldset>
            <label>Nombre:</label>
            <input type="name" name="name" value={this.state.name} onChange={ e => this.handleChange(e)} />
          </fieldset>

          <fieldset>
            <label>Teléfono:</label>
            <input type="phone" name="phone" value={this.state.phone} onChange={ e => this.handleChange(e)} />
          </fieldset>
          
          <input type="submit" value="Sign up" />
        </form>

      </div>
    )
  }
}

export default Signup;