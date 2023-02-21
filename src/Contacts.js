import React, { Component } from "react";
import Contact from "./Contact";
import contacts from "./Data.json";

export default class Contacts extends Component {
  state = {
    contacts,
  };
  render() {
    const { contacts } = this.state;
    return (
      <div>
        <div>
          <h2 className="text-center mt-3">Hy This is My Contact</h2>
          {contacts.map((contact) => (
            <Contact contact={contact} key={contact.id} />
          ))}
        </div>
      </div>
    );
  }
}
