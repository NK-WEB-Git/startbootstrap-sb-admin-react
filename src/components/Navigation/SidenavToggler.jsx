import React from 'react';

export default function NavbarToggler() {
  return (
    <ul className="navbar-nav sidenav-toggler">
      <li className="nav-item">
        <a className="nav-link text-center" id="sidenavToggler">
          <i className="fa fa-fw fa-angle-left"/>
        </a>
      </li>
    </ul>
  );
}
