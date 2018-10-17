import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import './react-big-calendar.css'
import CoupleService from '../couples/CoupleService'

class MyCalendar extends Component {
  constructor(){
    super();
    this.state = { 
      eventos: [{}],
      events: [ {id: 1,
        title: 'All Day Event very long title',
        allDay: true,
        start: "2018/10/17",
        end: "2018/10/17",
      }],
      localizer: BigCalendar.momentLocalizer(moment),
    };
    this.service = new CoupleService;
    let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])
    // let localizer = BigCalendar.momentLocalizer(moment)
 
  }

  componentWillMount = () => {
    this.getEvents()
  }  

  getEvents = () => {
    return this.service.getCouple()
    .then(res => this.setState({eventos: res.events}))
  }

  render(){
    console.log(this.state.eventos)
    return(
      <div>
     <BigCalendar
     events={this.state.eventos}
     step={60}
     showMultiDayTimes
     localizer={this.state.localizer}
    />
    {this.state.eventos ? this.state.eventos.map((evento, i) => (
    <div>
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

