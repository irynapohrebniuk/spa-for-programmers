import $ from 'jquery';

export const navItemCart = (click) => {
    const navItemCart = $('<span></span>');
    navItemCart.addClass("float-right");
    const anchor = $('<a class="btn btn-link text-light"></a>');
    const icon = $('<i class="fas fa-shopping-cart"></i>');
    anchor.append(icon).on('click', click);
    navItemCart.append(anchor);

    return navItemCart;
};