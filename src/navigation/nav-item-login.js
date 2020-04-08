import $ from 'jquery';

export const navLogin = (click) => {
    const navLogin = $('<span id="login"></span>');
    const anchor = $('<a class="btn btn-link text-dark"></a>');
    const icon = $('<i class="fas fa-sign-in-alt"></i>');
    anchor.append(icon).on('click', click);
    navLogin.append(anchor);
    return navLogin;
};

