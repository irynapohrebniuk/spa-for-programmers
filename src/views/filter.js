import { filterServices } from '../common/filter-service';
import { card } from '../components/card'
import { alert } from '../components/alert'

export const filter = (data) => {
    
    const typeOfService = "rooms"
    const fragment = $('<div class="row row-cols-1 row-cols-sm-1 row-cols-md-4">')
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
        .catch((error) => {
            return fragment.prepend(alert(error.message));
        })

    return Promise.resolve(promise);

}