import $ from 'jquery';
import { navItem } from './nav-item';
import { routeChange } from '../router/route-change';
import { routes } from '../router/routes';
import { booking } from '../views/booking';
import { cartButton } from '../components/cartModalWindow';
import { navItemCart } from '../navigation/nav-item-cart';

export const nav = () => {
    const navbar = $(`
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <span class="navbar-brand">IT SPA</span>
      <ul class="navbar-nav mr-auto"></ul>
    </nav>
  `);

    // chcemy zbudowac tablice elementow navItem z odpowiednimi nazwami i callbackami
    const navItems = routes.map(route => {
            const { name, path } = route;
            console.log("path: ", path);
            return navItem(name, () => navbar.trigger(routeChange, { path: path }));

        }

    );


    const navCart = navItemCart(() => navbar.trigger(routeChange, { path: '/booking' }));

    console.log("navItems: ", navItems[0].html());
    console.log("navCart: ", navCart.html());

    navbar.find('ul').append(navItems);
    navbar.find('ul').append(navCart);

    console.log("navbar: ", navbar.html());
    //  navbar.append(cartButton);

    //cartButton.popover();

    return navbar;
};