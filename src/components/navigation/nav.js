import $ from 'jquery';
import { navItem } from './nav-item';
import { routeChange } from '../../router/route-change';
import { routes } from '../../router/routes';
import { navbar } from './navbar';
import { navbarMobile } from './navbar-mobile';

export const nav = () => {

  const fragment = $(new DocumentFragment())
  fragment.append(navbar)
  fragment.append(navbarMobile)

  const navItems = routes.map(route => {
    const { name, path, data } = route;
    if (data.group == 'main-menu')
      return navItem(name, () => fragment.trigger(routeChange, { path: path }))
  })

//  fragment.find('#nav-links').append(navItems)
  fragment.find('#nav-mobile-links').append(navItems)
  fragment.find('#nav-links').append(navItems)

  return fragment
}