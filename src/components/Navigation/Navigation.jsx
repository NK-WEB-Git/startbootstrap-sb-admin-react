import React from 'react';
import NavbarBrand from './NavbarBrand';
import NavbarToggler from './NavbarToggler';
import SidenavToggler from './SidenavToggler';
import Sidenav from './Sidenav';
import NavbarExpanded from './NavbarExpanded';

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
      <NavbarBrand/>
      <NavbarToggler/>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <Sidenav/>
        <SidenavToggler/>
        <NavbarExpanded/>
      </div>
    </nav>
  );
}
