import $ from 'jquery';
import { getService } from '../common/get-service';
import { cardTreatment } from '../components/card-treatment'
import { alert } from '../components/alert'

export const treatments = () => {

    const typeOfService = "treatments";
    const fragment = $(new DocumentFragment());

    const promise = getService.getServices(typeOfService)
        .then(treatments => {
            fragment.append('<div class="container-fluid"><div class="row  justify-content-center"></div></div>');
            treatments.map((treatment) => {
                fragment.find('.row').append(cardTreatment(treatment));
            })
            return fragment;
        })
        .catch((error) => {
            return fragment.prepend(alert(error.message));
        })

    return Promise.resolve(promise);
}