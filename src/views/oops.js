import $ from 'jquery';

export const oops = () => {
    const fragment = $(new DocumentFragment());
    fragment
        .append('<h2>OOPS</h2>')
        .append('<p>Cos poszlo nie  tak</p>');

    return fragment;
};