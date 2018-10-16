import axios from 'axios';


class CoupleService {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:4000/couple/getCouple',
      withCredentials: true
    });
  }

  getCouple = (couple, parentOne, parentTwo, events, children) => {
    return this.service.get('/', {couple, parentOne, parentTwo, events, children})
    .then(response => {console.log(response); return response.data})
  }

  getChildren = (children) => {
    return this.service.get('/', {children})
    .then(response => {console.log(response); return response.data})
  }
}

export default CoupleService;