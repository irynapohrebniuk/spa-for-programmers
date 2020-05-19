import $ from 'jquery';
import { getService } from "../common/get-service"

export const contact = () => {
    const fragment = $(new DocumentFragment());
    const container = $('<div class="container-fluid"></div>');
    fragment.append(container);

    const contact = (hotel) => {
        return (`
        <div class="p-4">
            <h4>${hotel.name}</h4>
            <div>${hotel.contact.street}</div>
            <div>${hotel.contact.city}</div>
            <div>${hotel.contact.country}</div>
            <div>${hotel.contact.zipcode}</div>
        </div>
        `)
    }

    const promise = getService.getServiceHotelInfo()
        .then(hotel => {
           fragment.append(contact(hotel));
           return fragment
        })
    
    

    return Promise.resolve(promise);
}