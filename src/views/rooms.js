import $ from 'jquery';
import { getService } from '../common/get-service';
import { roomDetails } from '../components/card-room-details';
import { dateSelector } from '../components/date-selector'

export const rooms = () => {

    const fragment = $(new DocumentFragment());

    fragment.append(dateSelector)

    const typeOfService = "rooms";

    const promise = getService.getServices(typeOfService)
        .then(rooms => {
            for (let i = 0; i < rooms.length; i++) {
                let room = rooms[i];
                fragment.append(roomDetails(room));
            }
            return fragment;
        });

    return Promise.resolve(promise);


}