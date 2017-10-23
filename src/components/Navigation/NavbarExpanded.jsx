import React from 'react'
import NavbarMessage from './NavbarMessage';
import NavbarAlert from './NavbarAlert';

export default function NavbarExpanded() {
  return (
    <ul className="navbar-nav ml-auto">
      <NavbarMessage numOfMessages="12"/>
      <NavbarAlert numOfAlerts="20"/>
    </ul>
  );
}