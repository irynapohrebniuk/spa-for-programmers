import $ from 'jquery';

export const cartEmpty = () => {
    const container = $('<div class="container"></div>');
    const content = $('<h3 class="text-center m-3">Koszyk jest pusty</h3>');
    container.append(content);

    return container;
}