import React from 'react';
import NavbarMessageDropdown from './NavbarMessageDropdown';

const NavbarMessageList = [
  {
    username: 'David Miller',
    time: '11:21 AM',
    message: `
      Hey there! This new version of SB Admin is pretty awesome!
      These messages clip off when they reach the end of the box so they don't overflow over to the sides!
    `
  },
  {
    username: 'Jane Smith',
    time: '11:21 AM',
    message: `I was wondering if you could meet for an appointment at 3:00 instead of 4:00. Thanks!`
  },
  {
    username: 'John Doe',
    time: '11:21 AM',
    message: `
      I've sent the final files over to you for review. 
      When you're able to sign off of them let me know and we can discuss distribution.
    `
  },
];

export default function NavbarMessage(props) {

  const NavbarMessageItems = NavbarMessageList.map(NavbarMessageItem => {
    return (
      <div id="wrapper-message">
        <div className="dropdown-divider"/>
        <NavbarMessageDropdown
          username={NavbarMessageItem.username}
          time={NavbarMessageItem.time}
          message={NavbarMessageItem.message}
        />
        <div className="dropdown-divider"/>
      </div>
    );
  });

  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle mr-lg-2" id="messagesDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fa fa-fw fa-envelope"/>
        <span className="d-lg-none">Messages
              <span className="badge badge-pill badge-primary">{props.numOfMessages} New</span>
            </span>
        <span className="indicator text-primary d-none d-lg-block">
              <i className="fa fa-fw fa-circle"/>
            </span>
      </a>
      <div className="dropdown-menu" aria-labelledby="messagesDropdown">
        <h6 className="dropdown-header">New Messages:</h6>
        {NavbarMessageItems}
        <a className="dropdown-item small" href="#">View all messages</a>
      </div>
    </li>
  )
}