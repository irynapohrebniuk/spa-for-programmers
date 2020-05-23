import $ from 'jquery';
import { Bucket } from '../bucket';

export const cartSmallRooms = () => {

    let bucket = Bucket.getInstance();
    const rooms = bucket.getRooms();
    
    const item = (room) => {

        return (`
        <div id="cart-r-item-${room.id}" class="row align-items-center">
            <div class="col-md-6 col-sm-12 align-middle">
                <h6>${room.name}</h6>
                <div>${room.checkIn} - ${room.checkOut}</div>
                <div class="text-muted">
                    <span id="price-r-${room.id}">${room.price}</span>
                    <span> $</span>
                    <span>per night</span>
                </div>
            </div> 
            <div class="col-md-2 text-muted text-center">
                <span id="nights-${room.id}">${room.nights} </span> 
            </div>
            <div class="col-md-2 quantity text-center">
                ${room.quantity}
            </div>
            <div class="col-md-2 text-center">
                <span id="total-price-r-${room.id}">${room.totalPrice} </span>
                <span>$</span>
            </div>
        </div> 
        `);
    }

    const fragment = $(new DocumentFragment);
    const list = rooms.map((room) => `<li class="list-group-item">${item(room)}</li>`);

    fragment.append(list);

    return fragment;

}