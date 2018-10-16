import React from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import './react-big-calendar.css'


let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

const localizer = BigCalendar.momentLocalizer(moment)

let events = [ {
  id: 1,
  title: 'All Day Event very long title',
  allDay: true,
  start: "2018/10/10",
  end: "2018/10/11",
}];

const MyCalendar = props => (
  <div>
     <BigCalendar
     events={events}
     views={allViews}
     step={60}
     showMultiDayTimes
     localizer={localizer}
    />
  </div>
)

export default MyCalendar;

