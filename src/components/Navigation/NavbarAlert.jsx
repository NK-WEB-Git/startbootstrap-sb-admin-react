import React from 'react';

export default function NavbarAlert() {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fa fa-fw fa-bell"/>
        <span className="d-lg-none">Alerts
              <span className="badge badge-pill badge-warning">6 New</span>
            </span>
        <span className="indicator text-warning d-none d-lg-block">
              <i className="fa fa-fw fa-circle"/>
            </span>
      </a>
      <div className="dropdown-menu" aria-labelledby="alertsDropdown">
        <h6 className="dropdown-header">New Alerts:</h6>
        <div className="dropdown-divider"/>
        <a className="dropdown-item" href="#">
              <span className="text-success">
                <strong>
                  <i className="fa fa-long-arrow-up fa-fw"/>Status Update</strong>
              </span>
          <span className="small float-right text-muted">11:21 AM</span>
          <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
        </a>
        <div className="dropdown-divider"/>
        <a className="dropdown-item" href="#">
              <span className="text-danger">
                <strong>
                  <i className="fa fa-long-arrow-down fa-fw"/>Status Update</strong>
              </span>
          <span className="small float-right text-muted">11:21 AM</span>
          <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
        </a>
        <div className="dropdown-divider"/>
        <a className="dropdown-item" href="#">
              <span className="text-success">
                <strong>
                  <i className="fa fa-long-arrow-up fa-fw"/>Status Update</strong>
              </span>
          <span className="small float-right text-muted">11:21 AM</span>
          <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
        </a>
        <div className="dropdown-divider"/>
        <a className="dropdown-item small" href="#">View all alerts</a>
      </div>
    </li>
  );
}