import React from 'react';

export default function NavbarMessageDropdown(props) {
  return (
    <a className="dropdown-item" href="#">
      <strong>{props.username}</strong>
      <span className="small float-right text-muted">{props.time}</span>
      <div className="dropdown-message small">{props.message}</div>
    </a>
  );
}