import $ from 'jquery';
import { getService } from '../common/get-service';
import { cardTreatment } from '../components/card-treatment'

export const treatments = () => {

    const typeOfService = "treatments";
    
    const promise = getService.getServices(typeOfService)
        .then(treatments => {
            const fragment = $(new DocumentFragment());
            
            fragment.append('<div class="container-fluid"><div class="row  justify-content-center"></div></div>');
            treatments.map((treatment) => {
                fragment.find('.row').append(cardTreatment(treatment));
            })
            return fragment;
        })

    return Promise.resolve(promise);
}