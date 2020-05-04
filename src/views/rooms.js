import $ from 'jquery';
import { getService } from '../common/get-service';
import { card } from '../components/card';
import {datePicker} from "../components/date-picker";

export const rooms = () => {

    const fragment = $(new DocumentFragment());
    fragment.append(`
        <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-3 pt-3 bg-light" id="leftLayout"></div>
            
            <div class="col-sm-12 col-md-6 col-lg-9 justify-content-center">
                <div class="row" id="rightLayout"></div>
            </div>
          </div>
        </div>`);

    fragment.find('#leftLayout').append(datePicker);

    const typeOfService = "rooms";

    const promise = getService.getServices(typeOfService)
        .then(rooms => {
            for (let i = 0; i < rooms.length; i++) {
                let room = rooms[i];
                fragment
                    .find('#rightLayout')
                    .append(card(room));
            }
            return fragment;
        });

    return Promise.resolve(promise);


}