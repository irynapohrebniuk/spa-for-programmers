import { gridTwoColumns } from "./grid";
import { carousel } from "./carousel";
import { cardRoom } from "./card-room";

export const roomDetails = (room) => {

    let images_1 = require.context('../img/rooms/1');
    let images_2 = require.context('../img/rooms/2');
    let images_3 = require.context('../img/rooms/3');
    let images_4 = require.context('../img/rooms/4');

    let images = [images_1, images_2, images_3, images_4];
    
    const fragment = $('<div class="card p-2 m-3"></div>');

    const buttonMore = $(`
        <button class="btn" type="button" data-toggle="collapse" data-target="#collapse${room.id}" aria-expanded="false" aria-controls="collapse${room.id}">
            <h6>ROOM FACILITIES<span><i class="fas fa-angle-down p-2"></i></span></h6>
        </button>
    `);
    
    const roomFacilities = () => {
        
        const ul = $('<ul class="row">');
        const facilities = room.facilities;
        for (let i = 0; i <facilities.length; i++) {
            ul.append(`<li class="col col-md-4 col-sm-12"><span><i class="fas fa-check p-2"></i> ${facilities[i]}</span></li>`);
        }
        const fragment = $(`
        <div class="collapse" id="collapse${room.id}">
            <div class="w-100" id="roomFacilities">  
            </div>
        </div>
        `);
        
        fragment.find('#roomFacilities').append(ul);
        return fragment;
    }


    fragment.append(gridTwoColumns('room-details','room'));
    fragment.find('#room').append(carousel(images[room.id],room.id));
    fragment.find('#room-details').append(cardRoom(room));
    fragment.append(buttonMore);
    fragment.append(roomFacilities);
    
    return fragment;
}

