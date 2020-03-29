import $ from 'jquery';
import {buttonDelete} from './button-delete';

export var cartContent = (rooms) => {
    const fragment = $(new DocumentFragment());
    const container = $('<div class="cart-items"></div>');

    const content = $('<h3 class="text-center m-3">Twój koszyk</h3>');
    container.append(content);

    const tr = $('<div class="row headings"></div>');
    const columnNames = ['lp', 'Nazwa produktu', 'Cena', 'Ilość', 'Wartość', ''];
    container.append(tr);
    for (const name of columnNames) {
        const td = $('<div class="col-sm"></div>').text(name);
        tr.append(td);
    }


    for (let room of rooms) {
        container.append(createCartItem(room));
        console.log("Room of rooms: ", room);
    }

    function createCartItem(room) {
        const tr = $('<div class="row cart-item"></div>');
        const td_id = $(`<div id="id" class="col-sm">${room.id}</div>`);
        const td_name = $(`<div id="name" class="col-sm">${room.name}</div>`);
        const td_price = $(`<div id="price" class="col-sm">${room.price}</div>`);
        const td_quantity = $(`<div id="quantity" class="col-sm"></div>`);
        const input = $('<input type="number" class="input-group-sm" value="1">');
        $('input').change((event) => updateCartTotal(event.target));
        td_quantity.append(input);
        const td_total_price = $('<div id="total_price" class="col-sm"></div>');
        td_total_price.text('4');
        tr.append(td_id, td_name, td_price, td_quantity, td_total_price);
        tr.append(buttonDelete(room.id));
        return tr;
    }

    fragment.append(container);

    const total_price_array = $('#total_price').html();
    //  console.log("prices", total_price_array);
    const total_payment = 0;
    // const total_payment = total_price_array.reduce((sum, price) => sum + price, 0);
    const total = $(`<div class="row"><div class="col-sm">Razem do zaplaty</div><div id="total" class="col-sm">${total_payment}</div></div>`);

    container.append(total);

    return fragment;
}


function updateCartTotal() {
    const prices = $("input").val();
    console.log(prices);
    const total_price = prices => prices.reduce((sum, price) => sum + price, 0);
    console.log(total_price);

}