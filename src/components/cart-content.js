import $ from 'jquery';
import {buttonDelete} from './button-delete';

export var cartContent = (rooms) => {
    const fragment = $(new DocumentFragment());
    const container = $('<div class="cart-items"></div>');

    const content = $('<h3 class="text-center m-3">Twój koszyk</h3>');
    container.append(content);

    const tr = $('<div class="row headings"></div>');
    const columnNames = ['Nazwa produktu', 'Cena', 'Ilość', 'Wartość', ''];
    container.append(tr);
    for (const name of columnNames) {
        const td = $('<div class="col-sm"></div>').text(name);
        tr.append(td);
    }


    for (let room of rooms) {
        container.append(createCartItem(room));
    }

    function createCartItem(room) {
        const tr = $(`<div id="${room.id}" class="row cart-item"></div>`);
        const td_name = $(`<div class="col">${room.name}</div>`);
        const td_price = $(`<div  class="col price">${room.price}</div>`);
        const td_quantity = $('<input type="number" class="input-group quantity" value="">');
        const quantity = room.quantity.toString();
        td_quantity.attr('value', quantity);
        const td_total_price = $(`<div class="col total_price">${room.price * room.quantity}</div>`);
        tr.append(td_name, td_price, td_quantity, td_total_price);
        tr.append(buttonDelete(room.id));

        td_quantity.change((event) => updateItemTotal(room.id));
        return tr;
    }

    fragment.append(container);
    const total = $(`<div class="row"><div class="col-sm">Razem do zaplaty</div><div id="total" class="col-sm"></div></div>`);
    container.append(total);
    return fragment;
}

function updateItemTotal(id) {
    const quantity = $(`#${id}`).find('input').val();
    const price = $(`#${id}`).find('.price').text();
    const totalPrice = Number(quantity) * Number(price);
    $(`#${id}`).find('.total_price').text(totalPrice.toString());
}