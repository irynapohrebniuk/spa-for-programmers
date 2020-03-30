import $ from 'jquery';
import { navItem } from './nav-item';
import { routeChange } from '../router/route-change';
import { routes } from '../router/routes';
import { navItemCart } from '../navigation/nav-item-cart';
import { navLogin } from '../navigation/nav-item-login';
import {Bucket} from "../bucket";
import {cartContent} from "../components/cart-content";
import {cartEmpty} from "../components/cart-empty";
import {cart} from "../components/cart";

export const nav = () => {
    const navbar = $(`
    <nav class="navbar navbar-expand navbar-dark bg-dark opacity-80 fixed-top">
    <span class="navbar-brand logo">
    </span>
      <ul class="navbar-nav mr-auto"></ul>
    </nav>
  `);

    // chcemy zbudowac tablice elementow navItem z odpowiednimi nazwami i callbackami
    const mainMenuItems = routes.map(route => {
        const { name, path, data } = route;
        //  console.log("path: ", path);
        if (data.group == 'main-menu')
            return navItem(name, () => navbar.trigger(routeChange, { path: path }));
    });
    navbar.find('ul').append(mainMenuItems);
    // create the icon of cart in navigation

    const userMenu = $('<div class="float-right" id="userMenu"></div>');

    const itemLogin = navLogin(() => navbar.trigger(routeChange, { path: '/login' }));
    userMenu.append(itemLogin);
    const navCart = navItemCart(() => navbar.trigger(routeChange, { path: '/booking' }));
    // navCart.mouseenter(function () {
    //      $('body').append(cart);
    // });
    // navCart.mouseleave(function () {
    //     $('body').remove(cart);
    // });
    userMenu.append(navCart);

    navbar.append(userMenu);


    return navbar;
};