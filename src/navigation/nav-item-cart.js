import $ from 'jquery';
import {cart} from "../components/cart";

export const navItemCart = (event) => {
    const navItemCart = $('<span id="cart"></span>');
    const anchor = $('<a class="btn btn-link text-light"></a>');
    const icon = $('<i class="fas fa-shopping-cart"></i>');
    const cartIcon = anchor.append(icon);
    cartIcon.on('click', event)
            .hover(function () {
                $('body').append(cart);
            });

    navItemCart.append(anchor);

    return navItemCart;
};