import axios from 'axios';


class CoupleService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/couple/getCouple`,
      withCredentials: true
    });
  }


  getCouple = () => {
    return this.service.get('/')
    .then(response => response.data)
  } 

  getChildren = (children) => {
    return this.service.get('/', {children})
    .then(response => {console.log(response); return response.data})
  }
}

export default CoupleService;