import $ from 'jquery';
import { Bucket } from "../bucket";
import { carousel } from './carousel';

export const card = (room, checkIn, checkOut) => {

    let images_1 = require.context('../img/rooms/1', false);
    let images_2 = require.context('../img/rooms/2', false);
    let images_3 = require.context('../img/rooms/3', false);
    let images_4 = require.context('../img/rooms/4', false);

    let images = [images_1, images_2, images_3, images_4];

    const fragment = $(new DocumentFragment());
    
    fragment
        .append(
            `
            <div class="col-sm-12 col-md-6 col-lg-3 pb-3 pt-3">
                <div id="room-${room.id}" class="card">
                    <div class="card-body">
                        <h5 class="card-title">${room.name} </h5>
                        <span class="topright"> ${room.price} $</span>
                    </div>
                </div>
            </div>
        `);

        const cartButton = room => {
            let bucket = Bucket.getInstance();
            const button = $('<button></button>')
                .addClass("btn btn-md btn-dark p-2 mb-5")
                .css("width", "60%")
                .html('Reserve')
                .on("click", function() {
                    const quantity = 1;
                    bucket.addRoom(room.id, room.name, room.price, quantity, room.totalPrice, checkIn, checkOut);
                });
            return button;
        }
        
        const centerDiv = () => {
            return $('<div></div>').addClass("text-center");
        }

    fragment.find('.card').append(centerDiv);
    fragment.find('.text-center').append(cartButton(room));
    fragment.find('.card').prepend(carousel(images[room.id],room.id));


    return fragment;
}


