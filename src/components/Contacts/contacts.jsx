import React from "react";

export function ContactList ({contacts,elementDelete}) {

  return (<>
    <ul>
        {
        contacts.map(contact => (

        <li key ={contact.id}><span>{contact.name}: </span><span>{contact.number} </span>
        <button type="button" name={contact.id} onClick={() => elementDelete(contact.id)}>Delete</button>
        </li>
        
        ))
        }
    </ul>
    </>)
}