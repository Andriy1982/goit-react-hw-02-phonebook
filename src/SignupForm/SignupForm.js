import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';

export default class Signupform extends Component {
  //   static propTypes = {
  //     prop: PropTypes,
  //   };

  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    if (!name || !number) return;

    this.props.onAddContact({ id: uuidv4(), name, number });
    // return {
    //   contacts: [{ id: uuidv4(), name: name, number: number }],
    // };
    // // this.setState({
    // //   contacts: [
    // //     ...this.state.contacts,
    // //     { id: uuidv4(), name: this.state.name },
    // //   ],
    // // });

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
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
          <input
            type="text"
            value={name}
            name="name"
            onChange={this.handleChange}
          />
        </label>
        <label>
          Number
          <input
            type="number"
            value={number}
            name="number"
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
