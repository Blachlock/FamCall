// auth/auth-service.js
import axios from 'axios';

class CalendarService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/calendar`,
      withCredentials: true
    });
  }

  sendInvite = (from, to, phone) => {
    return this.service.post('/sendInvite', {from, to, phone})
    .then(response => response.data)
  }

}

export default CalendarService;