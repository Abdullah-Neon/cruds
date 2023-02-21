import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    const { contact } = this.props;
    return (
      <div className="card contact">
        <img src={contact.picture} />
        <div className="card-body">
          <h5 className="card-title">
            {contact.first_name} {contact.last_name}
          </h5>
          <p className="card-text">{contact.email}</p>
          <p className="card-text">{contact.gender}</p>
          <p className="card-text">{contact.age}</p>
          <p className="card-text">{contact.dob}</p>
        </div>
      </div>
    );
  }
}
