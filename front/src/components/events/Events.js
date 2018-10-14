// auth/Signup.js
import React, { Component } from 'react';
import EventService from './EventService';

class Event extends Component {
  constructor(props){
    super(props);
    this.state = { startDate:'', endDate:'', startTime:'', endTime:'', title:'', description:'', comment:'' };
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
    const comment = this.state.comment;

    this.service.event(startDate, endDate, startTime, endTime, title, description, comment)
    .then( response => {
        this.setState({
            startDate: "", 
            endDate: "",
            startTime: "",
            endTime: "",
            title: "",
            description: "",
            comment: ""
        });
        this.props.getEvent(response.event)
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
          <fieldset>
            <label>Fecha inicio:</label>
            <input type="text" name="startDate" value={this.state.startDate} onChange={ e => this.handleChange(e)}/>
          </fieldset>
          
          <fieldset>
            <label>Fecha final:</label>
            <input type="endDate" name="endDate" value={this.state.endDate} onChange={ e => this.handleChange(e)} />
          </fieldset>

          <fieldset>
            <label>Hora inicio:</label>
            <input type="startTime" name="startTime" value={this.state.startTime} onChange={ e => this.handleChange(e)} />
          </fieldset>

          <fieldset>
            <label>Hora final:</label>
            <input type="endTime" name="endTime" value={this.state.endTime} onChange={ e => this.handleChange(e)} />
          </fieldset>

          <fieldset>
            <label>Título:</label>
            <input type="title" name="title" value={this.state.title} onChange={ e => this.handleChange(e)} />
          </fieldset>

          <fieldset>
            <label>Descripción:</label>
            <input type="description" name="description" value={this.state.description} onChange={ e => this.handleChange(e)} />
          </fieldset>

          <fieldset>
            <label>Comentarios:</label>
            <input type="comment" name="comment" value={this.state.comment} onChange={ e => this.handleChange(e)} />
          </fieldset>

          <button  onClick= {this.handleFormSubmit.bind(this)} type="submit" value="submit">
            Submit
          </button>
          
        </form>

      </div>
    )
  }
}

export default Event;