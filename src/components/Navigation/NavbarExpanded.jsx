import React from 'react'
import NavbarMessage from './NavbarMessage';
import NavbarAlert from './NavbarAlert';
import NavbarFormSearch from './NavbarFormSearch';
import NavbarButtonLogout from './NavbarButtonLogout';

export default function NavbarExpanded() {
  return (
    <ul className="navbar-nav ml-auto">
      <NavbarMessage numOfMessages="12"/>
      <NavbarAlert numOfAlerts="20"/>
      <NavbarFormSearch/>
      <NavbarButtonLogout/>
    </ul>
  );
}