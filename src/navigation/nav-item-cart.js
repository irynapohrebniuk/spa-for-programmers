import $ from 'jquery';

export const navItemCart = (click) => {
    const navItemCart = $('<li class="nav-item"></li>');
    const anchor = $('<a class="btn btn-link text-light"></a>');
    const icon = $('<i class="fas fa-shopping-cart"></i>');
    anchor.append(icon).on('click', click);
    //  anchor.on('click', click);



    navItemCart.append(anchor);

    return navItemCart;
};