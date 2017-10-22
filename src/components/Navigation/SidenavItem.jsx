import React from 'react';

export default function SidenavItem(props) {
  return (
    <li className="nav-item" data-toggle="tooltip" data-placement="right" title={props.attrTitle}>
      <a className="nav-link" href={props.href}>
        <i className={props.icons}/>
        <span className="nav-link-text">{props.title}</span>
      </a>
    </li>
  );
}