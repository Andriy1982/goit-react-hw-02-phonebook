import React, { Component } from 'react';

import Contacts from './Contacts';
import Signupform from './SignupForm/SignupForm';
import Filter from './Filter';

export default class App extends Component {
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
    this.setState(prevState => {
      console.log(prevState);
      if (prevState.contacts.some(el => el.name === contact.name)) {
        console.log('this contact ready yet');
        return;
      }
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  handleFilter = filter => {
    console.log(filter);
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <section className="section">
        <h1>Phonebook</h1>
        <Signupform onAddContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter name={filter} onChangeFilter={this.handleFilter} />
        <Contacts contacts={visibleContacts} />
      </section>
    );
  }
}
