import $ from 'jquery';
import { Bucket } from '../bucket';
import { totalSum } from '../common/calc'

export const cartRooms = () => {

    let bucket = Bucket.getInstance();
    const rooms = bucket.getRooms();
    const treatments = bucket.getTreatments();

    const ul = $('<ul class="list-group list-group-flush">');

    const item = (room) => {

        return (`
         <div class="row align-items-center">
            <div class="col-md-5 col-sm-12 align-middle">
                 <h5>${room.name}</h5>
                 <div>${room.checkIn} - ${room.checkOut}</div>
                 <div class="text-muted">
                    <span id="price-r-${room.id}">${room.price}</span>
                    <span> $</span>
                    <span>per night</span>
                 </div>
            </div> 
            <div class="col-md-2 text-muted align-middle">
                <span id="nights-${room.id}">${room.nights} </span> 
                <span>nights</span>
                </div>
             <div class="col-md-2 quantity align-middle">
                 <input id="quantity-r-${room.id}" type="number" min="1" max="5" placeholder="${room.quantity}" value="${room.quantity}" class="form-control text-center" aria-label="Quantity" pattern="[1-9]">
             </div>
             <div class="col-md-2 text-center">
                <span id="total-price-r-${room.id}">${room.totalPrice} </span>
                <span>$</span>
             </div>
            <div  class="col-md-1 btn-del bg-transparent text-center align-middle">
                <a>
                    <i id="btn-del-r-${room.id}" class="fa fa-times btn" aria-hidden="true"></i>
                </a>
            </div>
         </div> 
        `);
    }

    const li = rooms.map((room) => `<li id="cart-item-r-${room.id}" class="list-group-item">${item(room)}</li>`);

    ul.append(li);

    ul.find('.btn-del').on('click', (e) => {
        const btn_id = e.target.id;
        const id = btn_id.slice(10);
        let row = $('#cart-item-r-' + id);
        row.remove();
        console.log(id);
        bucket.deleteRoom(id);
        // location.reload();
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