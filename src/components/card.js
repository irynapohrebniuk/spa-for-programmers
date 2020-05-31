import $ from 'jquery';
import { Bucket } from "../bucket";
import { carousel } from './carousel';
import { cardIcons } from './card-icons';
import { alert } from './alert';

export const card = (room, checkIn, checkOut, nights) => {

    let images_1 = require.context('../img/rooms/1', false);
    let images_2 = require.context('../img/rooms/2', false);
    let images_3 = require.context('../img/rooms/3', false);
    let images_4 = require.context('../img/rooms/4', false);

    let images = [images_1, images_2, images_3, images_4];

    const fragment = $(new DocumentFragment());
    
    const card = (`
            <div class="col col-sm-12 col-md-6 col-lg-3 pb-3 pt-3">
                <div id="room-${room.id}" class="card">
                    <div class="card-body">
                        <h5 class="card-title">${room.name} </h5>
                        <span class="topright"> ${room.price * nights} $</span>
                        <h6 class="card-title">${checkIn} - ${checkOut} </h6>
                        <h6 class="text-muted">${nights} nights</h6>
                    </div>
                    <div class="card-btn text-center"></div>
                </div>
            </div>
        `);

        const addRoomButton = (room, checkIn, checkOut, nights) => {
            let bucket = Bucket.getInstance();
            
            const button = $(`
                <button 
                    data-toggle="modal" 
                    data-name="${room.name}" 
                    data-price="${room.price}" 
                    data-target="#spaModal">
                </button>`)
                .addClass("btn btn-md btn-dark p-2 mb-5")
                .css("width", "60%")
                .html('Reserve')
                .on('click', function() {
                    const quantity = 1;
                    const totalPrice = nights * room.price * quantity;
                    bucket.addRoom(room.id, room.name, room.price, nights, quantity, totalPrice, checkIn, checkOut);
                });
                
            return button;
        }
        
    fragment.append(card);
    fragment.find('.card').prepend(carousel(images[room.id],room.id));
    fragment.find('.card-body').append(cardIcons("Beds", room.beds, "bed"));
    fragment.find('.card-body').append(cardIcons("Quests", room.guests, "user"));
    fragment.find('.card-btn').append(addRoomButton(room, checkIn, checkOut, nights));
    
    return fragment;
}


