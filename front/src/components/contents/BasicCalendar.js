import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import './react-big-calendar.css'
import CoupleService from '../couples/CoupleService'
import update from 'react-addons-update'; 

class MyCalendar extends Component {
  constructor(){
    super();
    this.state = { 
      eventos: [{
        id: "",
        title: "",
        allDay: "",
        start: "",
        end: "",
      }],
      events: [ {id: 1,
        title: 'All Day Event very long title',
        allDay: true,
        start: "2018/10/17",
        end: "2018/10/17",
      }],
      localizer: BigCalendar.momentLocalizer(moment),
    };
    this.service = new CoupleService;
    // let localizer = BigCalendar.momentLocalizer(moment)
    
  }
  
  componentWillMount = () => {
    this.getEvents()
  }  

  getEvents = () => {
    return this.service.getCouple()
    .then(res => this.setState({eventos: res.events}))
  }
  
  // getEvents = () => {
  //   return this.service.getCouple()
  //   .then(res => {let eventsCopy = JSON.parse(JSON.stringify(this.state.eventos))
      
  //     let titleState = eventsCopy[0].title
  //     titleState = res.events[0].title

  //     console.log(eventsCopy)
  //     ; return this.setState({eventos: update(this.state.eventos, {0: {title: {$set: res.events[0].title}}})})
  //     })
  // }
  
  render(){
    let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])
    console.log(this.state.eventos)
     
    return(
      <div>
        <BigCalendar
        events={this.state.events}
        views={allViews}
        step={60}
        showMultiDayTimes
        localizer={this.state.localizer}/>
        
        {this.state.eventos ? this.state.eventos.map((evento, i) => (
        <div key={i}>

          <div className="card">
            <header className="card-header">
              <h3 className="card-header-title">{evento.title}</h3>
              <a href="#" className="card-header-icon" aria-label="more options">
                <span className="icon">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </a>
            </header>
            <div className="card-content">
              <div className="content">
                <p>{evento.description}</p>
                <br/>
                <time dateTime="2016-1-1">{evento.startTime} - {evento.endTime}</time>
              </div>
            </div>
            <footer className="card-footer">
              <a href="#" className="card-footer-item">Edit</a>
              <a href="#" className="card-footer-item">Delete</a>
            </footer>
          </div>

      {/* <h1>{evento.title}</h1>
      <h3>{evento.description}</h3>
      <p>Desde: {evento.startTime}</p>
      <p>Hasta: {evento.endTime}</p> */}
      
      </div>
      )) : ""}
  </div>
    )
  }
}


export default MyCalendar;

