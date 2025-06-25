import React from "react";

const ContactCard = ({ contact, onDelete }) => (
  <div className="item">
    <div className="content">
      <div className="header">{contact.name} - {contact.email}</div>
    </div>
    <i
      className="trash alternate outline icon"
      style={{ color: "red", marginTop: "7px", cursor: "pointer" }}
      onClick={() => onDelete(contact.id)}
    ></i>
  </div>
);

const ContactList = ({ contacts, getContactId }) => (
  <div className="ui celled list">
    {contacts.map((contact) => (
      <ContactCard key={contact.id} contact={contact} onDelete={getContactId} />
    ))}
  </div>
);

export default ContactList;
