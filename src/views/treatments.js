import $ from 'jquery';
import { treatmentService } from '../common/treatment-service.js';


export const treatments = () => {
    const fragment = $(new DocumentFragment());
    fragment.append('<h2>Treatments</h2><div class="row">');
    return treatmentService.getTreatments().then(treatments => {
        for (let i = 0; i < treatments.length; i++) {
            fragment
                .append(
                    `<div class="card col-sm" style="width: 18rem;">
                        <img src="https://placeimg.com/640/240/14 class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${treatments[i].name}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Zarezerwuj</a>
                        </div></div>`);
        }
        fragment.append('</div>');
        return fragment;

    })

}