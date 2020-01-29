import $ from 'jquery';
import { treatmentService } from '../common/treatment-service.js';


export const treatments = () => {
    const fragment = $(new DocumentFragment());
    fragment.append('<div class="container-fluid"><h2 class="text-center mt-2">Treatments</h2><div class="row  justify-content-center"></div></div>');
    return treatmentService.getTreatments().then(treatments => {
        for (let i = 0; i < treatments.length; i++) {
            fragment
                .find('div.row').append(
                    `<div class="col-md-3 p-1 m-1"> <div class="card">
                        <img src="https://placeimg.com/640/240/14 class="card-img-top" alt="image" style="width='100%'">
                        <div class="card-body">
                        <h5 class="card-title">${treatments[i].name}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Zarezerwuj</a>
                        </div></div>`);
        }
        return fragment;

    })

}