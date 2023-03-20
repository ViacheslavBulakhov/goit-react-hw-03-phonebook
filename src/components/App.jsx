import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ContactForm } from './ContactForm/contactForm';
import { ContactList } from './Contacts/contacts';
import { Filter } from './Filter/filter';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    if (this.checkOfValidContact(contact)) {
      alert(`${contact.name} is olready in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [{ ...contact, id: uuidv4() }, ...prevState.contacts],
    }));
  };

  contactDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = value => {
    this.setState({ filter: value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  checkOfValidContact = value =>
    this.state.contacts.find(
      contact => contact.name.toLowerCase() === value.name.toLowerCase()
    );

  render() {
    return (
      <div>
        <h1>PhoneBook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>

        {this.state.contacts.length > 0 ? (
          <>
            <Filter changeFilter={this.changeFilter} />
            <ContactList
              contacts={this.getFilteredContacts()}
              contactDelete={this.contactDelete}
            />
          </>
        ) : (
          <p>You have no contacts on phonebook yet</p>
        )}
      </div>
    );
  }
}
