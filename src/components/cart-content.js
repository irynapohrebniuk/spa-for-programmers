import $ from 'jquery';
import {buttonDelete} from './button-delete';
import {updateRoom} from "./cart-modal";

export var cartContent = (rooms) => {
    const fragment = $(new DocumentFragment());
    const item = $(`
    <div class="container bg-light p-3">
    <div class="row">
        <div class="col-md-4 col-sm-10 text-center">
            <a><img class="rounded mx-auto img-fluid p-1 " src="https://placeimg.com/640/240/14" alt=" " title=" "></a>
        </div>
        <div class="col-md-6 col-sm-12">
            <div class="container">
                <h4>Room</h4>
                <h6>Price: 300 zł</h6>
                <div>
                    <div class="row">
                        <div class="col">Check-in:</div>
                        <div class="col">01.01.2020</div>
                    </div>
                    <div class="row">
                        <div class="col">Check-out:</div>
                        <div class="col">10.01.2020</div> 
                    </div>
                </div>
                
                <hr>
                    
                <div class="row align-items-center pb-3">
                    <div class="col-4">
                        <select class="custom-select">
                            <option value="1 ">1</option>
                            <option value="2 ">2</option>
                            <option value="3 ">3</option>
                            <option value="4 ">4</option>
                            <option value="5 ">5</option>
                            <option value="6 ">6</option>
                            <option value="7 ">7</option>
                            <option value="8 ">8</option>
                            <option value="9 ">9</option>
                            <option value="10 ">10</option>
                        </select>
                      
                    </div>
                    <div class="col-8 align-middle text-right"><span>170</span><span>&nbsp;pln</span></div>
                </div>
            </div>
        </div>
        <div class="col-md-2 col-sm-2 text-right">
                <button type="button" class="btn btn-lg" aria-label="Delete">&#215;</button>
        </div>
        
        </div>
    </div>`);

    function createCartItem(room) {
        const tr = $(`<div id="${room.id}" class="row cart-item"></div>`);
        const td_name = $(`<div class="col-my">${room.name}</div>`);
        const td_price = $(`<div  class="col-my">${room.price}</div>`);
        const td_quantity = $('<div  class="col-my">');
        const input = $('<input type="number" placeholder="" class="quantity">');
        td_quantity.append(input);
        const td_total_price = $(`<div class="col-my total_price">${room.price}</div>`);
        const td_delete = $('<div class="col-my">');
        td_delete.append(buttonDelete(room.id));

        tr.append(td_name, td_price, td_quantity, td_total_price, td_delete);
      //  td_quantity.change((event) => updateItemTotal(room.id));
        return tr;
    }

    fragment.append(item);
    // const total = $(`<div class="row"><div class="col-sm">Razem do zaplaty</div><div id="total" class="col-sm"></div></div>`);
    // container.append(total);
    return fragment;
}

// function updateItemTotal(id) {
//
//     const quantity = $(`#${id}`).find('input').val();
//     const price = $(`#${id}`).find('.price').text();
//     updateRoom(id,quantity,price);
//     const totalPrice = Number(quantity) * Number(price);
//     $(`#${id}`).find('.total_price').text(totalPrice.toString());
//
// }