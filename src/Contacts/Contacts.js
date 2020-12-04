import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { List, ListItem } from './ContactsStyledComponent';

export default class Contacts extends Component {
  //   static propTypes = {
  //     prop: PropTypes,
  //   };

  render() {
    const { contacts, onDeleteContact } = this.props;
    return (
      <>
        <List>
          {contacts.map(({ id, name, number }) => {
            return (
              <ListItem key={id}>
                <span>{name}:</span>
                <span>{number}</span>
                <button type="button" onClick={() => onDeleteContact(id)}>
                  Delete
                </button>
              </ListItem>
            );
          })}
        </List>
      </>
    );
  }
}
