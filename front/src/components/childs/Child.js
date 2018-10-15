import React, { Component } from 'react';
import ChildService from './ChildService';

class Child extends Component {
  constructor(props){
    super(props);
    this.state = { 
      name:'',
      birthday:''
    };
    this.service = new ChildService();
  }

  handleFormSubmit = (pepe) => {
    pepe.preventDefault();
    const name = this.state.name;
    const birthday = this.state.birthday;

    this.service.postChild(name, birthday)
    .then( response => {
      console.log(response);
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
        <h3>Añade un hijo a tu cuenta:</h3>

        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <label>Nombre de niño:</label>
            <input type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>
          </fieldset>
          
          <fieldset>
            <label>Fecha de nacimiento:</label>
            <input type="date" name="birthday" value={this.state.birthday} onChange={ e => this.handleChange(e)} />
          </fieldset>

          <button  onClick={this.handleFormSubmit} type="submit" value="submit">
            Submit
          </button>
        </form>

      </div>
    )
  }
}

export default Child;
