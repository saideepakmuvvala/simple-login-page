// src/Main.js
import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import "./Main.css";
import { NavLink } from "react-router-dom";

const Main = () => {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui-container">
      {/* NavBar */}
        <div className="ui inverted menu">
            <div className="ui container">
                <NavLink to="/main" className={({ isActive }) => "item" + (isActive ? " active" : "")}>
                <i className="address book icon"></i>
                Main
                </NavLink>
                <NavLink to="/chess" className={({ isActive }) => "item" + (isActive ? " active" : "")}>
                <i className="chess board icon"></i>
                Chess
                </NavLink>
            </div>
        </div>

      {/* Contact App */}
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
};

export default Main;
