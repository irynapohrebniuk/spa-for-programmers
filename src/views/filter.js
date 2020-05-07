import $ from 'jquery';
import { filterService } from '../common/filter-service';
import { card } from '../components/card';

export const filter = () => {

    const fragment = $(new DocumentFragment());
    fragment.append(`
        <div class="container-fluid">
        <div class="row">
        </div>
        </div>`);

    
    const typeOfService = "rooms";

    const promise = filterService.filterService(typeOfService)
        .then(rooms => {
            for (let i = 0; i < rooms.length; i++) {
                let room = rooms[i];
                fragment.find('.row').append(card(room));
            }
            return fragment;
        });

    return Promise.resolve(promise);


}