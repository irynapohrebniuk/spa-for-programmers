import $ from 'jquery';

export const navItem = (text, click) => {
    const navItem = $('<li class="nav-item"></li>');
    const anchor = $('<a class="btn btn-link text-dark"></a>');
    anchor.text(text).on('click', click);

    navItem.append(anchor);

    return navItem;
};