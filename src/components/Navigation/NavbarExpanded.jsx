import React from 'react'
import NavbarMessage from './NavbarMessage';
import NavbarAlert from './NavbarAlert';

export default function NavbarExpanded() {
  return (
    <ul className="navbar-nav ml-auto">
      <NavbarMessage/>
      <NavbarAlert/>
    </ul>
  );
}