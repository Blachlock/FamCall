import axios from 'axios';

class EventService {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:4000/events',
      withCredentials: true
    });
  }

  postEvent = (startDate, endDate, startTime, endTime, title, description, parentCreated, child) => {
    return this.service.post(`/`, {startDate, endDate, startTime, endTime, title, description, parentCreated, child})
    .then(response => {console.log(response); return response.data})
  }

  getEvent = (child, startDate, endDate, startTime, endTime, title, description, parentCreated) => {
    return this.service.get(`/`, {child, startDate, endDate, startTime, endTime, title, description, parentCreated})
    .then(response => {console.log(response); return response.data})
  }
}

export default EventService;