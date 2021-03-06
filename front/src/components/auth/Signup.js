// auth/Signup.js
import React, { Component } from 'react';
import AuthService from './AuthService'
import 'bulma/css/bulma.css';

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

        <div class="field">
            <label class="label">Nombre de usuario</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input is-success" type="text" placeholder="Text input" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </div>
            <p class="help is-success">This username is available</p>
          </div>

          <div class="field">
            <label class="label">Nombre real</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>
            </div>
          </div>

          <div class="field">
            <p class="control has-icons-left">
              <input class="input" type="password" placeholder="Password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)}/>
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input is-danger" type="email" placeholder="Email input" value="hello@" name="email" value={this.state.email} onChange={ e => this.handleChange(e)}/>
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p class="help is-danger">This email is invalid</p>
          </div>

          <div class="field">
            <label class="label">Teléfono</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" name="phone" value={this.state.phone} onChange={ e => this.handleChange(e)}/>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox"/>
                I agree to the <a href="#">terms and conditions</a>
              </label>
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link">Submit</button>
            </div>
            <div class="control">
              <button class="button is-text">Cancel</button>
            </div>
          </div>


        </form>

      </div>
    )
  }
}

{/* <fieldset>
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
  <input type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e)} />
</fieldset>

<fieldset>
  <label>Teléfono:</label>
  <input type="number" name="phone" value={this.state.phone} onChange={ e => this.handleChange(e)} />
</fieldset>

<input type="submit" value="Sign up" /> */}


{/* 
 

  





 */}

export default Signup;