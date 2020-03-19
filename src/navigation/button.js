import $ from 'jquery';

export const button = (name,click) => {
    const button = $('<span></span>');
    button.addClass("btn btn-lg btn-primary mt-4 btn-block");
    button.on('click', click).text(name);

    return button;
};
