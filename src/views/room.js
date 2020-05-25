import { getService } from '../common/get-service';
import { roomDetails } from '../components/card-room-details';
import { alert } from '../components/alert'

export const room = (data) => {

    const fragment = $(new DocumentFragment());

    const typeOfService = "rooms";
    const promise = getService.getServiceInfo(typeOfService, data.id)
        .then(room => { 
            return fragment.append(roomDetails(room));
            })
        .catch((error) => {
            return fragment.prepend(alert(error.message));
        })

    return Promise.resolve(promise);
}