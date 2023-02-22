import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {ContactForm} from './ContactForm/contactForm'
import {ContactList} from './Contacts/contacts'
import {Filter} from './Filter/filter'


export class App extends React.Component {  
  state = {
    contacts :  [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'} 
    ],
    filter: '',
    name: '',
    number: '',

  }

  handleSubmit = (value,{resetForm}) => {
    const id = uuidv4()
    
    const contact = {...value,id: [id]};
    this.setState(prevState => ({ contacts: [...prevState.contacts,contact]})) 
    resetForm()
  }
  elementDelete = (id) => { 
      this.setState(prevState => ({ contacts: prevState.contacts.filter(contact => contact.id !== id)}))
  }
  findContact = (value) => {
    if (value === '') {
      this.setState({filter: ''})
      return      
    }
      const {contacts} = this.state;

    const filteredContact = contacts.filter(contact =>  { 
        const {name} = contact;
        const validName = name.toLowerCase();
        const validValue = value.toLowerCase();

      if(validName.includes(validValue)){
        return contact;
      }
    })
    this.setState({ filter: [...filteredContact]})
  }

  render(){

    return(
      <div>
      <h1>PhoneBook</h1>
      <ContactForm  handleSubmit={this.handleSubmit}/>

      <h2>Contacts</h2>
      <Filter findContact={this.findContact}/>
      {(this.state.filter === '' ? 
        <ContactList contacts={this.state.contacts} elementDelete = {this.elementDelete}/>
      : <ContactList contacts={this.state.filter} elementDelete = {this.elementDelete}/>) }
    </div>

    )
  }
}