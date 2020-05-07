import { navItem } from './nav-item';
import { routeChange } from '../../router/route-change';
import { routes } from '../../router/routes';
import { navLogin } from './nav-item-login'
import { navCart } from './nav-item-cart'

const navItems = () => {

  const navItems = routes.map(route => {
    const { name, path, data } = route;
    if (data.group == 'main-menu')
      return navItem(name, () => $('#header').trigger(routeChange, { path: path }))
  })

  return navItems
}

const navItemLogin = () => {
  const navItemLogin = navLogin(() => navbar.trigger(routeChange, { path: '/login' }));
  return navItemLogin
}



const navItemCart = () => {
  const navItemCart = navCart(() => navbar.trigger(routeChange, { path: '/booking' }));
  return navItemCart
}
  


export { navItems, navItemCart, navItemLogin }