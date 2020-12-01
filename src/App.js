import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      contacts: [
        ...this.state.contacts,
        { id: uuidv4(), name: this.state.name },
      ],
    });

    this.setState({ name: '' });
  };

  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    const { name } = this.state;
    return (
      <>
        <section>
          <h2>Phonebook</h2>
          <form
            onSubmit={this.handleSubmit}
            style={{
              outline: '1px solid red',
              width: '300px',
              padding: '10px',
            }}
          >
            <label>
              Name
              <input type="text" onChange={this.handleChange} value={name} />
            </label>
            <button type="submit">Add contact</button>
          </form>
        </section>
        <section>
          <h2>Contact</h2>
          <ul></ul>
        </section>
      </>
    );
  }
}
