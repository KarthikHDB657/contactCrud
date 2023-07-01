import React, { createContext, useState } from 'react';

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => [newContact,...prevContacts]);
  };

  const removeContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const updateContact = (updatedContact) => {
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
  };

  return (
    <ContactContext.Provider
      value={{ contacts, addContact, removeContact, updateContact }}
    >
      {children}
    </ContactContext.Provider>
  );
};
