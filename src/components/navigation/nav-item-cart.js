import $ from 'jquery'

const navCart = (click) => {
    const navCart = $('<span id="cart"></span>')
    const anchor = $('<a class="btn btn-link text-dark"></a>')
    const icon = $('<i class="fas fa-shopping-cart"></i>')
    const cartIcon = anchor.append(icon)
    cartIcon.on('click', click)
    navItemCart.append(anchor)

    return navCart
}

export { navCart }