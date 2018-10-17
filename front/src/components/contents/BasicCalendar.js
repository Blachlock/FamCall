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
    .then(res => {let eventsCopy = JSON.parse(JSON.stringify(this.state.eventos))
      
      let titleState = eventsCopy[0].title
      titleState = res.events[0].title

      console.log(eventsCopy)
      ; return this.setState({eventos: update(this.state.eventos, {0: {title: {$set: res.events[0].title}}})})
      })
  }
  
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
     localizer={this.state.localizer}
    />
    {this.state.eventos ? this.state.eventos.map((evento, i) => (
    <div key={i}>

      <h1>{evento.title}</h1>
      <h3>{evento.description}</h3>
      <p>Desde: {evento.startTime}</p>
      <p>Hasta: {evento.endTime}</p>
      
      </div>
      )) : ""}
    <h1></h1>
  </div>
    )
  }
}


// let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

// const localizer = BigCalendar.momentLocalizer(moment)

// let events = [ {
//   id: 1,
//   title: 'All Day Event very long title',
//   allDay: true,
//   start: "2018/10/17",
//   end: "2018/10/17",
// }];

// const MyCalendar = props => (
//   <div>
//      <BigCalendar
//      events={events}
//      step={60}
//      showMultiDayTimes
//      localizer={localizer}
//     />
//   </div>
// )

export default MyCalendar;

