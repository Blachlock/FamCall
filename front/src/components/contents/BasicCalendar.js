import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import './react-big-calendar.css'
import CoupleService from '../couples/CoupleService'
import { Link } from 'react-router-dom';

class MyCalendar extends Component {
  constructor(props){
    console.log(props)
    super(props);
    this.state = { 
      user: props.userInSession,
      eventosLista: [],
      calendarEvents: [{
        id: "",
        title: "",
        allDay: "",
        start: "",
        end: "",
      }],
      localizer: BigCalendar.momentLocalizer(moment),
    };
    this.service = new CoupleService;
  }

  
  componentWillMount = () => {
    this.getEvents()
  }  

  getEvents = () => {
    return this.service.getCouple()
    .then(res => {
        let changedEvents = res.events.map((e, i) => {
        let fecha = e.startDate.split("-")
        let time = e.startTime.split(":")
        
        let year = parseFloat(fecha[0])
        let month = parseFloat(fecha[1])
        let day = parseFloat(fecha[2])
        
        let hour = parseFloat(time[0])
        let minute = parseFloat(time[0])
        let second = parseFloat("0")
        
        let endfecha = e.endDate.split("-")
        let endtime = e.endTime.split(":")
        
        let endyear = parseFloat(endfecha[0])
        let endmonth = parseFloat(endfecha[1])
        let endday = parseFloat(endfecha[2])
        
        let endhour = parseFloat(endtime[0])
        let endminute = parseFloat(endtime[0])
        let endsecond = parseFloat("0")
      

        return (
        {
          id: e._id,
          title: e.title,
          allDay: false,
          start: new Date(year, month-1, day, hour, minute, second),
          end: new Date(endyear, endmonth-1, endday, endhour, endminute, endsecond)
        }
        )
      })
    
      ; return this.setState({calendarEvents: changedEvents, eventosLista: res.events})
      })
  }

  
  render(){
    let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

    const btnevntStyle = {
      marginBottom:'0px'
    }
    const calendStyle = {
      paddingLeft:'5px',
      paddingRight:'5px'
    }

    return(
      <div>
        <article className="message is-primary" style={btnevntStyle}>
          <div className="message-body">
          <p className="button is-info is-outlined"><Link to='/events/create'>Crear recordatorio:</Link></p>

          </div>
        </article>

        <article className="message">
          <div className="message-body" style={calendStyle}>
            <BigCalendar
            events={this.state.calendarEvents}
            views={allViews}
            step={60}
            showMultiDayTimes
            localizer={this.state.localizer}>
            </BigCalendar>
          </div>
        </article>
        
        {this.state.eventosLista ? this.state.eventosLista.map((evento, i) => (
        <div key={i}>

          <div className="card">
            <header className="card-header">
              <h3 className="card-header-title">{evento.title}</h3>
              
            </header>
            <div className="card-content">
              <div className="content">
                <p>{evento.description}</p>
                <br/>
                <time dateTime>{evento.startDate} - {evento.endDate}</time>
                <br/>
                <time dateTime>{evento.startTime} - {evento.endTime}</time>

              </div>
            </div>
            <footer className="card-footer">
              <p href="#" className="card-footer-item">Edit</p>
              <p href="#" className="card-footer-item">Delete</p>
            </footer>
          </div>
          <br></br>
      
      </div>
      )) : ""}
  </div>
    )
  }
}


export default MyCalendar;

