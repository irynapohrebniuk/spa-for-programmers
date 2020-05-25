import { getService } from '../common/get-service';
import { roomDetails } from '../components/card-room-details';
import { dateSelector } from '../components/date-selector'
import { alert } from '../components/alert'

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
        })
        .catch((error) => {
            return fragment.prepend(alert(error.message));
        })

    return Promise.resolve(promise);


}