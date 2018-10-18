import React, { Component } from 'react';
import EventService from './EventService';
import axios from 'axios'
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.css';



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
    let url = `${process.env.REACT_APP_API_URL}/couple/getCouple`
    axios.get(url, {withCredentials: true})
    .then(res =>  this.setState({children: res.data.child}),() => {
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
          
         
          

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Department</label>
            </div>
            <div class="field-body">
              <div class="field is-narrow">
                <div class="control">
                  <div class="select is-fullwidth">
                    <select name="child" className="select-multiple" onChange={ e =>  this.handleChange(e.target)}>
                    {this.state.children ? this.state.children.map((e, i) => {
                      return(
                        <option type="text" key={i} name="child" value={e._id}>{e.name}</option>
                        )
                      }) : ""}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="field is-horizontal">
            <div className="field-label is-small">
              <label className="label">Fecha inicio del recordatorio:</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input className="input is-small" type="date" name="startDate" value={this.state.startDate} onChange={ e => this.handleChange(e.target)}/>
                </div>
              </div>
            </div>
          </div>
              
          <div className="field is-horizontal">
            <div className="field-label is-small">
              <label className="label">Fecha final del recordatorio:</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input className="input is-small" type="date" name="endDate" value={this.state.endDate} onChange={ e => this.handleChange(e.target)}/>
                </div>
              </div>
            </div>
          </div>  

          <div className="field is-horizontal">
            <div className="field-label is-small">
              <label className="label">Hora inicio del recordatorio:</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input className="input is-small" type="time" name="startTime" value={this.state.startTime} onChange={ e => this.handleChange(e.target)}/>
                </div>
              </div>
            </div>
          </div>      

          <div className="field is-horizontal">
            <div className="field-label is-small">
              <label className="label">Hora final del recordatorio:</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input className="input is-small" type="time" name="endTime" value={this.state.endTime} onChange={ e => this.handleChange(e.target)}/>
                </div>
              </div>
            </div>
          </div>     

          <div className="field is-horizontal">
            <div className="field-label is-small">
              <label className="label">Título:</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input className="input is-small" type="text" placeholder="Fulanito" name="title" value={this.state.title} onChange={ e => this.handleChange(e.target)}/>
                </div>
              </div>
            </div>
          </div>     

         <div className="field is-horizontal">
            <div className="field-label is-small">
              <label className="label">Descripción:</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                 <textarea class="textarea" placeholder="Introduce aquí los detalles de tu recordatorio" name="description" value={this.state.description} onChange={ e => this.handleChange(e.target)}/>
                  {/* <input className="input is-small" type="text" placeholder="Introduce una descripción" name="description" value={this.state.description} onChange={ e => this.handleChange(e)}/> */}
                </div>
              </div>
            </div>
          </div>

          

          <div className="field is-grouped">
            <p className="control">
              <a className="button is-link" onClick={this.handleFormSubmit} type="submit" value="submit">Guardar</a>
            </p>
            <p className="control">
                <Link className="button" to='/calendar'>Cancelar</Link>
            </p>
          </div>
          
        </form>

      </div>
    )
  }
}

export default Event;