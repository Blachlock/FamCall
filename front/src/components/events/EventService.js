import axios from 'axios';

class EventService {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:4000/events',
      withCredentials: true
    });
  }

  postEvent = (startDate, endDate, startTime, endTime, title, description, parentCreated) => {
    return this.service.post(`/`, {startDate, endDate, startTime, endTime, title, description, parentCreated})
    .then(response => {console.log(response); return response.data})
  }

}

export default EventService;