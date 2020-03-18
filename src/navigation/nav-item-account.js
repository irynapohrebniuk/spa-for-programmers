import $ from 'jquery';

export const navItemAccount = (click) => {
    const navItemAccount = $('<span id="account"></span>');
    const anchor = $('<a class="btn btn-link text-light"></a>');
    const icon = $('<i class="fas fa-user"></i>');
    anchor.append(icon).on('click', click);
    anchor.append(icon).on('click', click);
    navItemAccount.append(anchor);
    return navItemAccount;
};

