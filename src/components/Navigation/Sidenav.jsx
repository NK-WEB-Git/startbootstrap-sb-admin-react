import React from 'react';
import SidenavItem from './SidenavItem';

const sidenavList = [
  {
    attrTitle: 'Dashboard',
    href: '#',
    title: 'Dashboard',
    icons: 'fa fa-fw fa-dashboard',
  },
  {
    attrTitle: 'Charts',
    href: '#',
    title: 'Charts',
    icons: 'fa fa-fw fa-area-chart',
  },
  {
    attrTitle: 'Tables',
    href: '#',
    title: 'Tables',
    icons: 'fa fa-fw fa-table',
  },
  {
    attrTitle: 'Components',
    href: '#',
    title: 'Components',
    icons: 'fa fa-fw fa-wrench',
  },
  {
    attrTitle: 'Example Pages',
    href: '#',
    title: 'Example Pages',
    icons: 'fa fa-fw fa-file',
  },
  {
    attrTitle: 'Menu Levels',
    href: '#',
    title: 'Menu Levels',
    icons: 'fa fa-fw fa-sitemap',
  },
  {
    attrTitle: 'Link',
    href: '#',
    title: 'Link',
    icons: 'fa fa-fw fa-link',
  },
];

export default function Sidenav() {

  const sidenavItems = sidenavList.map(sidenavItem => {
    return (
      <SidenavItem
        attrTitle={sidenavItem.attrTitle}
        href={sidenavItem.href}
        title={sidenavItem.title}
        icons={sidenavItem.icons}
      />
    );
  });

  return (
    <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
      {sidenavItems}
    </ul>
  )
}
