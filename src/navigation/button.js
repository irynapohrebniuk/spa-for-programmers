import $ from 'jquery';

export const button = (click) => {
    const button = $('<span id="login"></span>');
    button.addClass("btn btn-lg btn-primary mt-4 btn-block");
    button.on('click', click).text('CREATE ACCOUNT');

    return button;
};
