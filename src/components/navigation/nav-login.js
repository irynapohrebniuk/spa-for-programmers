import $ from 'jquery';


const navLogin = (click) => {
    const navLogin = $('<li class="icon-hover pt-1 pb-1"></li>');
    const anchor = $('<a class="btn btn-link text-dark"></a>');
    const icon = $('<i class="fas fa-sign-in-alt"></i>');
    anchor.append(icon).on('click', click);
    navLogin.append(anchor);
    return navLogin;
}

const navMobileLogin = (click) => {
    const navLogin = $('<li></li>');
    const anchor = $('<a class="btn btn-link text-dark"></a>');
    const icon = $('<i class="fas fa-sign-in-alt pr-3"></i>');
    const text = "Log in"
    anchor.append(icon).on('click', click);
    anchor.append(text);
    navLogin.append(anchor);
    return navLogin;
}

export { navLogin, navMobileLogin }




