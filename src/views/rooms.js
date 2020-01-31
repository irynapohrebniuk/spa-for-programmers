import $ from 'jquery';
import { getService } from '../common/get-service';

export const rooms = () => {
    const fragment = $(new DocumentFragment());
    const typeOfService = "rooms";
    fragment.append('<div class="container-fluid"><h2 class="text-center mt-2">Rooms</h2><div class="row  justify-content-center"></div></div>');
    return getService.getServices(typeOfService)
        .then(rooms => {
                for (let i = 0; i < rooms.length; i++) {
                    fragment
                        .find('div.row')
                        .append(
                            `<div class="col-md-4 col-sm-6 col-lg-3 p-1 m-1">
                                <div class="card">
                                    <img src="https://placeimg.com/640/240/14 class="card-img-top" style="width='100%' alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">
                                            ${rooms[i].name}
                                            </h5>
                                            <p class="card-text">
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                            </p>
                                            <a href="#" class="btn btn-primary">
                                            Zarezerwuj
                                            </a>
                                        </div>
                                    </div>
                            </div>`);
                }

                return fragment;

            }

        )

}