import $ from 'jquery';
import { getService } from '../common/get-service';
import { roomDetails } from '../components/card-room-details';

export const room = (data) => {

    const fragment = $(new DocumentFragment());

    const typeOfService = "rooms";
    const promise = getService.getServiceInfo(typeOfService, data.id)
        .then(room => { 
            return fragment.append(roomDetails(room));
            })
    return Promise.resolve(promise);
}