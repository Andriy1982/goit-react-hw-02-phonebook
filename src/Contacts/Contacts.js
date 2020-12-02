import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Contacts extends Component {
  //   static propTypes = {
  //     prop: PropTypes,
  //   };

  render() {
    const { contacts } = this.props;
    return (
      <>
        <ul>
          {contacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                {name} : {number}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
