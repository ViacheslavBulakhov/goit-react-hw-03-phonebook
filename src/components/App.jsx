import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ContactForm } from './ContactForm/contactForm';
import { ContactList } from './Contacts/contacts';
import { Filter } from './Filter/filter';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    if (localStorage.getItem('contacts')) {
      this.setState({
        contacts: [...JSON.parse(localStorage.getItem('contacts'))],
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      this.LSContactsListControl();
    }
  }

  addContact = async contact => {
    if (this.checkOfValidContact(contact)) {
      alert(`${contact.name} is olready in contacts.`);
      return;
    }

    await this.setState(prevState => ({
      contacts: [{ ...contact, id: uuidv4() }, ...prevState.contacts],
    }));
  };

  checkOfValidContact = value =>
    this.state.contacts.find(
      contact => contact.name.toLowerCase() === value.name.toLowerCase()
    );

  contactDelete = async id => {
    await this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  LSContactsListControl = () => {
    localStorage.setItem('contacts', JSON.stringify([...this.state.contacts]));
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
