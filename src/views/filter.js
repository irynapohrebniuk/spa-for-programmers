import $ from 'jquery';
import { filterServices } from '../common/filter-service';
import { card } from '../components/card'

export const filter = (data) => {
    
    const typeOfService = "rooms"
    const fragment = $('<div class="row w-100">')
    const checkIn = data.checkIn;
    const checkOut = data.checkOut;

    const nights = (checkIn, checkOut) => {
        const calc = (Date.parse(checkOut) - Date.parse(checkIn))/86400/1000;
        return calc;
     }
   
    const promise = filterServices.filterService(typeOfService, checkIn, checkOut)
        .then(rooms => {
            rooms.map(data => {
                fragment.append(card(data, checkIn, checkOut, nights(checkIn, checkOut)))
            })
            return fragment
        })

    return Promise.resolve(promise);

}