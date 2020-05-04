import $ from 'jquery';
import { getService } from '../common/get-service';


export const treatments = () => {
    const fragment = $(new DocumentFragment());
    const typeOfService = "treatments";
    fragment.append('<div class="container-fluid"><h2 class="text-center mt-2">Treatments</h2><div class="row  justify-content-center"></div></div>');
    return getService.getServices(typeOfService)
        .then(treatments => {
            for (let i = 0; i < treatments.length; i++) {
                fragment
                    .find('div.row')
                    .append(
                        `<div class="col-md-4 col-sm-6 col-lg-3 p-1 m-1"> 
                            <div class="card">
                                <img src="https://placeimg.com/640/240/14" class="card-img-top" alt="image" style="width='100%'">
                                <div class="card-body">
                                    <h5 class="card-title">${treatments[i].name}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="text-center">
                                        <a href="#" id="add" class="btn btn-primary">Zarezerwuj</a>
                                    </div>
                                </div>
                            </div>
                        </div>`);
            }
            return fragment;

        })

}