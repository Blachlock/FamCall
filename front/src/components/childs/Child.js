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
    const btnsStyle = {
      display: 'flex',
    justifyContent: 'center'
    }
    return(
      <div>
        <h1>Añade un hijo a tu cuenta:</h1>

        <form onSubmit={this.handleFormSubmit}>

          <div className="field is-horizontal">
            <div className="field-label is-small">
              <label className="label">Nombre del niño:</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input className="input is-small" type="text" placeholder="Fulanito" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>
                </div>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-small">
              <label className="label">Fecha de nacimiento:</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input className="input is-small" type="date" placeholder="01/01/2000" name="birthday" value={this.state.birthday} onChange={ e => this.handleChange(e)}/>
                </div>
              </div>
            </div>
          </div>

          <div className="field is-grouped" style={btnsStyle}>
            <p className="control">
              <a className="button is-link" onClick={this.handleFormSubmit} type="submit" value="submit">
                Guardar
              </a>
            </p>
            <p className="control">
                <Link className="button" to='/profile'>Cancelar</Link>
            </p>
          </div>

        </form>

      </div>
    )
  }
}

export default Child;
