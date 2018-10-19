import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CoupleService from "../couples/CoupleService"

class ChildProfile extends Component {
  constructor(props){
    super(props);
    this.state = { 
      child:'',
      children: null
    };
    this.service = new CoupleService;
  }

  componentWillMount(){
    this.getChildren()
    this.service.getCouple()
    .then(res => {
      this.setState({...this.state,eventosLista: res.events})
    })
  }

  getChildren = () => {
    let url = `${process.env.REACT_APP_API_URL}/couple/getCouple`
    axios.get(url, {withCredentials: true})
    .then(res =>  this.setState({children: res.data.child}),() => {
    })
    .catch(e => console.log(e))
  }

  render() {
    console.log(this.props.params)
    return (

      <div>
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

      {this.state.eventosLista ? this.state.eventosLista.map((evento, i) => (
        <div key={i}>

          <div className="card">
            <header className="card-header">
              <h3 className="card-header-title">{evento.title}</h3>
              
            </header>
            <div className="card-content">
              <div className="content">
                <p>{evento.description}</p>
                <br/>
                <time dateTime>{evento.startDate} - {evento.endDate}</time>
                <br/>
                <time dateTime>{evento.startTime} - {evento.endTime}</time>

              </div>
            </div>
            <footer className="card-footer">
              <p href="#" className="card-footer-item">Edit</p>
              <p href="#" className="card-footer-item">Delete</p>
            </footer>
          </div>
          <br></br>
      
      </div>
      )) : ""}
    </div>

     
    )
}

}
export default ChildProfile;
