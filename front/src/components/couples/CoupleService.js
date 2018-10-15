import React, { Component } from 'react';
import axios from 'axios';

import axios from 'axios';

class CoupleService {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:4000/events',
      withCredentials: true
    });
  }

  getCouple = (couple, parentOne, parentTwo, events, child) => {
    return this.service.post('/', {couple, parentOne, parentTwo, events, child})
    .then(response => {console.log(response); return response.data})
  }

}

export default CoupleService;