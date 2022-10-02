import React from 'react';
import LoginForm from './LoginForm';
import Menu from './Menu';

let e = React.createElement;

export default class Page extends React.Component {

  render() {

    return React.createElement(
      'div',
      {className:'container'},
      e(Menu, {}, null),
      e(LoginForm, {}, null)
    );
  }

}
