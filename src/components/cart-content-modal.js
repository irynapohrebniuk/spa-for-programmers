import $ from 'jquery';

export var cartContentModal = (rooms) => {
    const fragment = $(new DocumentFragment());
    const container = $('<div id="cartContentModal" class="cart-content-model"></div>');

    const content = $('<h3 class="text-center m-3 row-my">Twój koszyk</h3>');
    container.append(content);

    const tr = $('<div class="row headings row-my"></div>');
    const columnNames = ['Nazwa produktu', 'Ilość','Wartość'];
    container.append(tr);
    for (const name of columnNames) {
        const td = $('<div class="col-my"></div>').text(name);
        tr.append(td);
    }

    for (let room of rooms) {
        container.append(createCartItem(room));
    }

    function createCartItem(room) {
        const tr = $('<div class="row cart-item row-my"></div>');
        const td_name = $(`<div id="name" class="col-my">${room.name}</div>`);
        const td_price = $(`<div id="price" class="col-my">${room.price}</div>`);
        const td_quantity = $(`<div id="quantity" class="col-my">1</div>`);
        tr.append(td_name, td_quantity, td_price);
        return tr;
    }

    fragment.append(container);

    function sum(rooms) {
        let sum = 0;
        for (let room of rooms) {
            sum += room.price;
        }
        return sum;
    }

    const total = $(`<h4 class="row-my p-3 text-center">Total price: ${sum(rooms)}</h4>`);
    container.append(total);

    return fragment;
}