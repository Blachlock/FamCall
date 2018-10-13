import axios from 'axios';

class EventService {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:3001/events',
      withCredentials: true
    });
  }

  event = (startDate, endDate, startTime, endTime, title, description, comment) => {
    return this.service.post('/event', {startDate, endDate, startTime, endTime, title, description, comment})
    .then(response => response.data)
  }

}

export default EventService;