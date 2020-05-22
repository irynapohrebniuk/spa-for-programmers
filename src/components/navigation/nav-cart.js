import $ from 'jquery'
import { bookingSmall } from '../../views/booking-small'

const navCart = (click) => {
    const navCart = $('<li class="icon-hover p-1"></li>')
    const anchor = $('<a class="btn btn-link text-dark"></a>')
    const icon = $('<i class="fas fa-shopping-cart hover"></i>')
    const cartIcon = anchor.append(icon)
    cartIcon
        .on('click', click)
        .on('mouseover', () => { 
            navCart.append(bookingSmall);
        })
        .on('mouseout', () => {
            navCart.find('#cartModal').remove();
        });
    navCart.append(anchor)

    return navCart
}

const navMobileCart = (click) => {
    const navMobileCart = $('<li></li>')
    const anchor = $('<a class="btn btn-link text-dark"></a>')
    const icon = $('<i class="fas fa-shopping-cart pr-2 hover"></i>')
    const text = "Your cart"
    anchor.append(icon)
        .on('click', click)
    anchor.append(text);
    navMobileCart.append(anchor)

    return navMobileCart
}

export { navCart, navMobileCart }