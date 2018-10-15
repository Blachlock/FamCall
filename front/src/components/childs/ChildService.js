import axios from 'axios';

class ChildService {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:4000/child',
      withCredentials: true
    });
  }

  postChild = (name, birthday) => {
    return this.service.post(`/`, {name, birthday})
    .then(response => {console.log(response); return response.data})
  }

}

export default ChildService;