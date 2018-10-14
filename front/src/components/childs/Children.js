import React, { Component } from 'react';
import axios from 'axios';

class Child extends Component {
  constructor(props){
    super(props);
    this.state = { 
      name:'',
      birthday:''
    };
    this.connection = axios.create({
      baseURL: 'http://localhost:3001/child',
      withCredentials: true
    })
  }
    
  // child = (name, birthday) => {
  //   return this.service.post('/child', {name, birthday})
  //   .then(response => response.data)
  //   console.log(name);
  // }

  handleFormSubmit = (pepe) => {
    pepe.preventDefault();
    const name = this.state.name;
    const birthday = this.state.birthday;

    this.connection.post('/', {name, birthday})
    .then( response => {
        this.setState({
            name: "", 
            birthday: ""
        });
    })
    .catch( error => console.log(error) )
  }

  handleChange = (pepe) => {  
    const {name, value} = pepe.target;
    this.setState({[name]: value});
  }
  render() {
    return(
      <div>
        <h3>Crea tu cuenta con nosotros:</h3>

        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <label>Nombre de niño:</label>
            <input type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>
          </fieldset>
          
          <fieldset>
            <label>Fecha de nacimiento:</label>
            <input type="birthday" name="birthday" value={this.state.birthday} onChange={ e => this.handleChange(e)} />
          </fieldset>

          <input type="submit" value="Sign up" />
        </form>

      </div>
    )
  }
}

export default Child;
