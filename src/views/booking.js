import $ from 'jquery';



export const booking = () => {
    const fragment = $(new DocumentFragment());
    fragment
        .append('<h2>Booking</h2>');


    return Promise.resolve(fragment);
};