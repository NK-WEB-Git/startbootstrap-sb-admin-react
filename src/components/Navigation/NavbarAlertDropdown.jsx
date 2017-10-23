import React from 'react';

export default function NavbarAlertDropdown(props) {
  return (
    <a className="dropdown-item" href="#">
      <span className={props.stateAlertCss}>
        <strong>
          <i className={props.icons}/>{props.title}</strong>
      </span>
      <span className="small float-right text-muted">{props.time}</span>
      <div className="dropdown-message small">{props.message}</div>
    </a>
  );
}