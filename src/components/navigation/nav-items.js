import { navItem } from './nav-item';
import { routeChange } from '../../router/route-change';
import { routes } from '../../router/routes';
import { navLogin, navMobileLogin } from './nav-login'
import { navCart, navMobileCart } from './nav-cart'

const navItems = () => {

  const navItems = routes.map(route => {
    const { name, path, data } = route;
    if (data.group == 'main-menu')
      return navItem(name, () => $('#header').trigger(routeChange, { path: path }))
  })

  return navItems
}

const navItemLogin = () => {
  const navItemLogin = navLogin(() => $('#header').trigger(routeChange, { path: '/login' }));
  return navItemLogin
}

const navItemMobileLogin = () => {
  const navItemLogin = navMobileLogin(() => $('#header').trigger(routeChange, { path: '/login' }));
  return navItemLogin
}

const navItemMobileCart = () => {
  const navItemMobileCart = navMobileCart(() => $('#header').trigger(routeChange, { path: '/booking' }))
  return navItemMobileCart
}



const navItemCart = () => {
  const navItemCart = navCart(() => $('#header').trigger(routeChange, { path: '/booking' }));
  return navItemCart
}
  


export { navItems, navItemCart, navItemMobileLogin, navItemLogin, navItemMobileCart }