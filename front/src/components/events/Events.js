// auth/Signup.js
import React, { Component } from 'react';
import EventService from './EventService';

class Event extends Component {
  constructor(props){
    super(props);
    this.state = { startDate:'', endDate:'', startTime:'', endTime:'', title:'', description:'', user: props.userInSession._id, child:"", };
    this.service = new EventService();
  }
    
  handleFormSubmit = (event) => {
    event.preventDefault();
    const startDate = this.state.startDate;
    const endDate = this.state.endDate;
    const startTime = this.state.startTime;
    const endTime = this.state.endTime;
    const title = this.state.title;
    const description = this.state.description;
    const user = this.state.user;
    const child= this.state.child;
    console.log(user)

    this.service.postEvent(startDate, endDate, startTime, endTime, title, description, user)
    .then( response => {
      console.log(response)
        this.setState({
            startDate: "", 
            endDate: "",
            startTime: "",
            endTime: "",
            title: "",
            description: "",
            user,
            child
        });
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
        <h3>Crea tu recordatorio:</h3>

        <form onSubmit={this.handleFormSubmit}>
          {/* <fieldset>
            <label>Evento para el niño:</label>
            <input type="text" name="child" value={this.state.child} onChange={ e => this.handleChange(e)}/>
          </fieldset> */}

          <fieldset>
            <label>Fecha inicio:</label>
            <input type="date" name="startDate" value={this.state.startDate} onChange={ e => this.handleChange(e)}/>
          </fieldset>
          
          <fieldset>
            <label>Fecha final:</label>
            <input type="date" name="endDate" value={this.state.endDate} onChange={ e => this.handleChange(e)} />
          </fieldset>

          <fieldset>
            <label>Hora inicio:</label>
            <input type="time" name="startTime" value={this.state.startTime} onChange={ e => this.handleChange(e)} />
          </fieldset>

          <fieldset>
            <label>Hora final:</label>
            <input type="time" name="endTime" value={this.state.endTime} onChange={ e => this.handleChange(e)} />
          </fieldset>

          <fieldset>
            <label>Título:</label>
            <input type="text" name="title" value={this.state.title} onChange={ e => this.handleChange(e)} />
          </fieldset>

          <fieldset>
            <label>Descripción:</label>
            <input type="text" name="description" value={this.state.description} onChange={ e => this.handleChange(e)} />
          </fieldset>

          <button  onClick={this.handleFormSubmit} type="submit" value="submit">
            Submit
          </button>
          
        </form>

      </div>
    )
  }
}

export default Event;