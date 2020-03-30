import $ from 'jquery';

export const home = () => {

    const fragment = $('<div class="container-fluid"><h2 class="text-center mt-2">Home</h2></div>');
    return Promise.resolve(fragment);
}