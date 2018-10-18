// auth/auth-service.js
import axios from 'axios';
require('dotenv').config();

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/auth`,
      withCredentials: true
    });
  }

  signup = (username, password, email, name, phone) => {
    return this.service.post('/signup', {username, password, email, name, phone})
    .then(response => response.data)
  }

  login = (username, password) => {
    return this.service.post('/login', {username, password})
    .then(response => response.data)
  }

  loggedin = () => {
    return this.service.get('/currentUser',)
    .then(response => {console.log(response); return response.data})
  }

  logout = () => {
    return this.service.get('/logout',)
    .then(response => response.data)
  }
}

export default AuthService;