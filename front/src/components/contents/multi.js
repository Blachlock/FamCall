import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';

class MultiForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      children: null
    }
  }

  componentWillMount(){
    this.getChildren()
  }

  getChildren = () => {
    let url = `${process.env.REACT_APP_API_URL}/couple/getCouple`
    axios.get(url, {withCredentials: true})
    .then(res => {console.log(res.data.child); this.setState({children: res.data.child})},() => {
    })
    .catch(e => console.log(e))
  }

   render () {
    return (
      <Select
        closeMenuOnSelect={false}
        components={makeAnimated()}
        isMulti
        options={this.name}
      />
    )};
}

export default MultiForm;