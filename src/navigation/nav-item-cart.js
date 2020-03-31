import $ from 'jquery';
import {cart} from "../components/cart";

export const navItemCart = (click) => {
    const navItemCart = $('<span id="cart"></span>');
    const anchor = $('<a class="btn btn-link text-light"></a>');
    const icon = $('<i class="fas fa-shopping-cart"></i>');
    const cartIcon = anchor.append(icon);
    cartIcon.on('click', click)
        .mouseover(function () {
            $("#modalCart").removeClass("hidden");
            $("#modalCart").addClass("visible");
            setTimeout(function () {
                $("#modalCart").addClass("visually");
            }, 20);
        })
        .mouseout(function () {
            $("#modalCart").addClass("hidden");
            $("#modalCart").removeClass("visually");
            $("#modalCart").removeClass("visible");
        })

    navItemCart.append(anchor);

    return navItemCart;
};