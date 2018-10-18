import axios from 'axios';

class ChildService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/child`,
      withCredentials: true
    });
  }

  postChild = (name, birthday) => {
    return this.service.post(`/`, {name, birthday})
    .then(response => {console.log(response); return response.data})
  }

  getChild = (name, birthday) => {
    return this.service.get(`/`, {name, birthday})
    .then(response => {console.log(response); return response.data})
  }
}

export default ChildService;