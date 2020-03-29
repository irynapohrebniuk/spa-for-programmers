import $ from 'jquery';

export const cartEmpty = () => {
    const cartEmpty = $('<div class="container-fluid"></div>');
    const content = $('<h3 class="text-center m-3">Koszyk jest pusty</h3>');
    cartEmpty.append(content);

    return cartEmpty;
}