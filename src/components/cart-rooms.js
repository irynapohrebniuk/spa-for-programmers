import $ from 'jquery';
import { Bucket } from '../bucket';
import { routeChange } from '../router/route-change'
import { totalSum } from '../common/calc'

export const cartRooms = () => {

    let bucket = Bucket.getInstance();
    const rooms = bucket.getRooms();
    const treatments = bucket.getTreatments();

    const ul = $('<ul class="list-group list-group-flush">');

    const item = (room) => {
        return (`
            <div class="row align-items-center">
                <div class="col">
                    <div class='btn btn-room text-left pl-0'>
                        <h6 id="button-r-${room.id}">${room.name}</h6>
                    </div>
                    <a class="topright btn-del bg-transparent">
                        <i id="btn-del-r-${room.id}" class="fa fa-times btn" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            <div class="row align-items-center">
                <div class="col col-md-5 col-sm-6">
                    <div>Check-in: ${room.checkIn}</div> 
                    <div>Check-out: ${room.checkOut}</div>
                    <div class='text-left pl-0'>
                        <div class="text-muted">
                            <span id="price-r-${room.id}">${room.price}</span>
                            <span> $</span>
                            <span>per night</span>
                        </div>
                    </div>
                </div> 
                <div class="col col-md-2 col-sm-1 text-muted align-middle text-center">
                    <span id="nights-${room.id}">${room.nights} </span> 
                </div>
                <div class="col col-md-2 col-sm-1 quantity align-middle text-center">
                    <input id="quantity-r-${room.id}" type="number" min="1" max="5" placeholder="${room.quantity}" value="${room.quantity}" class="form-control text-center" aria-label="Quantity" pattern="[1-9]">
                </div>
                <div class="col col-md-2 col-sm-1 text-center">
                    <span id="total-price-r-${room.id}">${room.totalPrice} </span>
                    <span>$</span>
                </div>
                <div  class="col col-md-1 col-sm-1">
                </div>
            </div> 
        `);
    }

    const li = rooms.map((room) => `<li  class="list-group-item">${item(room)}</li>`);

    ul.append(li);

    ul.find('.btn-room').on('click', (e) => {
        const btn_id = e.target.id;
        const id = btn_id.slice(9);
        console.log("room id: ", e.target, id);
        ul.trigger(routeChange, { path: '/room', id: id})
    })

    ul.find('.btn-del').on('click', (e) => {
        const btn_id = e.target.id;
        const id = btn_id.slice(10);
        let row = $('#cart-item-r-' + id);
        row.remove();
        bucket.deleteRoom(id);
        $('#total').html(totalSum(rooms,treatments));
        if (bucket.isEmpty) location.reload();
    });

    ul.find('.quantity').on('change', (e) => {
        const id = e.target.id.slice(11);
        const quantity = $('#quantity-r-' + id).val();
        const nights = $('#nights-' + id).text();
        const price = $('#price-r-' + id).text();
        const totalPrice = Number(quantity) * Number(price) * Number(nights);
        $('#total-price-r-' + id).text(totalPrice);
        bucket.updateRoom(id, Number(quantity), Number(nights));
        $('#total').html(totalSum(rooms,treatments));
    });

    return ul;

}