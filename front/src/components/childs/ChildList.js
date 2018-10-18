import React, { Component } from 'react';
import ChildService from './ChildService';
import { Link } from 'react-router-dom';


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

          <div class="field is-horizontal">
            <div class="field-label is-small">
              <label class="label">Nombre del niño:</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input class="input is-small" type="text" placeholder="Fulanito" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>
                </div>
              </div>
            </div>
          </div>




          {/* <fieldset>
            <label>Nombre de niño:</label>
            <input type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>
          </fieldset>
          
          <fieldset>
            <label>Fecha de nacimiento:</label>
            <input type="date" name="birthday" value={this.state.birthday} onChange={ e => this.handleChange(e)} />
          </fieldset> */}

          <div class="field is-grouped">
            <p class="control">
              <a class="button is-link" onClick={this.handleFormSubmit} type="submit" value="submit">
                Save changes
              </a>
            </p>
            <p class="control">
                <Link class="button" to='/profile'>Cancelar</Link>
            </p>
          </div>

        </form>

      </div>
    )
  }
}

export default Child;
