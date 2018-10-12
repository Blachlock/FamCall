import React from 'react';
import Calendar from 'react-big-calendar'
import moment from 'moment'
import './react-big-calendar.css'

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = Calendar.momentLocalizer(moment) // or globalizeLocalizer
console.log(moment())
const myEventsList = [
  {
    title: 'Concierto',
    start: moment("10/12/18"),
    end: moment("10/12/18"),
    allDay: true
  }
]

const MyCalendar = props => (
  <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
    />
  </div>
)

export default MyCalendar;