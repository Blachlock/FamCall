import React, { Component } from "react";
import CalendarService from './CalendarService';
import 'bulma/css/bulma.css';
import { Link } from 'react-router-dom';




class InvitationMail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: this.props.userInSession._id,
      to: "",
      phone: ""
    };
    this.service = new CalendarService();
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const from = this.state.from
    const to = this.state.to;
    const phone = this.state.phone;

    this.service.sendInvite(from, to, phone)
      .then(response => {
        if (response.status === "success") {
          alert("Message Sent.");
         this.resetForm();
          this.setState({
            from: from,
            to: to,
            phone: phone,
            error: false
          });
        } else if (response.status === "fail") {
          alert("Message failed to send.");
        }
      })
      .catch(err => {
        console.log(err)
        this.setState({
          from: from,
          to: to,
          phone: phone,
          error: true
        });
      });
  };

 resetForm() {
    document.getElementById("contact-form").reset();
  } 

  render() {
    const btnsStyle = {
      display: 'flex',
    justifyContent: 'center'
    }
    return (
      <div className="col-sm-4 offset-sm-4">
        <form id="contact-form" onSubmit={this.handleSubmit}>

          <div className="field is-horizontal">
            <div className="field-label is-small">
              <label className="label">Enviar invitación a:</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input className="input is-small" type="email" placeholder="Correo electrónico" name="to" value={this.state.to} onChange={e => this.handleChange(e)} />
                </div>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-small">
              <label className="label">Verificar con número de teléfono invitado:</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input className="input is-small" type="number" placeholder="Número de teléfono" name="phone" value={this.state.phone} onChange={e => this.handleChange(e)} />
                </div>
              </div>
            </div>
          </div>

          <div className="field is-grouped" style={btnsStyle}>
            <div className="control">
              <button className="button is-link" onClick={this.handleFormSubmit} type="submit" value="submit">
                Save changes
              </button>
            </div>
            <p className="control">
                <Link className="button" to='/profile'>Cancelar</Link>
            </p>
          </div>
          

        </form>

        <h1>{this.state.error ? "Error" : ""}</h1>
      </div>
    );
 /*  } */
}
}

export default InvitationMail;