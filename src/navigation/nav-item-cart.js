import $ from 'jquery';
// import {cart} from "../components/cart";

export const navItemCart = (click) => {
    const navItemCart = $('<span id="cart"></span>');
    const anchor = $('<a class="btn btn-link text-dark"></a>');
    const icon = $('<i class="fas fa-shopping-cart"></i>');
    const cartIcon = anchor.append(icon);
    cartIcon.on('click', click);
        // .mouseover(function () {
        //     $('#booking').removeClass('hidden');
        //     $('#booking').addClass('visible');
        //     setTimeout(function () {
        //         $('#booking').addClass('visually');
        //     }, 20);
        // })
        // .mouseout(function () {
        //     $('#booking').addClass('hidden');
        //     $('#booking').removeClass('visually');
        //     $('#booking').removeClass('visible');
        // })

    navItemCart.append(anchor);

    return navItemCart;
};