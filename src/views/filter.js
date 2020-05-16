import $ from 'jquery';
import { filterServices } from '../common/filter-service';
import { card } from '../components/card'

export const filter = (data) => {
    console.log("filter page: checkIn = ", data)
    const typeOfService = "rooms"

    const fragment = $('<div class="row w-100">')

    const promise = filterServices.filterService(typeOfService, data.checkIn, data.checkOut)
        .then(rooms => {
            rooms.map(room => {
                fragment.append(card(room))
            })
            return fragment
        })

    return Promise.resolve(promise);

}