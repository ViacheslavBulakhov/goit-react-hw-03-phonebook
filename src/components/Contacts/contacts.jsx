import React from 'react';
import { ContactElement } from './contacts.styled';
import PropTypes from 'prop-types';

export function ContactList({ contacts, contactDelete }) {
  return (
    <>
      <ul>
        {contacts.map(contact => (
          <ContactElement key={contact.id}>
            <span>{contact.name}: </span>
            <span>{contact.number} </span>
            <button type="button" onClick={() => contactDelete(contact.id)}>
              Delete
            </button>
          </ContactElement>
        ))}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  contactDelete: PropTypes.func.isRequired,
};
