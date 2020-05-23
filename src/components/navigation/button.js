import $ from 'jquery';

export const button = (name,click) => {
    const button = $('<div></div>');
    button.addClass("btn btn-lg btn-dark mt-4 btn-block");
    button.on('click', click).text(name);

    return button;
};
