import React from 'react';
import NavbarAlertDropdown from './NavbarAlertDropdown';

const NavbarAlertList = [
  {
    title: 'Status Update',
    time: '11:21 AM',
    icons: 'fa fa-long-arrow-up fa-fw',
    stateAlertCss: 'text-danger',
    message: `This is an automated server response message. All systems are online.`
  },
  {
    title: 'Status Update',
    time: '11:21 AM',
    icons: 'fa fa-long-arrow-down fa-fw',
    stateAlertCss: 'text-success',
    message: `This is an automated server response message. All systems are online.`
  },
  {
    title: 'Status Update',
    time: '11:21 AM',
    icons: 'fa fa-long-arrow-up fa-fw',
    stateAlertCss: 'text-success',
    message: `This is an automated server response message. All systems are online.`
  },
];

export default function NavbarAlert(props) {

  const NavbarAlertItems = NavbarAlertList.map(NavbarAlertItem => {
    return (
      <div id="wrapper-alert">
        <div className="dropdown-divider"/>
        <NavbarAlertDropdown
          title={NavbarAlertItem.title}
          stateAlertCss={NavbarAlertItem.stateAlertCss}
          time={NavbarAlertItem.time}
          message={NavbarAlertItem.message}
          icons={NavbarAlertItem.icons}
        />
        <div className="dropdown-divider"/>
      </div>
    );
  });

  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fa fa-fw fa-bell"/>
        <span className="d-lg-none">Alerts
          <span className="badge badge-pill badge-warning">{props.numOfAlerts} New</span>
        </span>
        <span className="indicator text-warning d-none d-lg-block">
          <i className="fa fa-fw fa-circle"/>
        </span>
      </a>
      <div className="dropdown-menu" aria-labelledby="alertsDropdown">
        <h6 className="dropdown-header">New Alerts:</h6>
        {NavbarAlertItems}
        <a className="dropdown-item small" href="#">View all alerts</a>
      </div>
    </li>
  );
}