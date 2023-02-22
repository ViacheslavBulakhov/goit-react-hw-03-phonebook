import React from "react";
import { Formik, Field, Form } from 'formik';

export function ContactForm ({handleSubmit}) {
   const initialValues = {
        name: '',
        number: '',
      }
    return(
        <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field 
            id='name'    
            type="text" 
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required />

          <label htmlFor="name">Number</label>
          <Field 
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    )
    
}