import React from 'react';

export default function Breadcrumb() {
  return (
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="#">Dashboard</a>
      </li>
      <li className="breadcrumb-item active">My Dashboard</li>
    </ol>
  );
}
