import $ from 'jquery';
import { getService } from '../common/get-service';
import { card } from '../components/card';
import {datePicker} from "../components/date-picker";

export const rooms = () => {

    const fragment = $(new DocumentFragment());

    const typeOfService = "rooms";
    fragment.append('<div class="container-fluid"><h2 class="text-center mt-2">Rooms</h2><div class="row  justify-content-center"></div></div>');

    const promise = getService.getServices(typeOfService)
        .then(rooms => {
            console.log("rooms: ", rooms);
            for (let i = 0; i < rooms.length; i++) {
                let room = rooms[i];
                fragment.find('div.row').append(card(room));

            }

            return fragment;
        });

    return promise;

}