import React, { Component } from 'react';
import EventService from './EventService';
import axios from 'axios'
import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';

class Event extends Component {
  constructor(props){
    super(props);
    this.state = { 
      startDate:'', 
      endDate:'', 
      startTime:'', 
      endTime:'', 
      title:'', 
      description:'', 
      user: props.userInSession._id, 
      child:'',
      children: null
    };
    this.service = new EventService();
  }

  componentWillMount(){
    this.getChildren()
  }

  getChildren = () => {
    let url = `http://localhost:4000/couple/getCouple`
    axios.get(url, {withCredentials: true})
    .then(res => {console.log(res.data.child); this.setState({children: res.data.child})},() => {
    })
    .catch(e => console.log(e))
  }
    
  handleFormSubmit = (pepe) => {
    pepe.preventDefault();
    const startDate = this.state.startDate;
    const endDate = this.state.endDate;
    const startTime = this.state.startTime;
    const endTime = this.state.endTime;
    const title = this.state.title;
    const description = this.state.description;
    const user = this.state.user;
    const child= this.state.child;

    this.service.postEvent(startDate, endDate, startTime, endTime, title, description, user, child)
    .then( response => {
      console.log(response)
        this.setState({
            startDate: "", 
            endDate: "",
            startTime: "",
            endTime: "",
            title: "",
            description: "",
            user:"",
            child: "",
        });
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    this.setState({[event.name]: event.value});
  }


  render() {
    return(
      <div>
       
        <h3>Crea tu recordatorio:</h3>

        <form onSubmit={this.handleFormSubmit}>
          
          {/* <Select 
          closeMenuOnSelect={false} 
          components={makeAnimated()} 
          isMulti 
          onChange={ e =>  this.handleChange(e.target)} 
          options={this.state.children}/> */}
          
          <fieldset>
          <label>Evento para el niño:</label>  
          <select name="child" className="select-multiple" onChange={ e =>  this.handleChange(e.target)}>
            {this.state.children ? this.state.children.map((e, i) => {
              return(
                <option type="text" key={i} name="child" value={e._id}>{e.name}</option>
                )
              }) : ""}
          </select>
          </fieldset>

          <fieldset>
            <label>Fecha inicio:</label>
            <input type="date" name="startDate" value={this.state.startDate} onChange={ e => this.handleChange(e.target)}/>
          </fieldset>
          
          <fieldset>
            <label>Fecha final:</label>
            <input type="date" name="endDate" value={this.state.endDate} onChange={ e => this.handleChange(e.target)} />
          </fieldset>

          <fieldset>
            <label>Hora inicio:</label>
            <input type="time" name="startTime" value={this.state.startTime} onChange={ e => this.handleChange(e.target)} />
          </fieldset>

          <fieldset>
            <label>Hora final:</label>
            <input type="time" name="endTime" value={this.state.endTime} onChange={ e => this.handleChange(e.target)} />
          </fieldset>

          <fieldset>
            <label>Título:</label>
            <input type="text" name="title" value={this.state.title} onChange={ e => this.handleChange(e.target)} />
          </fieldset>

          <fieldset>
            <label>Descripción:</label>
            <input type="text" name="description" value={this.state.description} onChange={ e => this.handleChange(e.target)} />
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