import $ from 'jquery';
import { getService } from '../common/get-service';
import { card } from '../components/card';

export const rooms = () => {
    const fragment = $(new DocumentFragment());
    const typeOfService = "rooms";
    fragment.append('<div class="container-fluid"><h2 class="text-center mt-2">Rooms</h2><div class="row  justify-content-center"></div></div>');
    const promise = getService.getServices(typeOfService)
        .then(rooms => {
            for (let i = 0; i < rooms.length; i++) {

                fragment.find('div.row').append(card(rooms[i].name));
            }

            return fragment;
        });

    return promise;

}