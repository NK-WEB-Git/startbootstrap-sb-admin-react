import React from 'react';

export default function NavbarButtonLogout() {
  return (
    <li className="nav-item">
      <a className="nav-link" data-toggle="modal" data-target="#exampleModal">
        <i className="fa fa-fw fa-sign-out"/>Logout</a>
    </li>
  );
}