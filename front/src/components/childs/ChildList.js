import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ChildList extends Component {
  constructor(props){
    super(props);
    this.state = { 
      child:'',
      children: null
    };
  }

  componentWillMount(){
    this.getChildren()
  }

  getChildren = () => {
    let url = `${process.env.REACT_APP_API_URL}/couple/getCouple`
    axios.get(url, {withCredentials: true})
    .then(res =>  this.setState({children: res.data.child}),() => {
    })
    .catch(e => console.log(e))
  }

  render() {
    return (

      <div className="tabs is-centered is-boxed">
        {this.state.children ? this.state.children.map((e, i) => {
            return(
                <ul key={i}>
                  <li className="is-active" key={i} name="child" value={e._id}>
                    
                      <span className="icon is-small"><i className="fas fa-image"></i></span>
                      <Link to={`/child/${e._id}`}>{e.name}</Link>
                  
                  </li>
                </ul>
             )
            }) : <div></div>
          }
      </div>
    )
  }
}



export default ChildList;
