import $ from 'jquery';
import {Bucket} from "../bucket";


export const cartContent = (rooms) => {
    const fragment = $('<div class="container width-50 float-right"></div>');
    const bucket = Bucket.getInstance();

    for (let room of rooms) {
        const cartItem = item(room);
        fragment.append(cartItem);
    }

    function item(room) {
        const fragment = $(`
            <div id="cart-item-${room.id}" class="cart bg-light p-3 m-2">
                <div class="row">
                    <div class="col-11">
                        <div class="container">
                            <h4>${room.name}</h4>
                            <h6>Price: <span id="price-${room.id}" class="m-2 p-2">${room.price} </span><span>PLN</span></h6>
                            <div>
                                <div class="row">
                                    <div class="col">Check-in:</div>
                                    <div id="check-in-${room.id}" class="col">${room.checkIn}</div>
                                </div>
                                <div class="row">
                                    <div class="col">Check-out:</div>
                                    <div id="check-out-${room.id}" class="col">${room.checkOut}</div> 
                                </div>
                            </div>
                            
                            <hr>
                                
                            <div class="row align-items-center pb-3">
                                <div class="col-4 quantity">
                                
                                </div>
                                <div id="total-price-${room.id}" class="col-8 align-middle text-right"><span><h5>${room.totalPrice}</span><span>&nbsp;$</h5></span></div>
                            </div>
                        </div>
                    </div>
                    <div id="btn-delete" class="col-1 text-right"></div>
                </div>
            </div>`);

        const anchor = $(`<a id="btn-del-${room.id}" class="btn btn-link text-dark">&times;</a>`);
        anchor.on('click', (event) => {
            let row = $('#cart-item-' + room.id);
            row.remove();
            const id = row.id;
            bucket.deleteRoom(id);
            const s = sum();
            $("#total").html(s);
            location.reload();
        })
        fragment.find('#btn-delete').append(anchor);

        const input = $(`<input id="quantity-${room.id}" type="number" placeholder="${room.quantity}" value="${room.quantity}" class="form-control" aria-label="Quantity" pattern="[1-9]">`);
        input.change(function () {
            const id = this.id.substring(9, this.id.length + 1);
            const quantity = $('#quantity-' + id).val();
            const price = $('#price-' + id).text();
            const totalPrice = Number(quantity) * Number(price);
            fragment.find("#total-price-" + id).text(totalPrice);
            bucket.updateRoom(id, quantity, totalPrice,checkIn,checkOut);
            $("#total").text(sum());

        });
        fragment.find('.quantity').append(input);

        return fragment;
    }

    const total = $(
        `<div class="bg-light p-3 m-2 text-right">
            <h4>
                <span class="m-2">TOTAL:</span>
                <span id="total" class="m-2">${sum()}</span>
                <span class="m-2">PLN</span>
            </h4>
        </div>`);


    function sum() {
        let rooms = bucket.getRooms();
        let s = 0;
        for (let room of rooms) {
            s += Number(room.totalPrice);
        }
        return s;
    }

    fragment.append(total);

    return fragment;

}
