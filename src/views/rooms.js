import $ from 'jquery';
import { roomsService } from '../common/rooms-service.js';

export const rooms = () => {
    const fragment = $(new DocumentFragment());

    return roomsService.getRooms().then(pokoje => {

            fragment.append('<h2>Rooms</h2><div class="row"></div>');
            for (let i = 0; i < pokoje.length; i++) {
                fragment
                    .append(`<div class="row" style="grid-gutter-width: 30px;"`)
                    .find('div.row').append(
                        `<div class="card col-md-3">
                        <img src="https://placeimg.com/640/240/14 class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${pokoje[i].name}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Zarezerwuj</a>
                        </div></div>`);
            }

            return fragment;

        }

    )

}