import React, { Component } from "react";
import CalendarService from './CalendarService'


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
    /* if (this.state.loggedInUser) { */
    return (
      <div className="col-sm-4 offset-sm-4">
        <form id="contact-form" onSubmit={this.handleSubmit}>
          <fieldset>
            <label>To</label>
            <input
              type="email"
              name="to"
              value={this.state.to}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>
          <fieldset>
            <label>Number</label>
            <input
              type="number"
              name="phone"
              value={this.state.phone}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>
          <button type="submit" value="sendInvite">
            Submit
          </button>
        </form>

        <h1>{this.state.error ? "Error" : ""}</h1>
      </div>
    );
 /*  } */
}
}

export default InvitationMail;